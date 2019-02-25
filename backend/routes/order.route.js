import { Router } from 'express';

// controller
import OrderController from '../controllers/order.controller';


const router = Router();

router.get('/', OrderController.fetchAllOrders);
router.post('/', OrderController.addAnOrder);
router.get('/:id', OrderController.getSingleOrder);
router.put('/:id', OrderController.updateAnOrder);

export default router;