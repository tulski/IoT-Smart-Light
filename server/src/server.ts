import {Board} from 'johnny-five'
import * as express from 'express'
import * as morgan from 'morgan'
import config from "./config";

import ledRouter from './resources/led.router'

export const board = new Board();
export const app = express()

app.disable('x-powered-by')
app.use(morgan('tiny'))

app.use('/led', ledRouter)

export const start = async () => {
    try {
        board.on("ready", () => {
            app.listen(config.port, () => {
                console.log(`app listening at http://localhost:${config.port}`)
            })
        })
    } catch (e) {
        console.error(e)
    }
}
