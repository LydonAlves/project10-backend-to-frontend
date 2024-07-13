import { BackButton } from '../../Buttons/BackButton/BackButton'
import { createHomeButton } from '../../Buttons/HomeButton/HomeButton'
import { SeeAttendeeButton } from '../../Buttons/SeeAttendeeButton/SeeAttendee'
import { seeEventsPage } from '../../../pages/Event/SeeEventsPage'
import './SeeIndividualEvent.css'
import { fetchAttendeeList } from '../../../utils/fetchAttendeeList'

export const SeeIndividualEvent = (eventDetails) => {
  const main = document.querySelector('main')
  main.innerHTML = ''
  const individualEventSection = document.createElement('section')
  const individualEventDiv = document.createElement('div')
  const showEventLocation = document.createElement('p')
  const showEventDescription = document.createElement('p')
  const eventDescriptionText = document.createElement('p')
  const seeAttendeeButton = SeeAttendeeButton()
  const back = BackButton()
  const homeButton = createHomeButton()
  const { event, showEventImg, showEventTitle, showEventDate, events, eventsImAttending } = eventDetails

  showEventLocation.innerText = `Location: ${event.location}`
  showEventDescription.innerText = 'Description:'
  eventDescriptionText.innerText = `${event.description}`

  individualEventSection.className = 'individualEventSection'
  individualEventDiv.className = 'individualEventDiv'
  showEventLocation.className = 'showEventLocation'
  showEventDescription.className = 'showEventDescription'
  eventDescriptionText.className = 'eventDescriptionText'
  back.classList.add('individualEventBack')
  seeAttendeeButton.classList.add('attendButton', 'seeAttendeeButton')

  seeAttendeeButton.addEventListener('click', () => {
    fetchAttendeeList(event, eventDetails)
  })

  back.addEventListener('click', () => {
    seeEventsPage(events, eventsImAttending)
  })

  individualEventDiv.append(
    showEventImg,
    showEventTitle,
    showEventDate,
    showEventLocation,
    showEventDescription,
    eventDescriptionText,
    seeAttendeeButton,
    back
  )
  individualEventSection.append(homeButton, individualEventDiv)
  main.append(individualEventSection)
}
