import express from 'express';
const router = express.Router();
import student from '../controllers/user';

router.post('/register', student.register);
router.post('/login', student.login)

export default router;