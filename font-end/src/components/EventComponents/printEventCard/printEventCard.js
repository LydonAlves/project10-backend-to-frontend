import './printEventCard.css'
import { SeeIndividualEvent } from "../SeeIndividualEvent/SeeIndividualEvent"
import { AttendButton } from "../../Buttons/AttendButton/AttendButton"
import { SeeMoreButton } from "../../Buttons/SeeMoreButton/SeeMoreButton"
import { formatDate } from "../../date/formatDate"
import { getUserToken } from "../../../utils/getUserToken"
import { ConfirmAttendence } from './../ConfirmAttendence/ConfirmAttendence';

export const printEventCard = (events, eventsDivContainer, eventsImAttending) => {
  const loggedInUser = getUserToken()

  events.forEach((event) => {
    const eventDivShow = document.createElement('div')
    const showEventImg = document.createElement('img')
    const showEventTitle = document.createElement('p')
    const showEventDate = document.createElement('p')
    const buttonDiv = document.createElement('div')

    const attendButton = AttendButton()
    const seeMore = SeeMoreButton()

    let eventDateMongoDb = event.date
    let eventDate = formatDate(eventDateMongoDb)

    eventDivShow.className = 'eventDivShow'
    showEventImg.className = 'showEventImg'
    showEventTitle.className = 'showEventTitle'
    showEventDate.className = 'showEventDate'
    buttonDiv.className = 'buttonDiv'
    seeMore.className = 'seeMoreButtonEventsP'
    attendButton.className = 'attendButtonEventsP'
    attendButton.setAttribute('data-event-id', event._id)

    showEventImg.src = event.img
    showEventTitle.innerText = `${event.title}`
    showEventDate.innerText = `${eventDate}`

    attendButton.addEventListener('click', () => {
      ConfirmAttendence(event._id, attendButton)
    })

    const eventDetails = {
      event,
      showEventImg,
      showEventTitle,
      showEventDate,
      events,
      eventsImAttending
    }

    seeMore.addEventListener('click', () => {
      SeeIndividualEvent(eventDetails)
    })

    // if (eventsImAttending) {
    //   buttonDiv.append(seeMore)
    // } else 
    if (loggedInUser) {
      buttonDiv.append(seeMore, attendButton)
    } else {
      buttonDiv.append(seeMore)
    }

    eventDivShow.append(showEventTitle, showEventImg, buttonDiv)
    eventsDivContainer.append(eventDivShow)
  })
}