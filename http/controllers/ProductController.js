const model = require('./../../models/Product')
const parseRequestBody = require('../../utils/parseRequestBody')
module.exports = {
    async store(request, response) {
        try {
            let product = {
                name: request.body.name,
                price: request.body.price,
                brand: request.body.brand,
                description: request.body.description,
                stocks: request.body.stocks
            }
            await model.product.create(product)
                .then(() => {
                    response.redirect('/pages/dashboard')
                }).catch((reason) => {
                    response.redirect('/pages/dashboard', {
                        error: reason
                    })
                })
        } catch (error) {
            console.log(error);
        }
    },
    async update(request, response) {
        try {
            let attributes = parseRequestBody(request.body)
            console.log(attributes);
            await model.product.update(attributes, {
                    where: {
                        id: request.params.id
                    }
                })
                .then(() => {
                    response.redirect('/pages/dashboard')
                })
                .catch((reason) => {
                    response.send('error')
                })
        } catch (error) {
            console.log(error);
        }

    },
    async destroy(request, response) {
        try {

            await model.product.destroy({ where: { id: request.params.id } })
                .then(() => {
                    response.redirect('/pages/dashboard')
                })
                .catch((reason) => {
                    response.redirect('back', {
                        error: reason
                    })
                })
        } catch (error) {
            console.log(error);
        }

    },
}