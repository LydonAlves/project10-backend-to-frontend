import { BackButton } from '../../../components/Buttons/BackButton/BackButton'
import { createHomeButton } from '../../../components/Buttons/HomeButton/HomeButton'
import { SeeAttendeeButton } from '../../../components/Buttons/SeeAttendeeButton/SeeAttendee'
import { ShowAttendeeList } from '../../Attendee/SeeAttendeeList/SeeAttendeeList'
import { printEvents } from '../SeeEventsPage/SeeEventsPage'
import './SeeIndividualEvent.css'

export const SeeIndividualEvent = (event, eventDetails) => {
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
    ShowAttendeeList(event, eventDetails)
  })

  back.addEventListener('click', () => {
    printEvents(eventDetails.events, eventDetails.eventsImAttending)
  })

  individualEventDiv.append(
    eventDetails.showEventImg,
    eventDetails.showEventTitle,
    eventDetails.showEventDate,
    showEventLocation,
    showEventDescription,
    eventDescriptionText,
    seeAttendeeButton,
    back
  )
  individualEventSection.append(homeButton, individualEventDiv)
  main.append(individualEventSection)
}
