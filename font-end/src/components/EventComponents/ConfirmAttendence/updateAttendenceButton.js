import { getUser } from "../../../utils/getUser"
import { ConfirmAttendence } from "./ConfirmAttendence"

export const updateAttendenceButton = (attendButton, eventId) => {
  const user = getUser()

  attendButton.innerText = 'Attendence confirmed'
  attendButton.className = 'attending'
  attendButton.removeEventListener('click', ConfirmAttendence)
  localStorage.setItem(`attendanceConfirmed_${user}_${eventId}`, 'true')
}
