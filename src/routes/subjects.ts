import express from 'express';
const router = express.Router();
import subject from '../controllers/subjects';
import auth from '../middlewares/auth';

router.post('/register',auth, subject.register);

export default router;