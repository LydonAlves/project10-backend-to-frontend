import { notifyNoAttendee } from '../../../components/attendeeComponents/notifyNoAttendee/notifyNoAttendee'
import { SeeIndividualEvent } from '../../../components/EventComponents/SeeIndividualEvent/SeeIndividualEvent'
import './SeeAttendeeList.css'
import { createAttendee } from './../../../components/attendeeComponents/createAttendee/createAttendee';
import { standardButton } from '../../../components/Buttons/standardButton/standardButton'
import { Home } from '../../Home/Home';

export const PrintAttendeeList = (attendeeDetails, event, eventDetails) => {
  const main = document.querySelector('main')
  main.innerHTML = ''
  const attendeeListSection = document.createElement('section')
  const homeButton = standardButton('Home', 'homeButton', Home)
  const back = standardButton('<< Back', 'backButton')

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


