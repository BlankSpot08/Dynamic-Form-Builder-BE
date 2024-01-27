import express from './express.config.js'
import env from './env/env.config.env.js'
import database from './database.config.js'

const configurations = {
    framework: express, 
    environment: env,
    database: database
};

export default configurations;