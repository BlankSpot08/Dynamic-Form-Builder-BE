import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

// app.use('/api', routes)

module.exports = app;