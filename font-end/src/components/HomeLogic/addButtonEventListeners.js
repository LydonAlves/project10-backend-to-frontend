import { fetchAllUsers } from '../../utils/fetchAllUsers'
import { fetchEvents } from '../../utils/fetchEvents'
import { getUser } from '../../utils/getUser'
import { CreateEventForm } from '../EventComponents/CreateEventForm/CreateEvent'
import { myEventsFindUserId } from '../EventComponents/EventsUserAttends/myEventsFindUser'
import { checkIfIsUser } from '../LogUser/Authorization/IsUser'

export const addButtonEventListeners = async (welcomeButton) => {
  const eventsAttendingButton = document.querySelector('.eventsAttendingButton')
  const createEventButtonHome = document.querySelector('.createEventButtonHome')
  const seeUsersButton = document.querySelector('.seeUsersButton')
  const user = getUser()

  welcomeButton.addEventListener('click', () => {
    fetchEvents()
  })

  eventsAttendingButton.addEventListener('click', () => {
    checkIfIsUser(user)
    myEventsFindUserId()
  })

  createEventButtonHome.addEventListener('click', () => {
    checkIfIsUser(user)
    if (user) {
      CreateEventForm()
    }
  })
  if (user && user.rol === "admin") {
    seeUsersButton.addEventListener('click', () => {
      checkIfIsUser(user)
      fetchAllUsers()
    })
  }

}
