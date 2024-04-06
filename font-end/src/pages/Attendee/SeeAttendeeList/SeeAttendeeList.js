import { BackButton } from '../../../components/Buttons/BackButton/BackButton'
import { createHomeButton } from '../../../components/Buttons/HomeButton/HomeButton'
import { SeeMoreButton } from '../../../components/Buttons/SeeMoreButton/SeeMoreButton'
import { SeeIndividualEvent } from '../../Event/SeeIndividualEvent/SeeIndividualEvent'
import { SeeIndividualAttendee } from '../SeeIndividualAttendee/SeeIndividualAttendee'
import './SeeAttendeeList.css'

export const PrintAttendeeList = (attendeeDetails, event, eventDetails) => {
  const main = document.querySelector('main')
  main.innerHTML = ''
  const attendeeListSection = document.createElement('section')
  const homeButton = createHomeButton()
  const back = BackButton()

  attendeeListSection.className = 'attendeeListSection'
  back.classList.add('seeAttendeesBackButton')

  back.addEventListener('click', () => {
    SeeIndividualEvent(event, eventDetails)
  })

  if (attendeeDetails.length === 0) {
    const noAttendees = document.createElement('p')
    noAttendees.className = 'noAttendees'
    noAttendees.innerText = 'No one has signed up for this event yet!!'
    attendeeListSection.append(noAttendees)
    main.append(attendeeListSection, back)
    return
  }

  attendeeDetails.forEach((attendee) => {
    const attendeeDiv = document.createElement('div')
    const attendeeAvatar = document.createElement('img')
    const attendeeName = document.createElement('h3')
    const attendeeEmail = document.createElement('p')
    const seeMore = SeeMoreButton()

    attendeeDiv.className = 'attendeeDiv'
    attendeeAvatar.className = 'attendeeAvatar'
    attendeeName.className = 'attendeeName'
    attendeeEmail.className = 'attendeeEmail'

    attendeeName.innerText = attendee.userName
    attendeeAvatar.src = './assets/images/user.png'

    seeMore.addEventListener('click', () => {
      SeeIndividualAttendee(
        attendee,
        attendeeAvatar,
        attendeeDetails,
        eventDetails,
        event
      )
    })

    attendeeDiv.append(attendeeName, attendeeAvatar, attendeeEmail, seeMore)
    attendeeListSection.append(attendeeDiv)
  })

  attendeeListSection.append(homeButton)
  main.append(attendeeListSection, back)
}

export const ShowAttendeeList = async (event, eventDetails) => {
  const attendeesIds = event.usersAttending
  const eventId = event._id
  try {
    const response = await fetch(
      `http://localhost:3000/api/v1/users/usersAttending`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: attendeesIds })
      }
    )
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const attendeeDetails = await response.json()

    PrintAttendeeList(attendeeDetails, event, eventDetails)
  } catch (error) {
    console.error('Error fetching attendee details:', error)
  }
}
