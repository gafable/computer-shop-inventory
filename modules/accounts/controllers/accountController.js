const model = require('../models/Account')
const { Op } = require('sequelize')

module.exports = {
    async findAccount(request, response) {
        try {
            const account = await model.account.findOne({
                where: {
                    [Op.and]: [
                        { username: request.body.username },
                        { password: request.body.password }
                    ]
                }
            })
            if (!account) return response.send('Account nor found')

            response.redirect('/pages/dashboard')
        } catch (error) {

        }
    },
    async createAccount(request, response) {
        try {
            console.log(request.body)
            const data = await model.account.create({
                username: request.body.username,
                password: request.body.password
            })
            response.send('account created.')
        } catch (error) {
            response.send(error)
        }
    }

}