export const updateAttendenceButton = (attendButton, eventId) => {
  attendButton.innerText = 'Attendence confirmed'
  attendButton.className = 'attending'
  attendButton.removeEventListener('click', ConfirmAttendence)
  localStorage.setItem(`attendanceConfirmed_${userLoggedId}_${eventId}`, 'true')
}
