import './NotAttendingPopUp.css'

export const notAttendingEvents = () => {
  const main = document.querySelector('main')
  const popUpDiv = document.createElement('div')
  const noEventsMessage = document.createElement('h1')
  const closeButton = document.createElement('button')

  noEventsMessage.innerText =
    "You are not attending any events at the moment. Go to 'See all events' to sign up"
  closeButton.innerText = 'close'
  closeButton.className = 'homeScreenButton'
  closeButton.id = 'closeButtonNotAttendingEvents'

  popUpDiv.className = 'popUpDiv'
  noEventsMessage.className = 'noEventsMessage'

  popUpDiv.append(noEventsMessage, closeButton)
  main.append(popUpDiv)

  closeButton.addEventListener('click', () => {
    popUpDiv.style.display = 'none'
  })
}
