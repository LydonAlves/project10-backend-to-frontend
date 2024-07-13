import { createHomeButton } from '../../components/Buttons/HomeButton/HomeButton'
import { loginForm } from '../../components/LogUser/Login/loginForm/loginForm'
import './LoginRegister.css'

export const LoginRegister = (isNotLoginForm) => {
  const main = document.querySelector('main')
  main.innerHTML = ''
  const loginRegisterDiv = document.createElement('div')
  const form = document.createElement('form')
  const homeButton = createHomeButton()

  loginRegisterDiv.id = 'loginRegisterDiv'
  form.className = 'loginRegistrationForm'


  loginForm(form, loginRegisterDiv, isNotLoginForm)

  loginRegisterDiv.append(form)
  main.append(homeButton, loginRegisterDiv)
}
