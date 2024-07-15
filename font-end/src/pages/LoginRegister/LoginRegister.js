import { standardButton } from '../../components/Buttons/standardButton/standardButton'
import { loginForm } from '../../components/LogUser/Login/loginForm/loginForm'
import { Home } from '../Home/Home'
import './LoginRegister.css'

export const LoginRegister = (isNotLoginForm) => {
  const main = document.querySelector('main')
  main.innerHTML = ''
  const loginRegisterDiv = document.createElement('div')
  const form = document.createElement('form')
  const homeButton = standardButton('Home', 'homeButton', Home)

  loginRegisterDiv.id = 'loginRegisterDiv'
  form.className = 'loginRegistrationForm'


  loginForm(form, loginRegisterDiv, isNotLoginForm)

  loginRegisterDiv.append(form)
  main.append(homeButton, loginRegisterDiv)
}
