import express from './express.config.js'
import environment from './env/env.config.env.js'
import database from './database.config.js'

const framework = express;

export { framework, environment, database}