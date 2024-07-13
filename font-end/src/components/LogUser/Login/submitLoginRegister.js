import { Register } from "../Register/Register"
import { Login } from "./loginLogic/Login"

export const submitLoginRegister = (submitLoginObject) => {

  const { form, nameInput, passwordInput, isNotLoginForm } = submitLoginObject

  form.addEventListener('submit', () => {
    event.preventDefault()
    if (!isNotLoginForm) {
      Login(nameInput.value, passwordInput.value, form)
    } else {
      const emailInput = document.querySelector('.emailInput')
      const telephoneNumberInput = document.querySelector('.telephoneNumberInput')
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
}