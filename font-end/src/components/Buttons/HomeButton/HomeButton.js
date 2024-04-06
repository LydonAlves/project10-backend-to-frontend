import { Home } from '../../../pages/Home/Home'
import './HomeButton.css'

export const createHomeButton = () => {
  const homeButton = document.createElement('p')

  homeButton.className = 'homeButton'
  homeButton.innerText = 'Home'

  homeButton.addEventListener('click', () => {
    Home()
  })

  return homeButton
}
