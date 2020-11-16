const { response } = require('express')
const account = require('../models/Account')

exports.createAccount = async(request, response) => {
    const data = await account.account.create({
        username: request.query.username,
        password: request.query.password
    })

    response.send('account created.')
}