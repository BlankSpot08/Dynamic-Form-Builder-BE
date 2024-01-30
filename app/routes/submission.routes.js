import { getAll, create } from '../controllers/submission.controller.js'

import express from 'express'
const router = express.Router()

router.get('/get-all', getAll);
router.post('/create', create);
    
export default router