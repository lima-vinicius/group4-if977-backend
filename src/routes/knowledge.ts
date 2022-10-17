import express from 'express';
const router = express.Router();
import knowledge from '../controllers/knowledge';
import auth from '../middlewares/auth';

router.post('/register', auth, knowledge.register);
router.get('/list-all', auth, knowledge.listAll);
router.post('/list-by-id', auth, knowledge.list);

export default router;