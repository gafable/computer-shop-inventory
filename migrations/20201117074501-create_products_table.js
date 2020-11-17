'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('products', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            price: {
                allowNull: false,
                type: Sequelize.DOUBLE
            },
            brand: {
                allowNull: true,
                type: Sequelize.STRING
            },
            stocks: {
                allowNull: false,
                type: Sequelize.INTEGER,
                defaultValue: 1
            },
            description: {
                allowNull: true,
                type: Sequelize.TEXT
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            deletedAt: {
                allowNull: true,
                type: Sequelize.DATE
            }

        })
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('products')
    }
};