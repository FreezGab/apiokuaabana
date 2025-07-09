import { Request, Response } from 'express';
import prisma from '../prisma/client';

// Ajouter un membre à une association
export const addMemberToAssociation = async (req: Request, res: Response) => {
    const { name, email, role, associationId } = req.body;

    try {
        const newMember = await prisma.member.create({
            data: {
                name,
                email,
                role,
                associationId
            },
        });
        res.status(201).json(newMember);
    
    } catch (error) {
        console.error('Erreur lors de l’ajout du membre à l’association:', error);
        res.status(500).json({ error: 'Échec de l’ajout du membre à l’association' });
    }
};

// Obtenir tous les membres d’une association
export const getMembersByAssociationId = async (req: Request, res: Response) => {
    const { associationId } = req.query;

    if (!associationId || typeof associationId !== 'string') {
        return res.status(400).json({ error: 'ID de l’association requis' });
    }

    try {
        const members = await prisma.member.findMany({
            where: { associationId },
        });
        res.json(members);
    
    } catch (error) {
        console.error('Erreur lors de la récupération des membres de l’association:', error);
        res.status(500).json({ error: 'Échec de la récupération des membres de l’association' });
    }
};