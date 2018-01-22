const config = require('./config');
const fetch = require('node-fetch');

module.exports = {
    getActive: function() {
        return fetch(`${config.baseUri}/projects.json?orderby=companyName`, config.defaultAjaxOptions);
    },
    get: function(projectId) {
        return fetch(`${config.baseUri}/projects/${projectId}.json`, config.defaultAjaxOptions);
    },
    getStarred: function() {
        return fetch(`${config.baseUri}/projects/starred.json`, config.defaultAjaxOptions);
    }
}