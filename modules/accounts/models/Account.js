const { DataTypes, DATE } = require('sequelize')
const db = require('../../../services/db_connection')

const account = db.sequelize.define("account", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    username: {
        allowNull: false,
        type: DataTypes.STRING
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    },
}, {
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: "accounts"
})

exports.account = account