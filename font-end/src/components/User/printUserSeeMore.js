import { PrintUser } from "../../pages/User/PrintUser"
import { BackButton } from "../Buttons/BackButton/BackButton"
import { printIndividualUser } from "./printIndividualUser/printIndividualUser"

export const printUserSeeMore = (seeMore, userArray, user, userAvatar, userId) => {
  const individualUserBackButton = BackButton()
  individualUserBackButton.addEventListener('click', () => {
    PrintUser(userArray)
  })

  seeMore.addEventListener('click', () => {
    printIndividualUser(user, userAvatar, userId, individualUserBackButton)
  })
}