export const fetchAllEventInfo = async (userId) => {
  let eventsAttending

  try {
    const url = `http://localhost:3000/api/v1/attendees/${userId}`
    const response = await fetch(url)
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
      `http://localhost:3000/api/v1/events/eventsUsersIsAttending`,
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
