import { createEventOptions } from "./createEventOptions";
import { eventsData } from "./eventsData";

export const loadContentAccordingToUserStatus = (eventDivContainer) => {
  const user = localStorage.getItem('user')
  const userObject = JSON.parse(user);

  if (userObject && userObject.rol === "user") {
    const eventsDataExcludingLast = eventsData.slice(0, -1);
    eventsDataExcludingLast.forEach(({ imgSrc, buttonText, buttonClassName }) => {
      const eventOption = createEventOptions(imgSrc, buttonText, buttonClassName)
      eventDivContainer.append(eventOption)
    })
  } else {
    eventsData.forEach(({ imgSrc, buttonText, buttonClassName }) => {
      const eventOption = createEventOptions(imgSrc, buttonText, buttonClassName)
      eventDivContainer.append(eventOption)
    })
  }
}