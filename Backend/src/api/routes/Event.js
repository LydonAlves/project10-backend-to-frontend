const upload = require('../../middleware/file')
const {
  getEventByID,
  getAllEvents,
  postEvent,
  updateEvent,
  getAllEventsForUser
} = require('../controllers/Event')

const eventsRouter = require('express').Router()

eventsRouter.get('/:id', getEventByID)
eventsRouter.get('/', getAllEvents)
eventsRouter.post('/eventsUsersIsAttending', getAllEventsForUser)
eventsRouter.post('/', upload.single('img'), postEvent)
eventsRouter.put('/:id', upload.single('img'), updateEvent)

module.exports = eventsRouter
