import { Request, Response } from 'express';
import prisma from '../prisma/client';

export const getMembers = async (req: Request, res: Response) => {
  const { associationId } = req.params;
  const members = await prisma.member.findMany({ where: { associationId } });
  res.json(members);
};

export const getMemberById = async (req: Request, res: Response) => {
  const member = await prisma.member.findUnique({ where: { id: req.params.id } });
  if (!member) return res.status(404).json({ error: 'Not found' });
  res.json(member);
};

export const createMember = async (req: Request, res: Response) => {
  const { fullName, email, associationId } = req.body;
  const newMember = await prisma.member.create({
    data: { fullName, email, associationId },
  });
  res.status(201).json(newMember);
};

export const updateMember = async (req: Request, res: Response) => {
  const { fullName, email } = req.body;
  const updated = await prisma.member.update({
    where: { id: req.params.id },
    data: { fullName, email },
  });
  res.json(updated);
};

export const deleteMember = async (req: Request, res: Response) => {
  await prisma.member.delete({ where: { id: req.params.id } });
  res.json({ message: 'Deleted' });
};
