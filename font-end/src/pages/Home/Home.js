import { addButtonEventListeners } from '../../components/HomeLogic/addButtonEventListeners'
import { createEventOptions } from '../../components/HomeLogic/createEventOptions'
import { eventsData } from '../../components/HomeLogic/eventsData'
import { loading } from '../../components/loading/loading'
import { LogUser } from '../../components/LogUser/LogUser/LogUser'
import './Home.css'

export const Home = async () => {
  const main = document.querySelector('main')
  main.innerHTML = ''
  const homeSection = document.createElement('sections')
  const welcomeDiv = document.createElement('div')
  const welcomeTitle = document.createElement('p')
  const welcomeButton = document.createElement('button')
  const eventDivContainer = document.createElement('section')
  const logUser = document.createElement('p')

  const user = localStorage.getItem('user')
  const userObject = JSON.parse(user);


  LogUser(logUser)

  homeSection.className = 'homeSection'
  welcomeDiv.className = 'welcomeDiv'
  welcomeButton.className = 'sidebarButtons'
  welcomeButton.id = 'seeAllEvents'
  eventDivContainer.className = 'eventDivContainer'
  logUser.id = 'logUser'

  welcomeTitle.innerText = 'Welcome to Events Maker'
  welcomeButton.innerText = 'See all events'


  if (userObject && userObject.rol === "user") {
    const eventsDataExcludingLast = eventsData.slice(0, -1);
    eventsDataExcludingLast.forEach(({ imgSrc, buttonText, buttonClassName }) => {
      const eventOption = createEventOptions(imgSrc, buttonText, buttonClassName)
      eventDivContainer.append(eventOption)
    })
  } else {

    eventsData.forEach(({ imgSrc, buttonText, buttonClassName }) => {
      const eventOption = createEventOptions(imgSrc, buttonText, buttonClassName)
      eventDivContainer.append(eventOption)
    })
  }



  welcomeDiv.append(logUser, welcomeTitle, welcomeButton,)
  homeSection.append(welcomeDiv, eventDivContainer)
  main.append(homeSection)

  addButtonEventListeners(welcomeButton)
}
