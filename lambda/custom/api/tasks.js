const config = require('./config');
const fetch = require('node-fetch');

module.exports = {
    getAll: function() {
        return fetch(`${config.baseUri}/tasks.json`, headers);
    },
    getByProject: function(projectId) {
        return fetch(`${config.baseUri}/projects/${projectId}/tasks.json`, headers);
    }
}