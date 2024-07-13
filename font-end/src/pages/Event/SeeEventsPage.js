import './SeeEventsPage.css'
import { BackButton } from '../../components/Buttons/BackButton/BackButton';
import { Home } from '../Home/Home';
import { createHomeButton } from '../../components/Buttons/HomeButton/HomeButton';
import { attendenceButtonsSettings } from './../../components/EventComponents/ConfirmAttendence/attendenceButtonSettings';
import { printEventCard } from '../../components/EventComponents/printEventCard/printEventCard';

export const seeEventsPage = (events, eventsImAttending) => {
  const main = document.querySelector('main')
  main.innerHTML = ''
  const showEventsSection = document.createElement('section')
  const eventsDivContainer = document.createElement('div')
  const homeButton = createHomeButton()
  const back = BackButton()

  showEventsSection.className = 'showEventsSection'
  eventsDivContainer.className = 'eventsDivContainer'
  back.classList.add('eventsIAttendBack')


  printEventCard(events, eventsDivContainer, eventsImAttending)

  showEventsSection.append(homeButton, eventsDivContainer, back)
  main.append(showEventsSection)

  back.addEventListener('click', () => {
    Home()
  })

  attendenceButtonsSettings(eventsImAttending)
}







