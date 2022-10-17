import express from 'express';
const router = express.Router();
import subject from '../controllers/subjects';
import auth from '../middlewares/auth';

router.post('/register',auth, subject.register);
router.put('/update-by-id', subject.update);
router.post('/list-all',auth, subject.listAll);


export default router;