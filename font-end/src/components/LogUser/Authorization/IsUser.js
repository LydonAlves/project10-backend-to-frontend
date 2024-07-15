import { url } from '../../../utils/url'
import { createNotAuthorizedPopup } from '../../NotAuthorisedPopUp/NotAuthorisedPopUp'

export const checkIfIsUser = async (user) => {

  if (user && user._id) {
    const userId = user._id
    try {
      const response = await fetch(
        `${url}users/${userId}`
      )

      if (response.status === 400) {
        createNotAuthorizedPopup()
        console.log('User not found or request is bad')
        return
      }
    } catch (error) {
      console.log('error')
      return
    }
  } else {
    createNotAuthorizedPopup()
    return
  }
  return
}
