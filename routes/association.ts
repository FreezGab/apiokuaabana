import express from 'express';
import { createAssociation, getAssociationById, } from '../controllers/associationController';

export const associationRouter = express.Router();

associationRouter.post('/', createAssociation);
associationRouter.get('/:id', getAssociationById);
