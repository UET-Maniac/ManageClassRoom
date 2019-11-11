import Sequelize from 'sequelize'

const db = new Sequelize('class_room_manager', 'postgres', '0000', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: false
})

export default db