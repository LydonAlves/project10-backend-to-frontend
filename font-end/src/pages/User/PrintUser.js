import { BackButton } from '../../components/Buttons/BackButton/BackButton'
import { createHomeButton } from '../../components/Buttons/HomeButton/HomeButton'
import { createUserCard } from '../../components/User/createUserCard/createUserCard'
import { Home } from '../Home/Home'
import './PrintUser.css'

export const PrintUser = (userArray) => {
  const main = document.querySelector('main')
  main.innerHTML = ''
  const printUserSection = document.createElement('section')
  const backButton = BackButton()
  const homeButton = createHomeButton()

  printUserSection.className = 'printUserSection'
  backButton.classList.add('seeUsersBackButton')

  createUserCard(userArray, printUserSection)

  backButton.addEventListener('click', () => {
    Home()
  })

  printUserSection.append()
  main.append(homeButton, printUserSection, backButton)
}


