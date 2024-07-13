import { seeEventsPage } from "../pages/Event/SeeEventsPage"

export const fetchEvents = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/v1/events')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const events = await response.json()
    seeEventsPage(events)
  } catch (error) {
    console.error('Could not fetch users:', error)
  }
}
