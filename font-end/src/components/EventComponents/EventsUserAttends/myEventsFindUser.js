import { eventsUserAttends } from './EventsUserAttends'

export const myEventsFindUserId = () => {
  let userInfoString = localStorage.getItem('user')

  if (userInfoString) {
    let userInfo = JSON.parse(userInfoString)
    let userId = userInfo._id
    eventsUserAttends(userId)
  } else {
    eventsUserAttends()
    console.log('User info not found in session storage.')
  }
}
