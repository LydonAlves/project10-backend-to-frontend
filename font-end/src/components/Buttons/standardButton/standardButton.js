import './standardButton.css'

export const standardButton = (innerText, className, functionToAdd) => {
  const standardButton = document.createElement('button')

  standardButton.innerText = innerText
  standardButton.className = className

  if (functionToAdd) {
    standardButton.addEventListener('click', () => {
      functionToAdd()
    })

  }

  return standardButton
}

//* AttendeeButton
// attendButton.innerText = 'Confirm attendence'
// attendButton.className = 'attendButton'

//* BackButton
// button.className = 'backButton'
// button.textContent = '<< Back'


//* Home button
// homeButton.className = 'homeButton'
// homeButton.innerText = 'Home'

// homeButton.addEventListener('click', () => {
//   Home()
// })

//* seeAttendees
// SeeAttendeeButton.innerText = 'See attendees'