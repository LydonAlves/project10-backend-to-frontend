import { LoginRegister } from '../../../pages/LoginRegister/LoginRegister'
import { url } from '../../../utils/url'
import { loading } from '../../loading/loading'
import { missingInfoInForm } from './createMissingInfoForm'

import { removeMessageByClassName } from './removeMessageByClass'

export const Register = async (
  userName, password, email, telephone, city, form
) => {

  const finalObject = JSON.stringify({
    userName, password, email, telephone, city
  })

  removeMessageByClassName(form, 'missingInfoText')
  removeMessageByClassName(form, 'incorrectPassword')
  removeMessageByClassName(form, 'userExistsText')

  const formDetails = [userName, password, email]

  const isMissingInfo = missingInfoInForm(formDetails, form)
  if (isMissingInfo) {
    return
  }

  const regEx = /^(?=.*\d)(?=.*[A-Z]).{8,}$/
  const correctPassword = regEx.test(password)

  if (!correctPassword) {
    const incorrectPassword = document.createElement('p')
    incorrectPassword.className = 'incorrectPassword'
    incorrectPassword.innerText =
      'Make sure your password contains a capital letter, a number and is at least 8 characters long.'
    form.append(incorrectPassword)
    return
  }

  const options = {
    method: 'POST',
    body: finalObject,
    headers: { 'Content-Type': 'application/json' }
  }
  const loadingSpinner = loading();
  form.append(loadingSpinner);

  try {
    const res = await fetch(
      `${url}users/register`,
      options
    )
    loadingSpinner.remove();

    if (res.status === 409) {
      const userExistsText = document.createElement('p')
      userExistsText.innerText = 'User already exists, choose a different name.'
      userExistsText.className = 'userExistsText'
      form.append(userExistsText)
      return
    }
  } catch (error) {
    loadingSpinner.remove();
    console.log(error)
  }

  LoginRegister()
}
