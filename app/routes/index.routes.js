import express from 'express'
const router = express.Router()

import formRoutes from './form.routes.js'
import submissionRoutes from './submission.routes.js'

router.use('/form', formRoutes)
router.use('/submission', submissionRoutes)

export default router