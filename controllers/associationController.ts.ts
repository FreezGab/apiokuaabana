import { Request, Response } from 'express';
import prisma from '../prisma/client';

export const getAssociations = async (req: Request, res: Response) => {
  try {
    const associations = await prisma.association.findMany();
    res.json(associations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

export const createAssociation = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const newAssociation = await prisma.association.create({
      data: { name, description },
    });
    res.status(201).json(newAssociation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la création' });
  }
};
export const getAssociationById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const association = await prisma.association.findUnique({
      where: { id },
    });
    if (!association) {
      return res.status(404).json({ error: 'Association non trouvée' });
    }
    res.json(association);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};