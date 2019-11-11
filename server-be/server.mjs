import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import path from 'path'
import config from "./config/config.mjs"
import connect from './config/connect_database.mjs'
import Router from './router/index.mjs'
import fileUpload from 'express-fileupload'

const app = express()
const __dirname = path.resolve(path.dirname(''))

/**
 * Use middleware
 */
app.use(bodyParser.urlencoded({extended: false}))
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
app.use('/api/v1/hello', (req, res) => res.send("Hello world"))



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