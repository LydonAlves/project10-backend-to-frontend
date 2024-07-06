import { PrintUser } from '../../pages/User/PrintUser/PrintUser'
import { checkIfIsAdmin } from '../LogUser/Authorization/isAdmin'

export const SeeAllUsers = async () => {
  try {
    const token = localStorage.getItem('token')

    const response = await fetch('http://localhost:3000/api/v1/users', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    checkIfIsAdmin(response.status)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const users = await response.json()
    if (users.length === 0) {
      console.log('no users found')
      return
    }

    PrintUser(users)
  } catch (error) {
    console.error('Could not fetch users:', error)
  }
}
