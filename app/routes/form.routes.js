import { getAll, getByTitle, create, update } from '../controllers/form.controller.js'

import express from 'express'
const router = express.Router()

router.get('/get-all', getAll);
router.get('/get', getByTitle);
router.post('/create', create);
router.put('/update', update);
    
export default router