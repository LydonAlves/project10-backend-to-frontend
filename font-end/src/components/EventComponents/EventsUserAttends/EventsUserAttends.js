import { printEvents } from '../../../pages/Event/SeeEventsPage/SeeEventsPage'
import { notAttendingEvents } from '../NotAttendingPopUp/NotAttendingPopUp'

export const eventsUserAttends = async (userId) => {
  let eventsId = []
  let events = []
  let eventsImAttending = true

  try {
    const response = await fetch(
      `http://localhost:3000/api/v1/attendees/${userId}`
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const user = await response.json()
    console.log(user)
    if (user === null) {
      notAttendingEvents()
    }

    eventsId = user.eventsAttending
  } catch (error) {
    console.error('Could not fetch users:', error)
    return
  }

  if (!eventsId.length) {
    console.log('error fetching user events')
    return
  }

  for (const eventId of eventsId) {
    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/events/${eventId}`
      )

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const eventList = await response.json()
      events.push(eventList)
    } catch (error) {
      console.error('Could not fetch events:', error)
    }
  }
  printEvents(events, eventsImAttending)
}
