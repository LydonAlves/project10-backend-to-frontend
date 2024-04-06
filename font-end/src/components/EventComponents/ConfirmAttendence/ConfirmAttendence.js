import { userInfo } from '../../LogUser/Login/Login'
import { updateAttendenceButton } from './updateAttendenceButton'

export const ConfirmAttendence = async (eventId, attendButton) => {
  const user = userInfo.user
  try {
    const response = await fetch(
      `http://localhost:3000/api/v1/attendees/${eventId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`
        },
        body: JSON.stringify({ user })
      }
    )

    if (!response.ok) {
      throw new Error(`HTTp error! status: ${response.status}`)
    }

    updateAttendenceButton(attendButton, eventId)
  } catch (error) {
    console.error('Error:', error)
  }
}
