/**
 * Table Schema: Account
 * ID           auto
 * Username     string
 * Password     string(hash string)
 * Role         string(enum)
 */

import Sequelize from "sequelize"
import db from '../config/database.mjs'
import bcrypt from 'bcrypt'

const Account = db.define('accounts', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
            min: 6
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
        validate: {
            notEmpty: true,
        }
    },
    role: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
        validate: {
            notEmpty: true,
            isIn: [['student', 'lecturer', 'admin']]
        }
    }
}, {
    hooks: {
        beforeCreate: (account, options) => {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(account.password, salt);
            account.password = hash
            return account
        }
    },
    classMethods: {},
    instanceMethods: {
        validPassword: (password) => {
            return bcrypt.compare(password, this.password)
        }
    }
})

// User.prototype.comparePassword = function (password) { // eslint-disable-line func-names
//     return Bluebird.resolve()
//       .then(() => bcrypt.compareSync(password, this.password))
//       .catch((err) => {
//         console.log(err);
  
//         return false;
//       });
//   };

export default Account
