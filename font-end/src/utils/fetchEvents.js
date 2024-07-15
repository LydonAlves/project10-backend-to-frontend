import { seeEventsPage } from "../pages/Event/SeeEventsPage"
import { url } from "./url"

export const fetchEvents = async () => {
  try {
    const response = await fetch(`${url}events`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const events = await response.json()
    seeEventsPage(events)
  } catch (error) {
    console.error('Could not fetch users:', error)
  }
}
