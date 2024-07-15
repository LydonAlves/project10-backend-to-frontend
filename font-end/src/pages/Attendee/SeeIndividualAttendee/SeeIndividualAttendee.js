import { PrintAttendeeList } from '../SeeAttendeeList/SeeAttendeeList'
import './SeeIndividualAttendee.css'
import { printIndividualUser } from './../../../components/User/printIndividualUser/printIndividualUser';
import { standardButton } from '../../../components/Buttons/standardButton/standardButton';

export const SeeIndividualAttendee = async (
  attendee,
  attendeeAvatar,
  attendeeDetails,
  eventDetails,
  event
) => {
  const back = standardButton('<< Back', 'backButton')
  const userId = attendee._id

  back.addEventListener('click', () => {
    PrintAttendeeList(attendeeDetails, event, eventDetails)
  })

  printIndividualUser(attendee, attendeeAvatar, userId, back)
}
