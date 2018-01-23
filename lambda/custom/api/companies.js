const config = require('./config')
const fetch = require('node-fetch')

module.exports = {
    all: function() {
        return fetch(`${config.baseUri}/companies.json`, config.ajax.defaultOptions)
    },
    projects: function(companyId) {
        return fetch(`${config.baseUri}/companies/${companyId}/projects.json`, config.ajax.defaultOptions)
    }
}