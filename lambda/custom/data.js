const _ = require('lodash');
const ProjectsApi = require('./api/projects');

const getProjectCompanyNames = () => {
    return ProjectsApi.getActive()
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