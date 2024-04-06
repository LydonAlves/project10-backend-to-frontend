import { userLoggedId } from '../../LogUser/Login/Login'

export const attendenceButtonsSettings = (eventsImAttending) => {
  const attendButtons = document.querySelectorAll('.attendButtonEventsP')

  attendButtons.forEach((button) => {
    const eventId = button.getAttribute('data-event-id')

    if (eventsImAttending) {
      attendButtons.forEach((button) => {
        button.style.display = 'none'
      })
    }

    if (
      localStorage.getItem(`attendanceConfirmed_${userLoggedId}_${eventId}`) ===
      'true'
    ) {
      button.innerText = 'Attendance Confirmed'
      button.className = 'attending'
    }
  })
}
