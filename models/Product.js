const { DataTypes } = require('sequelize')
const database = require('./../services/db_connection')

const product = database.sequelize.define('product', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    price: {
        allowNull: false,
        type: DataTypes.DOUBLE
    },
    brand: {
        allowNull: true,
        type: DataTypes.STRING
    },
    description: {
        allowNull: true,
        type: DataTypes.TEXT
    },
    stocks: {
        allowNull: false,
        defaultValue: 0,
        type: DataTypes.INTEGER
    }
})

exports.product = product