import express from 'express';
const router = express.Router();
import knowledge from '../controllers/knowledge';

router.post('/register', knowledge.register);
router.put('/update-by-id', knowledge.update);

export default router;