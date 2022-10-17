import express from 'express';
const router = express.Router();
import knowledge from '../controllers/knowledge';
import auth from '../middlewares/auth';

router.post('/register', auth, knowledge.register);
router.put('/update-by-id', knowledge.update);
router.get('/list-all', auth, knowledge.listAll);
router.post('/list-by-id', auth, knowledge.list);
router.delete('/delete-by-id', auth,  knowledge.delete);


export default router;