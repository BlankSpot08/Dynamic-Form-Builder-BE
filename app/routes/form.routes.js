import express from 'express'
const router = express.Router()

import { getAll, get, update } from '../controllers/form.controller'

router.get('/get-all', getAll);
router.get('/get', get);
router.post('/update', update);

export default router