import { Router } from 'express';

// controller
import AuthController from '../controllers/auth/auth.controller';
import verifyToken from '../controllers/auth/middleware/VerifyToken';


const router = Router();

// router.get('/', AuthController.fetchAllUsers);
router.get('/me', verifyToken.verify, AuthController.getSingleUser);
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.post('/logout', AuthController.logout);
// router.put('/:id', AuthController.updateAUser);
// router.delete('/:id', AuthController.deleteAUser);

export default router;