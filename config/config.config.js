import express from './express.config.js'
import development from './env/development.configs.env.js'

const env = process.env.NODE_ENV || 'development';
const environments = { development };

const configurations = {
    framework: express, 
    environment: environments[env]
};

export default configurations;