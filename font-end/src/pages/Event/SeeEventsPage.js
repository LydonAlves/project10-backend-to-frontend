import './SeeEventsPage.css'
import { Home } from '../Home/Home';
import { attendenceButtonsSettings } from './../../components/EventComponents/ConfirmAttendence/attendenceButtonSettings';
import { printEventCard } from '../../components/EventComponents/printEventCard/printEventCard';
import { standardButton } from '../../components/Buttons/standardButton/standardButton';

export const seeEventsPage = (events, eventsImAttending) => {
  const main = document.querySelector('main')
  main.innerHTML = ''
  const showEventsSection = document.createElement('section')
  const eventsDivContainer = document.createElement('div')
  const back = standardButton('<< Back', 'backButton')
  const homeButton = standardButton('Home', 'homeButton', Home)


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







