import { Resquest, Response } from 'express';
import { prisma } from '../prisma/Client';

export const getUsers = async (req: Resquest, res: Response) => {
    const users = await prisma.user.findMany();
    res.json(users);
}

export const createUser = async (req: Request, res: Response) => {
    const { name, email, password, role } = req.body;
    const newUser = await prisma.user.create({
        data: {
            name,
            email,
            password,
            role
        }
    });
    res.status(201).json(newUser);
}