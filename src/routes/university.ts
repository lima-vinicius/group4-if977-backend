import express from 'express';
const router = express.Router();
import auth from '../middlewares/auth';
import university from '../controllers/university';

router.post('university/register', university.register);
router.post('university/login-university', university.login);
router.get('university/list-all', auth, university.listAll);
router.post('university/list-by-id', university.list);

export default router;
