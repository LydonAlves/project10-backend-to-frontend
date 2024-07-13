import { SeeMoreButton } from "../../Buttons/SeeMoreButton/SeeMoreButton"
import { printUserSeeMore } from "../printUserSeeMore"
import './createUserCard.css'

export const createUserCard = (userArray, printUserSection) => {
  userArray.forEach((user) => {
    const printUserDiv = document.createElement('div')
    const userDiv = document.createElement('div')
    const userInfoDiv = document.createElement('div')
    const userAvatar = document.createElement('img')
    const userName = document.createElement('p')
    const userEmailTitle = document.createElement('p')
    const userEmail = document.createElement('p')
    const telephoneTitle = document.createElement('p')
    const telephoneNumber = document.createElement('p')
    const cityTitle = document.createElement('p')
    const city = document.createElement('p')
    const seeMore = SeeMoreButton()
    const userId = user._id

    userAvatar.src = './assets/images/user.png'
    userName.innerText = user.userName
    userEmailTitle.innerText = 'Email'
    userEmail.innerText = user.email
    telephoneTitle.innerText = 'Phone number'
    telephoneNumber.innerText = user.telephone
    cityTitle.innerText = 'City'
    city.innerText = user.city

    printUserDiv.className = 'printUserDiv'
    userInfoDiv.className = 'userInfoDiv'
    userDiv.className = 'userDiv'
    userAvatar.className = 'userAvatar'
    userName.className = 'userName'
    userEmailTitle.className = 'userEmailTitle'
    userEmail.className = 'userEmail'
    telephoneTitle.className = 'telephoneTitle'
    telephoneNumber.className = 'telephoneNumber'
    cityTitle.className = 'cityTitle'
    city.className = 'city'

    seeMore.classList.add('seeMorePrintUsers')

    printUserSeeMore(seeMore, userArray, user, userAvatar, userId)

    userDiv.append(userAvatar)
    userInfoDiv.append(
      userName,
      userEmailTitle,
      userEmail,
      telephoneTitle,
      telephoneNumber,
      cityTitle,
      city,
      seeMore
    )

    printUserDiv.append(userDiv, userInfoDiv)
    printUserSection.append(printUserDiv)
  })
}