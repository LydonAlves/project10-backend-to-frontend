import { Home } from '../../../pages/Home/Home'
import { LoginRegister } from '../../../pages/LoginRegister/LoginRegister'
import { getUser } from '../../../utils/getUser'

export const LogUser = (logUser) => {
  const user = getUser()

  if (user) {
    logUser.innerText = 'Log out'
    logUser.addEventListener('click', () => {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      LogUser(logUser)
      Home()
    })
  } else {
    logUser.innerText = 'Login/Register'
    logUser.addEventListener('click', () => {
      LoginRegister()
    })
  }
}
