import { LoginRegister } from "../../../../pages/LoginRegister/LoginRegister"
import { registrationForm } from "../../Register/registrationForm"
import { submitLoginRegister } from "../submitLoginRegister"
import './loginForm.css'

export const loginForm = (form, loginRegisterDiv, isNotLoginForm) => {
  const formTitle = document.createElement('h1')
  const nameInput = document.createElement('input')
  const passwordInput = document.createElement('input')
  const submitButton = document.createElement('button')
  const infoText = document.createElement('p')
  const clickableText = document.createElement('a')
  const formDetails = {
    formTitle, nameInput, passwordInput, submitButton, infoText
  }
  const submitLoginObject = {
    form, nameInput, passwordInput, isNotLoginForm
  }

  nameInput.placeholder = 'Type your username'

  passwordInput.placeholder = 'Type your password'
  passwordInput.type = 'password'

  submitButton.textContent = isNotLoginForm ? 'Register' : 'Login'
  infoText.textContent = isNotLoginForm
    ? 'If you are not registered, login here: '
    : 'If you are registered, login here: '
  infoText.className = 'infoText'

  clickableText.textContent = isNotLoginForm ? 'Login' : 'Register'
  clickableText.href = '#'

  clickableText.className = 'clickableText'
  formTitle.className = 'formTitle'

  infoText.append(clickableText)


  if (isNotLoginForm) {
    registrationForm(form, formDetails)
  } else {
    formTitle.innerText = 'Login'
    form.append(formTitle, nameInput, passwordInput, submitButton, infoText)
  }

  clickableText.addEventListener('click', () => {
    LoginRegister(!isNotLoginForm);
  })

  submitLoginRegister(submitLoginObject)
}