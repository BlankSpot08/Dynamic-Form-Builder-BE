import express from './express.js'
import development from './env/development.js'

const env = process.env.NODE_ENV || 'development';
const environments = { development };

const configurations = {
    framework: express, 
    environment: environments[env]
};

export default configurations;