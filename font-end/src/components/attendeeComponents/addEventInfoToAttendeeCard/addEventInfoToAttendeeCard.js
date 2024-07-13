import { formatDate } from "../../date/formatDate"
import './addEventInfoToAttendeeCard.css'

export const addEventInfoToAttendeeCard = (seeEventsDiv, eventInfo) => {
  eventInfo.forEach((event) => {
    const eventInfoUserDiv = document.createElement('div')
    const eventName = document.createElement('p')
    const eventLocation = document.createElement('p')
    const eventDate = document.createElement('p')
    let eventDateInfo = formatDate(event.date)

    eventName.innerText = event.title
    eventLocation.innerText = event.location
    eventDate.innerText = eventDateInfo

    eventInfoUserDiv.className = 'eventInfoUserDiv'
    eventName.className = 'eventNameIndUser'
    eventLocation.className = 'eventLocationIndUser'
    eventDate.className = 'eventDateIndUser'

    eventInfoUserDiv.append(eventName, eventLocation, eventDate)
    seeEventsDiv.append(eventInfoUserDiv)
  })
} 