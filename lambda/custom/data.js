const _ = require('lodash');
const Api = require('./api/projects');

const getProjectCompanyNames = () => {
    return Api.getActiveProjects()
        .then((response) => response.json())
        .then((responseJson) => {
            const projects = responseJson.projects;
            const companies = projects.map(project => {
                return project.company.name;
            })
            return _.uniq(companies)
    })
}

module.exports = {
    getProjectCompanyNames: getProjectCompanyNames
}