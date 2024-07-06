import { AttendButton } from '../../../components/Buttons/AttendButton/AttendButton'
import { BackButton } from '../../../components/Buttons/BackButton/BackButton'
import { SeeMoreButton } from '../../../components/Buttons/SeeMoreButton/SeeMoreButton'
import { SeeIndividualEvent } from '../SeeIndividualEvent/SeeIndividualEvent'
import './SeeEventsPage.css'
import { Home } from '../../Home/Home'
import { createHomeButton } from '../../../components/Buttons/HomeButton/HomeButton'
import { ConfirmAttendence } from '../../../components/EventComponents/ConfirmAttendence/ConfirmAttendence'
import { attendenceButtonsSettings } from '../../../components/EventComponents/ConfirmAttendence/attendenceButtonSettings'

export const printEvents = (events, eventsImAttending) => {
  const main = document.querySelector('main')
  main.innerHTML = ''
  const showEventsSection = document.createElement('section')
  const eventsDivContainer = document.createElement('div')
  const homeButton = createHomeButton()
  const back = BackButton()
  const loggedInUser = localStorage.getItem('token');


  showEventsSection.className = 'showEventsSection'
  eventsDivContainer.className = 'eventsDivContainer'
  back.classList.add('eventsIAttendBack')

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
      showEventImg,
      showEventTitle,
      showEventDate,
      events,
      eventsImAttending
    }

    seeMore.addEventListener('click', () => {
      SeeIndividualEvent(event, eventDetails)
    })

    if (eventsImAttending) {
      buttonDiv.append(seeMore)
    } else if (loggedInUser) {
      buttonDiv.append(seeMore, attendButton)
    } else {
      buttonDiv.append(seeMore)
    }

    eventDivShow.append(showEventTitle, showEventImg, buttonDiv)
    eventsDivContainer.append(eventDivShow)
  })

  showEventsSection.append(homeButton, eventsDivContainer, back)
  main.append(showEventsSection)

  back.addEventListener('click', () => {
    Home()
  })

  attendenceButtonsSettings(eventsImAttending)
}

export const SeeEventsPage = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/v1/events')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const events = await response.json()
    printEvents(events)
  } catch (error) {
    console.error('Could not fetch users:', error)
  }
}

export const formatDate = (eventDateMongoDb) => {
  let date = new Date(eventDateMongoDb)
  let day = String(date.getDate()).padStart(2, '0')
  let month = date.toLocaleString('en-US', { month: 'long' })
  let year = date.getFullYear()

  return `${day} ${month} ${year}`
}
