import { getUser } from '../../../utils/getUser'
import { eventsUserAttends } from './EventsUserAttends'

export const myEventsFindUserId = () => {
  const user = getUser()

  if (user) {
    let userId = user._id
    eventsUserAttends(userId)
  } else {
    eventsUserAttends()
    console.log('User info not found in session storage.')
  }
}
