module.exports = {
    login: (request, response) => {
        response.render('auth/login')
    },
    register: (request, response) => {
        response.render('auth/register')
    }
}