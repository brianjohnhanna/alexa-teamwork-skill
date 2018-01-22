const config = require('./config')
const fetch = require('node-fetch')

module.exports = {
    all: function() {
        return fetch(`${config.baseUri}/projects.json?orderby=companyName`, config.ajax.defaultOptions)
    },
    get: function(projectId) {
        return fetch(`${config.baseUri}/projects/${projectId}.json`, config.ajax.defaultOptions)
    },
    tasks: function(projectId) {
        return fetch(`${config.baseUri}/projects/${projectId}/tasks.json`, config.ajax.defaultOptions)
    }
}