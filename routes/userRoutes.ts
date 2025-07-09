import express from 'express';
import { getUsers, createUser } from '../controllers/userController';

export const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.post('/', createUser);
