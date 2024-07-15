import { SeeIndividualAttendee } from "../../../pages/Attendee/SeeIndividualAttendee/SeeIndividualAttendee"
import { standardButton } from "../../Buttons/standardButton/standardButton"
import './createAttendee.css'

export const createAttendee = (attendeeObject) => {
  const { attendeeDetails, eventDetails, event, attendeeListSection } = attendeeObject

  attendeeDetails.forEach((attendee) => {
    const attendeeDiv = document.createElement('div')
    const attendeeAvatar = document.createElement('img')
    const attendeeName = document.createElement('h3')
    const attendeeEmail = document.createElement('p')
    const seeMore = standardButton('See more', 'seeMoreButton')

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
}