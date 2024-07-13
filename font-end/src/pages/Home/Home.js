import { addButtonEventListeners } from '../../components/HomeLogic/addButtonEventListeners'
import { loadContentAccordingToUserStatus } from '../../components/HomeLogic/loadContentAccordingToUserStatus'
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

  homeSection.className = 'homeSection'
  welcomeDiv.className = 'welcomeDiv'
  welcomeTitle.innerText = 'Welcome to Events Maker'
  welcomeButton.className = 'sidebarButtons'
  welcomeButton.id = 'seeAllEvents'
  welcomeButton.innerText = 'See all events'
  eventDivContainer.className = 'eventDivContainer'
  logUser.id = 'logUser'

  welcomeDiv.append(logUser, welcomeTitle, welcomeButton,)
  homeSection.append(welcomeDiv, eventDivContainer)
  main.append(homeSection)

  LogUser(logUser)
  loadContentAccordingToUserStatus(eventDivContainer)
  addButtonEventListeners(welcomeButton)
}
