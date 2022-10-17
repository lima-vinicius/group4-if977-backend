import express from 'express';
const router = express.Router();
import knowledge from '../controllers/knowledge';
import auth from '../middlewares/auth';

router.post('/register', auth, knowledge.register);
router.delete('/delete-by-id', auth,  knowledge.delete);

export default router;