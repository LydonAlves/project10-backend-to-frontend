import { createUserCard } from '../../components/User/createUserCard/createUserCard'
import { Home } from '../Home/Home'
import './PrintUser.css'
import { standardButton } from './../../components/Buttons/standardButton/standardButton';



export const PrintUser = (userArray) => {
  const main = document.querySelector('main')
  main.innerHTML = ''
  const printUserSection = document.createElement('section')
  const backButton = standardButton('<< Back', 'backButton')
  const homeButton = standardButton('Home', 'homeButton', Home)

  printUserSection.className = 'printUserSection'
  backButton.classList.add('seeUsersBackButton')

  createUserCard(userArray, printUserSection)

  backButton.addEventListener('click', () => {
    Home()
  })

  printUserSection.append()
  main.append(homeButton, printUserSection, backButton)
}


