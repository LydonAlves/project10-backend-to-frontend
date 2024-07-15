import { PrintAttendeeList } from './../pages/Attendee/SeeAttendeeList/SeeAttendeeList';
import { url } from './url';

export const fetchAttendeeList = async (event, eventDetails) => {
  const attendeesIds = event.usersAttending
  try {
    const response = await fetch(
      `${url}users/usersAttending`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: attendeesIds })
      }
    )
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const attendeeDetails = await response.json()

    PrintAttendeeList(attendeeDetails, event, eventDetails)
  } catch (error) {
    console.error('Error fetching attendee details:', error)
  }
} 