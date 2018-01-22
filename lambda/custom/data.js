const _ = require('lodash')
const didYouMean = require('didYouMean')
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
    return getCompanies()
        .then(companies => {
            return didYouMean(search, companies, 'name')
        })
}

module.exports = {
    getProjectCompanyNames: getProjectCompanyNames,
    searchCompanies: searchCompanies
}