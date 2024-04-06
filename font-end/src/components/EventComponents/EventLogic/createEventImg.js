export const createEventImg = (eventSection) => {
  const eventImgDiv = document.createElement('div')
  const eventImg = document.createElement('img')

  eventImgDiv.append(eventImg)
  eventSection.append(eventImgDiv)
}
