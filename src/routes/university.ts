import express from 'express';
const router = express.Router();
import university from '../controllers/university';

router.post('/register', university.register);

export default router;
