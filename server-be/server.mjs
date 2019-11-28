import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import path from 'path'
import config from "./config/config.mjs"
import connect from './config/connect_database.mjs'
import Router from './router/index.mjs'
import fileUpload from 'express-fileupload'

import jwt from 'jsonwebtoken'
import secret from './config/key.mjs'
import checkToken from './middleware/authentication.mjs'


const app = express()
const __dirname = path.resolve(path.dirname(''))

/**
 * Use middleware
 */
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))
app.use(fileUpload());
app.use('/static', express.static(path.join(__dirname, '/public')))
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/**
 * Declare using routers
 */
app.use('/api/v1', Router)

app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    // For the given username fetch user from DB
    let mockedUsername = 'admin';
    let mockedPassword = 'password';

    if (username && password) {
      if (username === mockedUsername && password === mockedPassword) {
        let token = jwt.sign({username: username},
          secret,
          { 
            expiresIn: '24h' // expires in 24 hours
          }
        );
        // return the JWT token for the future API calls
        res.json({
          success: true,
          message: 'Authentication successful!',
          token: token
        });
      } else {
        res.status(403).json({
          success: false,
          message: 'Incorrect username or password'
        });
      }
    } else {
      res.status(400).json({
        success: false,
        message: 'Authentication failed! Please check the request'
      });
    }
})

app.get('/api/v1/hello', checkToken, (req, res) => res.send("Hello world"))



/**
 * Catch any not expect route 
 */
app.use((err, req, res) => {
    res.status(err.status || 500)
    res.json({'errors': {
        message: err.message,
        error: {}
    }})
})

/**
 * Connect to database
 */
connect()


/**
 * Start server backend
 */
const port = config.app.port
app.listen(port, () => console.log(`Server running at magic port ${port}`))