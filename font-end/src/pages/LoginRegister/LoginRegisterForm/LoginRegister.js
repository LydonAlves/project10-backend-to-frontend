import { createHomeButton } from '../../../components/Buttons/HomeButton/HomeButton'
import { Login } from '../../../components/LogUser/Login/Login'
import { Register } from '../../../components/LogUser/Register/Register'
import './LoginRegister.css'

export const LoginRegisterForm = (isNotLoginForm) => {
  const main = document.querySelector('main')
  main.innerHTML = ''
  const loginRegisterDiv = document.createElement('div')
  const form = document.createElement('form')
  const formTitle = document.createElement('h1')
  const nameInput = document.createElement('input')
  const passwordInput = document.createElement('input')
  const submitButton = document.createElement('button')
  const infoText = document.createElement('p')
  const clickableText = document.createElement('a')
  const homeButton = createHomeButton()


  loginRegisterDiv.id = 'loginRegisterDiv'
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

  form.className = 'loginRegistrationForm'
  formTitle.className = 'formTitle'

  infoText.append(clickableText)

  if (isNotLoginForm) {
    const emailInput = document.createElement('input')
    const telephoneNumberInput = document.createElement('input')
    const cityInput = document.createElement('input')

    emailInput.placeholder = 'Email'
    emailInput.type = 'email'
    emailInput.className = 'emailInput'

    telephoneNumberInput.placeholder = 'Phone number'
    telephoneNumberInput.type = 'tel'
    telephoneNumberInput.className = 'telephoneNumberInput'

    cityInput.placeholder = 'City'
    cityInput.className = 'cityInput'

    formTitle.innerText = 'Register'

    form.append(
      formTitle,
      nameInput,
      passwordInput,
      emailInput,
      telephoneNumberInput,
      cityInput,
      submitButton,
      infoText
    )
  } else {
    formTitle.innerText = 'Login'
    form.append(formTitle, nameInput, passwordInput, submitButton, infoText)
  }

  loginRegisterDiv.append(form)
  main.append(homeButton, loginRegisterDiv)

  form.addEventListener('submit', () => {
    event.preventDefault()
    if (!isNotLoginForm) {
      Login(nameInput.value, passwordInput.value, form)
    } else {
      const emailInput = document.querySelector('.emailInput')
      const telephoneNumberInput = document.querySelector(
        '.telephoneNumberInput'
      )
      const cityInput = document.querySelector('.cityInput')
      Register(
        nameInput.value,
        passwordInput.value,
        emailInput.value,
        telephoneNumberInput.value,
        cityInput.value,
        form
      )
    }
  })

  clickableText.addEventListener('click', () => {
    if (!isNotLoginForm) {
      LoginRegisterForm(true)
    } else {
      LoginRegisterForm(false)
    }
  })
}
