import { Home } from '../../../pages/Home/Home'
import './EventCreated.css'

export const EventCreated = (eventDetails) => {
  const form = document.querySelector('form')
  form.innerHTML = ''
  const formCreatedDiv = document.createElement('div')
  const continueButton = document.createElement('button')

  formCreatedDiv.className = 'formCreatedDiv'
  continueButton.className = 'continueButton'
  continueButton.innerText = 'Continue'


  continueButton.addEventListener('click', () => {
    Home()
  })

  const textContentCreatedEvent = `
  <div class="eventDetails">
  <h2 class="eventCreatedTitle">Congratulations! Your event has been created.</h2>
  <p class="eventNameCreated">Event name: ${eventDetails.eventTitle}</p>
  <p class="eventLocationCreated">Location: ${eventDetails.eventLocation}</p>
  <p class="eventDateCreated">Date: ${eventDetails.eventDate}</p>
  <p class="eventDescriptionCreated">Description:</p>
  <div class="eventCreatedDescriptionDiv">
      <p class="eventCreatedDescription">${eventDetails.eventDescription}</p>
  </div>
</div>
${eventDetails.eventImg ? `
  <div class="eventImageContainer">
    <img src="${eventDetails.eventImg}" alt="Event Image" class="eventCreatedImage">
  </div>
` : ''}
`

  formCreatedDiv.insertAdjacentHTML('beforeend', textContentCreatedEvent)
  formCreatedDiv.append(continueButton)
  form.append(formCreatedDiv)
}
