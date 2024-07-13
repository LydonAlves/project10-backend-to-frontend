
import { LoginRegister } from '../../pages/LoginRegister/LoginRegister'
import './NotAuthorisedPopUp.css'

export const createNotAuthorizedPopup = (notAdmin) => {
  const main = document.querySelector('main')
  const popUpDiv = document.createElement('div')
  const popUpText = document.createElement('p')
  const buttonPopupDiv = document.createElement('div')
  const loginButton = document.createElement('button')
  const closeButton = document.createElement('button')

  popUpDiv.className = 'popUpDivAuthorization'
  popUpText.className = 'popUpText'
  buttonPopupDiv.className = 'buttonPopupDiv'
  loginButton.classList.add('homeScreenButton')
  closeButton.classList.add('homeScreenButton')

  if (notAdmin) {
    popUpText.innerText = 'Only Admin allowed'
  } else {
    popUpText.innerText = 'You need to be logged in to perfom this action'
  }

  loginButton.innerText = 'Login'
  closeButton.innerText = 'Close'

  notAuthorizedButtons(popUpDiv, closeButton, loginButton)

  buttonPopupDiv.append(loginButton, closeButton)
  popUpDiv.append(popUpText, buttonPopupDiv)
  main.append(popUpDiv)
}

const notAuthorizedButtons = (popUpDiv, closeButton, loginButton) => {
  closeButton.addEventListener('click', () => {
    popUpDiv.style.display = 'none'
  })

  loginButton.addEventListener('click', () => {
    LoginRegister()
  })
}
