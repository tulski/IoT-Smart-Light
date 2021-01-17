import {Router} from 'express'
import controllers from './led.controllers'

const router = Router()

router.get('/:pin/on', controllers.turnOn);
router.get('/:pin/off', controllers.turnOff);
router.get('/:pin/strobe/:frequency', controllers.strobe);
router.get('/:pin/state', controllers.state);

export default router
