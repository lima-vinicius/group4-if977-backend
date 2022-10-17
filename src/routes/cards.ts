import express from 'express';
const router = express.Router();
import card from '../controllers/cards';
import auth from '../middlewares/auth';

router.post('/register', auth, card.register);
router.delete('/delete-by-id', auth, card.delete);
router.put('/update-by-id', card.update);
router.post('/list-all', auth, card.listAll);


export default router;