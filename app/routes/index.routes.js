import express from 'express'
const router = express.Router()

import formRoutes from './form.routes.js'

router.use('/form', formRoutes)

export default router