import { EventLogic } from '../../../components/EventComponents/EventLogic/EventLogic'
import { BackButton } from '../../../components/Buttons/BackButton/BackButton'
import {
  dateDropdownList,
  dateDropdownLogic
} from '../../../components/EventComponents/DateSelector/DateSelector'
import './CreateEvent.css'
import { Home } from '../../Home/Home'
import { createEventImg } from '../../../components/EventComponents/EventLogic/createEventImg'
import { characterCountLimiter } from '../../../components/EventComponents/EventLogic/characterCountLimiter'
import { dateDataCollecter } from '../../../components/EventComponents/EventLogic/dateDataCollecter'

export const CreateEventForm = () => {
  const main = document.querySelector('main')
  main.innerHTML = ''
  const eventSection = document.createElement('section')
  const eventForm = document.createElement('form')
  const eventTitle = document.createElement('h2')
  const titleText = document.createElement('p')
  const titleInput = document.createElement('input')
  const locationText = document.createElement('p')
  const locationInput = document.createElement('input')
  const dateTitle = document.createElement('p')
  const dateDiv = document.createElement('div')
  const descriptionTitle = document.createElement('p')
  const descriptionInput = document.createElement('textarea')
  const descriptionFooter = document.createElement('p')
  const uploadImgTitle = document.createElement('p')
  const uploadImgInput = document.createElement('input')
  const createEventButton = document.createElement('button')
  const backButton = BackButton()

  eventSection.className = 'eventSection'

  eventForm.id = 'eventForm'
  eventForm.className = 'eventForm'
  eventTitle.className = 'eventTitle'

  titleText.className = 'titleText'
  titleInput.className = 'titleInput'

  locationText.className = 'locationText'
  locationInput.className = 'locationInput'

  dateTitle.className = 'dateTitle'
  dateDiv.className = 'dateDiv'

  descriptionTitle.className = 'descriptionTitle'
  descriptionInput.className = 'descriptionInput'
  descriptionFooter.className = 'descriptionFooter'

  uploadImgTitle.className = 'uploadImgTitle'
  uploadImgInput.className = 'uploadImgInput'
  uploadImgInput.type = 'file'
  uploadImgInput.name = 'img'

  createEventButton.classList.add('createEventButtonForm', 'seeMoreButton')
  backButton.classList.add('createEventBack')

  eventTitle.innerText = 'Create an event!'
  titleText.innerText = 'Give your event a name'
  titleInput.placeholder = "What is your event's name?"
  locationText.innerText = 'Where will it be held?'
  locationInput.placeholder = 'Location'
  dateTitle.innerText = 'When will it take place?'
  dateDiv.innerHTML = dateDropdownList()
  descriptionTitle.innerText = 'Give a brief description of your event'
  descriptionInput.placeholder = 'Describe your event'
  descriptionFooter.innerText = 'Max 200 words'
  uploadImgTitle.innerText = 'Add an image to your event'
  createEventButton.innerText = 'Create event'

  backButton.addEventListener('click', () => {
    Home()
  })

  eventForm.append(
    eventTitle,
    titleText,
    titleInput,
    locationText,
    locationInput,
    dateTitle,
    dateDiv,
    descriptionTitle,
    descriptionInput,
    descriptionFooter,
    uploadImgTitle,
    uploadImgInput,
    createEventButton
  )

  eventSection.append(eventForm, backButton)
  createEventImg(eventSection)
  main.append(eventSection)

  eventForm.addEventListener('submit', () => {
    event.preventDefault()
    const dateDataDetails = dateDataCollecter()
    const eventTitle = titleInput.value
    const eventLocation = locationInput.value
    const eventDescription = descriptionInput.value
    const eventImg = uploadImgInput.files[0]
    const eventDate = dateDataDetails
    const eventDetails = {
      eventTitle,
      eventLocation,
      eventDescription,
      eventImg,
      eventDate
    }

    EventLogic(eventDetails, eventForm)
  })

  characterCountLimiter(descriptionInput, descriptionFooter)
  dateDropdownLogic()
}
