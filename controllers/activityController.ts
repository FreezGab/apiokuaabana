import { Request, Response } from 'express';
import prisma from '../prisma/client';

// Ajouter une activité
export const addActivity = async (req: Request, res: Response) => {
    const { title, date, description, associationId } = req.body;

    if (!title || !date || !associationId) {
        return res.status(400).json({ error: 'Tous les champs sont requis' });
    }

    try {
        const newActivity = await prisma.activity.create({
            data: {
                title,
                date: new Date(date),
                description,
                associationId,
            },
        });
        res.status(201).json(newActivity);

    } catch (error) {
        console.error('Erreur lors de l’ajout de l’activité:', error);
        res.status(500).json({ error: 'Échec de l’ajout de l’activité' });
    }
};

// Récupérer les activités d’une association
export const getActivities = async (req: Request, res: Response) => {
    const { associationId } = req.query;

    if (!associationId || typeof associationId !== 'string') {
        return res.status(400).json({ error: 'L’ID de l’association est requis' });
    }

    try {
        const activities = await prisma.activity.findMany({
            where: { associationId },
            orderBy: { date: 'desc' }, // Tri par date décroissante
        });

        if (activities.length === 0) {
            return res.status(404).json({ error: 'Aucune activité trouvée pour cette association' });
        }

        res.json(activities);

    } catch (error) {
        console.error('Erreur lors de la récupération des activités:', error);
        res.status(500).json({ error: 'Échec de la récupération des activités' });
    }
};  
