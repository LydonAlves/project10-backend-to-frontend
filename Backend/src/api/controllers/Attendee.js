const Attendee = require('../models/Attendee')
const Event = require('../models/Event')

const getAllAttendees = async (req, res, next) => {
  try {
    const attendees = await Attendee.find({ _id: { $in: ids } })
    return res.status(200).json(attendees)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const getAttendeeByID = async (req, res, next) => {
  try {
    const { userId } = req.params
    const attendee = await Attendee.findOne({ userId: userId })

    return res.status(200).json(attendee)
  } catch (error) {
    console.error('Error fetching attendee:', error)
    return res.status(400).json(error)
  }
}

const addAttendeeToEvent = async (req, res, next) => {
  try {
    const { eventID } = req.params
    const { user } = req.body
    const userId = user._id

    const updatedEvent = await Event.findByIdAndUpdate(
      eventID,
      { $addToSet: { usersAttending: userId } },
      {
        new: true
      }
    )

    if (updatedEvent) {
      console.log('Updated Event:', updatedEvent)
    } else {
      console.log('No event was updated')
    }

    const attendeeDuplicated = await Attendee.findOne({
      userId: userId
    })

    if (!attendeeDuplicated) {
      const newAttendee = new Attendee({
        userName: user.userName,
        email: user.email,
        userId: user._id,
        eventsAttending: eventID
      })
      const attendee = await newAttendee.save()
    } else {
      const updateAttendee = await Attendee.findByIdAndUpdate(
        attendeeDuplicated._id,
        {
          $addToSet: { eventsAttending: eventID }
        },
        {
          new: true
        }
      )
    }
    return res.status(200).json(updatedEvent)
  } catch (error) {
    return res.status(400).json(error)
  }
}

module.exports = {
  getAllAttendees,
  getAttendeeByID,
  addAttendeeToEvent
}
