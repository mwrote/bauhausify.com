const defaultConfig = require('./defaultConfig')
const override = require('./override')

const merged = Object.assign(defaultConfig, override)

module.exports = merged
