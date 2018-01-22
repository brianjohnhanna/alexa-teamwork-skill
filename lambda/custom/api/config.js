const base64 = require('base-64')

module.exports = {
    apiKey: process.env.TEAMWORK_API_KEY,
    baseUri: `https://${process.env.TEAMWORK_TEAM_ID}.teamwork.com`,
    ajax: {
        defaultOptions: {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${base64.encode(this.apiKey + ':XXXXXXXX')}`
            }
        }
    }
}