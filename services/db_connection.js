const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('computer_inventory', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

try {
    sequelize.authenticate()
    console.log("Succcessfully connected to database.");
} catch (error) {
    console.log(error);
}

exports.sequelize = sequelize;