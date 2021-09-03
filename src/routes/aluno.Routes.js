import { Router } from 'express';
import alunosController from '../controllers/AlunosController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', alunosController.index);
router.get('/:id', alunosController.show);
router.post('/', loginRequired, alunosController.store);
router.put('/:id', loginRequired, alunosController.update);
router.delete('/:id', loginRequired, alunosController.delete);

export default router;
