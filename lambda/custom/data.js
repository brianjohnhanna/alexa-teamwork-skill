const _ = require('lodash')
const didYouMean = require('didyoumean')
const Api = require('./api')

const getProjectCompanyNames = () => {
    return Api.Projects.all()
        .then((response) => response.json())
        .then((responseJson) => {
            const projects = responseJson.projects
            const companies = projects.map(project => {
                return project.company.name
            })
            return _.uniq(companies)
    })
}

const getCompanies = () => {
    return Api.Companies.all()
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson.companies
    })
}

const searchCompanies = (search) => {
    didYouMean.returnWinningObject = true
    didYouMean.threshold = 0.7
    return getCompanies()
        .then(companies => {
            let match = _.filter(companies, company => {
                return _.includes(company.name.toLowerCase(), search.toLowerCase())
            })
            if (match.length) {
                return _.head(match)
            }
            return didYouMean(search, companies, 'name')
        })
}

const getCompanyTasks = (companyId) => {
    // return Api.Projects.tasks('203011')
    //     .then(res => res.json())
    //     .then(json => {
    //         return json.tasks
    //     })
    //     .catch(error => console.log(error))
    return Api.Companies.projects(companyId)
        .then(res => res.json())
        .then(json => {
            const projects = json.projects
            return projects
        }).catch(error => console.log(error))
}

module.exports = {
    getProjectCompanyNames: getProjectCompanyNames,
    searchCompanies: searchCompanies,
    getCompanyTasks: getCompanyTasks
}