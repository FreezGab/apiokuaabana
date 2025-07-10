import { Router } from 'express';
import {
  getFeesByAssociation,
  getFeesByMember,
  createFee,
  updateFee,
  deleteFee,
} from '../controllers/feeController';

const router = Router();

router.get('/association/:associationId', getFeesByAssociation);
router.get('/member/:memberId', getFeesByMember);
router.post('/', createFee);
router.put('/:id', updateFee);
router.delete('/:id', deleteFee);

export default router;
