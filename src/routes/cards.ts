import express from 'express';
const router = express.Router();
import card from '../controllers/cards';
import auth from '../middlewares/auth';

router.post('/register', auth, card.register);
router.post('/list-all', auth, card.listAll);

export default router;