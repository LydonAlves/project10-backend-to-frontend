import { BackButton } from '../../../components/Buttons/BackButton/BackButton'
import { PrintAttendeeList } from '../SeeAttendeeList/SeeAttendeeList'
import './SeeIndividualAttendee.css'
import { printIndividualUser } from './../../../components/User/printIndividualUser/printIndividualUser';

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
