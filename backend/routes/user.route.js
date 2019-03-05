import { Router } from 'express';

// controller
import UserController from '../controllers/user.controller';


const router = Router();

router.get('/', UserController.fetchAllUsers);
router.get('/:id', UserController.getSingleUser);
router.post('/', UserController.addAUser);
router.put('/:id', UserController.updateAUser);
router.delete('/:id', UserController.deleteAUser);

export default router;