import { Request, Response } from 'express';
import prisma from '../prisma/client';

export const getFeesByAssociation = async (req: Request, res: Response) => {
  const fees = await prisma.fee.findMany({ where: { associationId: req.params.associationId } });
  res.json(fees);
};

export const getFeesByMember = async (req: Request, res: Response) => {
  const fees = await prisma.fee.findMany({ where: { memberId: req.params.memberId } });
  res.json(fees);
};

export const createFee = async (req: Request, res: Response) => {
  const { amount, dueDate, memberId, associationId } = req.body;
  const fee = await prisma.fee.create({
    data: { amount, dueDate: new Date(dueDate), memberId, associationId },
  });
  res.status(201).json(fee);
};

export const updateFee = async (req: Request, res: Response) => {
  const { amount, paid } = req.body;
  const fee = await prisma.fee.update({
    where: { id: req.params.id },
    data: { amount, paid },
  });
  res.json(fee);
};

export const deleteFee = async (req: Request, res: Response) => {
  await prisma.fee.delete({ where: { id: req.params.id } });
  res.json({ message: 'Deleted' });
};
