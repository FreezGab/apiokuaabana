import { Request, Response } from 'express';
import prisma from '../prisma/client';

export const getActivities = async (req: Request, res: Response) => {
  const activities = await prisma.activity.findMany({
    where: { associationId: req.params.associationId },
  });
  res.json(activities);
};

export const getActivityById = async (req: Request, res: Response) => {
  const activity = await prisma.activity.findUnique({ where: { id: req.params.id } });
  if (!activity) return res.status(404).json({ error: 'Not found' });
  res.json(activity);
};

export const createActivity = async (req: Request, res: Response) => {
  const { title, description, date, associationId } = req.body;
  const activity = await prisma.activity.create({
    data: { title, description, date: new Date(date), associationId },
  });
  res.status(201).json(activity);
};

export const updateActivity = async (req: Request, res: Response) => {
  const { title, description, date } = req.body;
  const activity = await prisma.activity.update({
    where: { id: req.params.id },
    data: { title, description, date: new Date(date) },
  });
  res.json(activity);
};

export const deleteActivity = async (req: Request, res: Response) => {
  await prisma.activity.delete({ where: { id: req.params.id } });
  res.json({ message: 'Deleted' });
};
