import development from './development.config.env.js'

const env = process.env.NODE_ENV || 'development';
const environments = { development };
const currentEnv = environments[env]

export default currentEnv;