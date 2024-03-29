import express from 'express';
const router = express.Router();
import student from '../controllers/user';
import auth from '../middlewares/auth';

router.post('/register', student.register);
router.post('/login', student.login);
router.get('/list-all', auth, student.listAll);
router.post('/list-student-by-id', auth, student.list);
router.delete('/delete-by-id', auth, student.delete);
router.put('/update-by-id', student.update);


export default router;