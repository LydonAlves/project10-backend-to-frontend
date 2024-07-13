import { getUser } from '../../../utils/getUser'

export const attendenceButtonsSettings = (eventsImAttending) => {
  const attendButtons = document.querySelectorAll('.attendButtonEventsP')
  const user = getUser()

  attendButtons.forEach((button) => {
    const eventId = button.getAttribute('data-event-id')

    if (eventsImAttending) {
      attendButtons.forEach((button) => {
        button.style.display = 'none'
      })
    }

    if (
      localStorage.getItem(`attendanceConfirmed_${user}_${eventId}`) ===
      'true'
    ) {
      button.innerText = 'Attendance Confirmed'
      button.className = 'attending'
    }
  })
}
