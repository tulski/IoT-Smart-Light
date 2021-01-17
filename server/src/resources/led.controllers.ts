import {Led, Pin} from "johnny-five"
import {Request, Response} from "express"

const leds: { [pin: number]: Led } = {}

const turnOn = (req: Request, res: Response) => {
    try {
        const pin = Number(req.params.pin)
        if (!leds[pin]) leds[pin] = new Led(pin)
        leds[pin].fadeIn(500)
        return res.status(200).end()
    } catch (e) {
        console.error(e)
        return res.status(400).end()
    }
}

const turnOff = (req: Request, res: Response) => {
    try {
        const pin = Number(req.params.pin)
        if (!leds[pin]) leds[pin] = new Led(pin)
        leds[pin].stop(0);
        leds[pin].fadeOut(500)
        leds[pin].off()
        return res.status(200).end();
    } catch (e) {
        console.error(e)
        return res.status(400).end()
    }
}

const strobe = (req: Request, res: Response) => {
    try {
        const pin = Number(req.params.pin)
        if (!leds[pin]) leds[pin] = new Led(pin)
        const frequency = Number(req.params.frequency)
        leds[pin].strobe(frequency)
        return res.status(200).end()
    } catch (e) {
        console.error(e)
        return res.status(400).end()
    }
}

const state = (req: Request, res: Response) => {
    try {
        const pin = Number(req.params.pin)
        if (!leds[pin]) res.send(false);
        new Pin(pin).query((state) => res.send(state))
    } catch (e) {
        console.error(e)
        return res.status(400).end()
    }
}


export default {
    turnOn,
    turnOff,
    strobe,
    state
}
