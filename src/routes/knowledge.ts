import express from 'express';
const router = express.Router();
import knowledge from '../controllers/knowledge';

router.post('/register', knowledge.register);

export default router;