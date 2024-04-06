import { createNotAuthorizedPopup } from '../../NotAuthorisedPopUp/NotAuthorisedPopUp'

export const checkIfIsAdmin = (res) => {
  if (res === 401) {
    const notAdmin = true
    createNotAuthorizedPopup(notAdmin)
  }
}
