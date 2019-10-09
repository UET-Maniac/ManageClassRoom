/**
 * Table Schema: Room
 * ID       auto
 * Name     string
 * Type     string(enum)
 * Position string
 * Capacity number
 */

import Sequelize from 'sequelize'
import db from '../config/database.mjs'

const Room = db.define('rooms', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
        }
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
        validate: {
            notEmpty: true,
            isIn: [['theory', 'practise']]
        }
    },
    position: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
    },
    capacity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
    }
})

export default Room