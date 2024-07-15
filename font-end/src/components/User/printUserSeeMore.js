import { PrintUser } from "../../pages/User/PrintUser"
import { standardButton } from "../Buttons/standardButton/standardButton"
import { printIndividualUser } from "./printIndividualUser/printIndividualUser"

export const printUserSeeMore = (seeMore, userArray, user, userAvatar, userId) => {
  const individualUserBackButton = standardButton('<< Back', 'backButton')
  individualUserBackButton.addEventListener('click', () => {
    PrintUser(userArray)
  })

  seeMore.addEventListener('click', () => {
    printIndividualUser(user, userAvatar, userId, individualUserBackButton)
  })
}