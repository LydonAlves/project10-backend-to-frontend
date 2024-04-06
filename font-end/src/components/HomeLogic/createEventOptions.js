export const createEventOptions = (imgSrc, buttonText, buttonClassName) => {
  const eventDiv = document.createElement('div')
  const imgDiv = document.createElement('div')
  const eventImg = document.createElement('img')
  const eventButton = document.createElement('button')

  eventDiv.className = 'eventDiv'
  imgDiv.className = 'imgDiv'
  eventImg.className = 'eventImg'
  eventButton.classList.add(buttonClassName, 'sidebarButtons')

  eventImg.src = imgSrc
  eventButton.innerText = buttonText

  imgDiv.append(eventImg)
  eventDiv.append(imgDiv, eventButton)
  return eventDiv
}
