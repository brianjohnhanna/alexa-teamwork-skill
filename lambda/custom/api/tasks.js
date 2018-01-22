const config = require('./config')
const fetch = require('node-fetch')

module.exports = {
    all: function() {
        return fetch(`${config.baseUri}/tasks.json`, config.ajax.defaultOptions)
    }
}