import express from 'express';
import { addMember, getMembersByAssociation, } from '../controllers/memberController';

export const memberRouter = express.Router();

memberRouter.post('/', addMember);
memberRouter.get('/:associationId', getMembersByAssociation);
