import './notifyNoAttendee.css'

export const notifyNoAttendee = (main, attendeeListSection, back) => {
  const noAttendees = document.createElement('p')
  noAttendees.className = 'noAttendees'
  noAttendees.innerText = 'No one has signed up for this event yet!!'
  attendeeListSection.append(noAttendees)
  main.append(attendeeListSection, back)
  return
} 