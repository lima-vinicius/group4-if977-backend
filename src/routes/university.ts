import express from 'express';
const router = express.Router();
import university from '../controllers/university';

router.post('/register', university.register);
router.post('/login-university', university.login)

export default router;
