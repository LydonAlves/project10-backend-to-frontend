import { BackButton } from '../../../components/Buttons/BackButton/BackButton'
import { createHomeButton } from '../../../components/Buttons/HomeButton/HomeButton'
import { fetchAllEventInfo } from '../../../components/EventComponents/EventLogic/fetchAlleventInfo'
import { formatDate } from '../../Event/SeeEventsPage/SeeEventsPage'
import { PrintAttendeeList } from '../SeeAttendeeList/SeeAttendeeList'
import './SeeIndividualAttendee.css'

export const printIndividualUser = async (
  attendee,
  attendeeAvatar,
  userId,
  back
) => {
  const main = document.querySelector('main')
  main.innerHTML = ''
  const individualAttendeeSection = document.createElement('section')
  const attendeeContainer = document.createElement('div')
  const seeAttendeeDiv = document.createElement('div')
  const seeEventsDiv = document.createElement('div')
  const attendeeName = document.createElement('h3')
  const eventContainerTitle = document.createElement('h3')
  const homeButton = createHomeButton()

  const eventInfo = await fetchAllEventInfo(userId)

  individualAttendeeSection.className = 'individualAttendeeSection'
  attendeeContainer.className = 'attendeeContainer'
  seeAttendeeDiv.className = 'seeAttendeeDiv'
  seeEventsDiv.className = 'seeEventsDiv'
  attendeeName.className = 'individualAttendeeName'
  attendeeAvatar.className = 'attendeeAvatarIndividual'
  eventContainerTitle.className = 'eventContainerTitle'
  back.classList.add('backIndivAttendee')

  attendeeName.innerText = attendee.userName
  eventContainerTitle.innerText = "Events I'm attending"

  seeAttendeeDiv.append(attendeeAvatar, attendeeName)
  seeEventsDiv.append(eventContainerTitle)

  if (eventInfo) {
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

  if (!eventInfo) {
    const eventNotification = document.createElement('p')

    eventNotification.innerText =
      "User hasn't confirmed attendence to any events yet."
    eventNotification.className = 'eventNotification'

    seeEventsDiv.append(eventNotification)
  }

  attendeeContainer.append(seeAttendeeDiv, seeEventsDiv)
  individualAttendeeSection.append(homeButton, attendeeContainer, back)
  main.append(individualAttendeeSection)
}

export const SeeIndividualAttendee = async (
  attendee,
  attendeeAvatar,
  attendeeDetails,
  eventDetails,
  event
) => {
  const back = BackButton()
  const userId = attendee._id

  back.addEventListener('click', () => {
    PrintAttendeeList(attendeeDetails, event, eventDetails)
  })

  printIndividualUser(attendee, attendeeAvatar, userId, back)
}
