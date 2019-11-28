/**
 * Table Schema: Sesmester
 * ID       auto
 * Name     string
 */

 import Sequelize from 'sequelize'
 import db from '../config/database.mjs'

 const Semester = db.define('semester', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
        }
    }
 })

 export default Semester