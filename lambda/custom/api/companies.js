const config = require('./config')
const fetch = require('node-fetch')

module.exports = {
    all: function() {
        return fetch(`${config.baseUri}/companies.json`, config.ajax.defaultOptions)
    }
}