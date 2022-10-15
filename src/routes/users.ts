import express from 'express';
const router = express.Router();
import student from '../controllers/user';

router.post('/register', student.register);
router.post('/login', student.login)
router.get('/list-all', student.listAll)
router.post('/list-student-by-id', student.list)

export default router;