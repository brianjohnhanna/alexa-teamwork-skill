const config = require('./config');

const fetch = require('node-fetch');
const base64 = require('base-64');

const headers = {
    method: 'GET',
    headers: {
        'Authorization': `Basic ${base64.encode(config.apiKey + ':XXXXXXXX')}`,
    }
};

module.exports = {
    getActiveProjects: function() {
        return fetch(`${config.baseUri}/projects.json?orderby=companyName`, headers);
    }
}