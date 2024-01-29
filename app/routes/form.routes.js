import { getAll, getByTitle, create } from '../controllers/form.controller.js'

import express from 'express'
const router = express.Router()

router.get('/get-all', getAll);
router.get('/get/:title', getByTitle);
router.post('/create', create);
    
export default router