import { EventCreated } from '../EventCreated/EventCreated'
import { missingInfoInForm } from '../../LogUser/Register/createMissingInfoForm'
import { url } from '../../../utils/url'

export const EventLogic = async (eventDetails, form) => {
  const formData = new FormData()

  formData.append('img', eventDetails.eventImg)
  formData.append('title', eventDetails.eventTitle)
  formData.append('location', eventDetails.eventLocation)
  formData.append('date', eventDetails.eventDate)
  formData.append('description', eventDetails.eventDescription)

  const formDetails = [
    eventDetails.eventTitle,
    eventDetails.eventLocation,
    eventDetails.eventDate,
    eventDetails.eventDescription
  ]

  const isMissingInfo = missingInfoInForm(formDetails, form)
  if (isMissingInfo) {
    return
  }

  const options = {
    method: 'POST',
    body: formData
  }

  const response = await fetch(`${url}events`, options)

  const data = await response.json()
  eventDetails.eventImg = data.img

  EventCreated(eventDetails)
}
