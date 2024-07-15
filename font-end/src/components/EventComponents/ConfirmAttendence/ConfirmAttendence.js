import { getUser } from '../../../utils/getUser';
import { getUserToken } from '../../../utils/getUserToken';
import { url } from '../../../utils/url';
import { updateAttendenceButton } from './updateAttendenceButton';

export const ConfirmAttendence = async (eventId, attendButton) => {
  const userToken = getUserToken();
  const user = getUser()

  try {
    const response = await fetch(
      `${url}attendees/${eventId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`
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
