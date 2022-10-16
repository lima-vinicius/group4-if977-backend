import express from 'express';
const router = express.Router();
import auth from '../middlewares/auth';
import university from '../controllers/university';

router.post('/register', university.register);
router.post('/login-university', university.login);
router.get('/list-all', auth, university.listAll);
router.post('/list-by-id', auth, university.list);

export default router;
