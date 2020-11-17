const model = require('./../../models/Product')


module.exports = {
    async dashboard(resquest, response) {
        try {
            await model.product.findAll()
                .then((products) => {
                    response.render('pages/dashboard', {
                        products: products
                    })
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
    async createProdut(request, response) {
        response.render('pages/createProduct')
    },
    async updateProduct(request, response) {
        await model.product.findOne({
                where: {
                    id: request.params.id
                }
            })
            .then((product) => {
                response.render('pages/updateProduct', {
                    product: product
                })
            }).catch((reason) => {
                response.send('error')
            })

    },
}