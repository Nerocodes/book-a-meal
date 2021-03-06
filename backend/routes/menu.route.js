import { Router } from 'express';

// controller
import MenuController from '../controllers/menu.controller';


const router = Router();

router.get('/', MenuController.fetchAllMenus);
router.post('/', MenuController.addAMenu);

export default router;