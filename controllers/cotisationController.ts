import {Request, Response} from 'express';
import prisma from '../prisma/client';

// Ajouter une cotisation
export const addCotisation = async (req: Request, res: Response) => {
    const { amount, paidAt, memberId, associationId } = req.body;

    if (!amount || !paidAt || !memberId || !associationId) {
        return res.status(400).json({ error: 'Tous les champs sont requis' });
    }

    try {
        const newCotisation = await prisma.cotisation.create({
            data: {
                amount,
                paidAt: new Date(paidAt),
                memberId,
                associationId,
            },
        });
        res.status(201).json(newCotisation);

    } catch (error) {
        console.error('Erreur lors de l’ajout de la cotisation:', error);
        res.status(500).json({ error: 'Échec de l’ajout de la cotisation' });
    }
}

// Obtenir les cotisations (par association ou par membre)
export const getCotisations = async (req: Request, res: Response) => {
    const { associationId, memberId } = req.query;

    if (!associationId && !memberId) {
        return res.status(400).json({ error: 'Au moins un des paramètres associationId ou memberId est requis' });
    }

    try {
        const cotisations = await prisma.cotisation.findMany({
            where: {
                ...(associationId ? { associationId: associationId as string } : {}),
                ...(memberId ? { memberId: memberId as string } : {}),
            },
            include: { member: true, association: true },
        });
        res.json(cotisations);

    } catch (error) {
        console.error('Erreur lors de la récupération des cotisations:', error);
        res.status(500).json({ error: 'Échec de la récupération des cotisations' });
    }
}