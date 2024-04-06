const {
  getAttendeeByID,
  addAttendeeToEvent,
  getAllAttendees
} = require('../controllers/Attendee')

const attendeeRouter = require('express').Router()

attendeeRouter.get('/:userId', getAttendeeByID)
attendeeRouter.post('/getAll/:eventID', getAllAttendees)
attendeeRouter.post('/:eventID', addAttendeeToEvent)

module.exports = attendeeRouter
