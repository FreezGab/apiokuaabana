import { Router } from 'express';
import {
  getMembers,
  createMember,
  updateMember,
  deleteMember,
} from '../controllers/memberController';

const router = Router();

router.get('/association/:associationId', getMembers);
router.post('/', createMember);
router.put('/:id', updateMember);
router.delete('/:id', deleteMember);

export default router;
