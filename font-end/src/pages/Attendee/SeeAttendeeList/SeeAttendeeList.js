import { notifyNoAttendee } from '../../../components/attendeeComponents/notifyNoAttendee/notifyNoAttendee'
import { BackButton } from '../../../components/Buttons/BackButton/BackButton'
import { createHomeButton } from '../../../components/Buttons/HomeButton/HomeButton'
import { SeeIndividualEvent } from '../../../components/EventComponents/SeeIndividualEvent/SeeIndividualEvent'
import './SeeAttendeeList.css'
import { createAttendee } from './../../../components/attendeeComponents/createAttendee/createAttendee';

export const PrintAttendeeList = (attendeeDetails, event, eventDetails) => {
  const main = document.querySelector('main')
  main.innerHTML = ''
  const attendeeListSection = document.createElement('section')
  const homeButton = createHomeButton()
  const back = BackButton()

  attendeeListSection.className = 'attendeeListSection'
  back.classList.add('seeAttendeesBackButton')

  back.addEventListener('click', () => {
    SeeIndividualEvent(eventDetails,)
  })

  if (attendeeDetails.length === 0) {
    notifyNoAttendee(main, attendeeListSection, back)
  }

  const attendeeObject = {
    attendeeDetails, eventDetails, event, attendeeListSection
  }
  createAttendee(attendeeObject)


  attendeeListSection.append(homeButton)
  main.append(attendeeListSection, back)
}


