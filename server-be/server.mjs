import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import path from 'path'
import config from "./config/config.mjs";

const app = express()
const __dirname = path.resolve(path.dirname(''))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))
app.use('/static', express.static(path.join(__dirname, '/public')))


app.use('/api/v1/hello', (req, res) => res.send("Hello world"))

app.use((err, req, res) => {
    res.status(err.status || 500)
    res.json({'errors': {
        message: err.message,
        error: {}
    }})
})


const port = config.app.port
app.listen(port, () => console.log(`Server running at magic port ${port}`))