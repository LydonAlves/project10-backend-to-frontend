import { LoginRegisterForm } from '../../../pages/LoginRegister/LoginRegisterForm/LoginRegister'

export const LogUser = (logUser) => {
  const user = localStorage.getItem('user')

  if (user) {
    logUser.innerText = 'Log out'
    logUser.addEventListener('click', () => {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      LogUser(logUser)
    })
  } else {
    logUser.innerText = 'Login/Register'
    logUser.addEventListener('click', () => {
      LoginRegisterForm()
    })
  }
}
