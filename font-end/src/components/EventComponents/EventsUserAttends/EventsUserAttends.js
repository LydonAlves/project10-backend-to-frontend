import { seeEventsPage } from '../../../pages/Event/SeeEventsPage'
import { getUser } from '../../../utils/getUser'
import { notAttendingEvents } from '../NotAttendingPopUp/NotAttendingPopUp'

export const eventsUserAttends = async (userId) => {
  const user = getUser()
  const userID = user._id

  let eventsId = []
  let events = []
  let eventsImAttending = true

  try {
    const response = await fetch(
      `http://localhost:3000/api/v1/attendees/${userID}`
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const user = await response.json()
    console.log(user);




    if (user === null) {
      console.log("user is not attending any events");
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
  seeEventsPage(events, eventsImAttending)
}
