import { Home } from '../../../pages/Home/Home'
import './Login.css'

export let userInfo
export let userLoggedId

export const Login = async (userName, password, form) => {
  const errorText = document.querySelector('.errorText')
  if (errorText) {
    errorText.remove()
  }

  const finalObject = JSON.stringify({ userName, password })
  //headers is to tell the app what kind of content to use: json, and for authentication
  const options = {
    method: 'POST',
    body: finalObject,
    headers: { 'Content-Type': 'application/json' }
  }

  const res = await fetch('http://localhost:3000/api/v1/users/login', options)

  if (res.status === 400) {
    const errorText = document.createElement('p')
    errorText.textContent = 'User name or password incorrect'
    errorText.className = 'errorText'

    form.append(errorText)
    return
  }

  const finalAnswer = await res.json()
  userInfo = finalAnswer
  userLoggedId = finalAnswer.user._id

  localStorage.setItem('token', finalAnswer.token)
  localStorage.setItem('user', JSON.stringify(finalAnswer.user))
  //* user = the user object you can see in MongoDb

  Home()
}
