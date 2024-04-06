import { CreateEventForm } from '../../pages/Event/CreateEventForm/CreateEvent'
import { SeeEventsPage } from '../../pages/Event/SeeEventsPage/SeeEventsPage'
import { myEventsFindUserId } from '../EventComponents/EventsUserAttends/myEventsFindUser'
import { SeeAllUsers } from '../GetUser/GetUser'
import { checkIfIsUser } from '../LogUser/Authorization/IsUser'

export const addButtonEventListeners = (welcomeButton) => {
  const eventsAttendingButton = document.querySelector('.eventsAttendingButton')
  const createEventButtonHome = document.querySelector('.createEventButtonHome')
  const seeUsersButton = document.querySelector('.seeUsersButton')

  const user = JSON.parse(localStorage.getItem('user'))

  welcomeButton.addEventListener('click', () => {
    SeeEventsPage()
  })

  eventsAttendingButton.addEventListener('click', () => {
    checkIfIsUser(user)
    myEventsFindUserId()
  })

  createEventButtonHome.addEventListener('click', () => {
    checkIfIsUser()
    if (user) {
      CreateEventForm()
    }
  })

  seeUsersButton.addEventListener('click', () => {
    checkIfIsUser(user)
    SeeAllUsers()
  })
}
