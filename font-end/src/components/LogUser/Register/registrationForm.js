export const registrationForm = (form, formDetails) => {
  const emailInput = document.createElement('input')
  const telephoneNumberInput = document.createElement('input')
  const cityInput = document.createElement('input')
  const { nameInput, formTitle, passwordInput, submitButton, infoText } = formDetails

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
}