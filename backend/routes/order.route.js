import { Router } from 'express';

// controller
import OrderController from '../controllers/order.controller';
import verifyToken from '../controllers/auth/middleware/VerifyToken';


const router = Router();

router.get('/', verifyToken.verify, OrderController.fetchAllOrders);
router.post('/', verifyToken.verify, OrderController.addAnOrder);
router.get('/:id', verifyToken.verify, OrderController.getSingleOrder);
router.put('/:id', verifyToken.verify, OrderController.updateAnOrder);

export default router;