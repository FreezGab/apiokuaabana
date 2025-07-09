import { Request, Response } from 'express';
import prisma from '../prisma/client';


// Créer une nouvelle association
export const createAssociation = async (req: Request, res: Response) => {
    const { name, email, sector, description, location } = req.body;

    if (!name || !email || !sector || !description || !location) {
        return res.status(400).json({ error: 'Tous les champs sont requis' });
    }

    try {
        const newAssociation = await prisma.association.create({
            data: {
                name,
                email,
                sector,
                description,
                location,
            },
        });
        res.status(201).json(newAssociation);
        
    } catch (error) {
        console.error('Erreur lors de la création de l’association:', error);
        res.status(500).json({ error: 'Échec de la création de l’association' });
    }
}

// Obtenir une association par ID
export const getAssociationById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const association = await prisma.association.findUnique({
            where: { id },
            include: {
                members: true, // Inclure les membres associés si nécessaire
                cotisations: true, // Inclure les cotisations associées si nécessaire
                activities: {
                    include: {
                        presences: true, // Inclure les présences associées si nécessaire
                    },
                },
                documents: true, // Inclure les documents associés si nécessaire
            },
        });
        if (!association) {
            return res.status(404).json({ error: 'Association introuvable' });
        }
        res.json(association);
        
    } catch (error) {
        console.error('Erreur lors de la récupération de l’association:', error);
        res.status(500).json({ error: 'Échec de la récupération de l’association' });
    }
}
