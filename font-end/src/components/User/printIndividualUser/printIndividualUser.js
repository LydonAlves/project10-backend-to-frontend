import { addEventInfoToAttendeeCard } from "../../attendeeComponents/addEventInfoToAttendeeCard/addEventInfoToAttendeeCard";
import { createHomeButton } from "../../Buttons/HomeButton/HomeButton"
import { fetchAllEventInfo } from '../../../utils/fetchAlleventInfo';
import './printIndividualUser.css'

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
    addEventInfoToAttendeeCard(seeEventsDiv, eventInfo)
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