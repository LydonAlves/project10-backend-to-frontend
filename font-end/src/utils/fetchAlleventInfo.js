import { url } from "./url"

export const fetchAllEventInfo = async (userId) => {
  let eventsAttending

  try {
    const response = await fetch(`${url}attendees/${userId}`)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()
    eventsAttending = data.eventsAttending
  } catch (error) {
    console.error('Error fetching event info:', error)
    return
  }

  try {
    const eventsUserIsAttending = await fetch(
      `${url}events/eventsUsersIsAttending`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: eventsAttending })
      }
    )

    const eventList = await eventsUserIsAttending.json()

    return eventList
  } catch (error) {
    console.error('Error fetching event info:', error)
    throw error
  }
}
