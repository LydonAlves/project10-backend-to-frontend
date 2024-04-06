const deleteFile = require('../../utils/deleteFile')
const Event = require('../models/Event')

const getEventByID = async (req, res, next) => {
  try {
    const { id } = req.params
    const event = await Event.findById(id)
    return res.status(200).json(event)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const getAllEvents = async (req, res, next) => {
  try {
    const events = await Event.find()
    return res.status(200).json(events)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const getAllEventsForUser = async (req, res, next) => {
  try {
    const ids = req.body.ids
    const eventUserIsAttending = await Event.find({ _id: { $in: ids } })

    return res.status(200).json(eventUserIsAttending)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const postEvent = async (req, res, next) => {
  try {
    const newEvent = new Event(req.body)
    if (req.file) {
      newEvent.img = req.file.path
    }
    const event = await newEvent.save()

    return res.status(201).json(event)
  } catch (error) {
    console.error('Error in postEvent:', error)
    return res.status(400).json(error)
  }
}

const updateEvent = async (req, res, next) => {
  try {
    const { id } = req.params
    const newEvent = new Event(req.body)
    newEvent._id = id

    if (req.file) {
      newEvent.img = req.file.path
      const oldEvent = await Event.findById(id)
      deleteFile(oldEvent.img)
    }
    const eventUpdated = await Event.findByIdAndUpdate(id, newEvent, {
      new: true
    })
    return res.status(200).json(eventUpdated)
  } catch (error) {
    return res.status(400).json(error)
  }
}

module.exports = {
  getAllEvents,
  getEventByID,
  postEvent,
  updateEvent,
  getAllEventsForUser
}
