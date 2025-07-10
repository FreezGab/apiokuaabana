import { Router } from 'express';
import { getAssociations, createAssociation } from '../controllers/associationController.ts'

const router = Router();

router.get('/', getAssociations);
router.post('/', createAssociation);

export default router;
