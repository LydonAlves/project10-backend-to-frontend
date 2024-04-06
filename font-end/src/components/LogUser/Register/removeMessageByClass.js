export const removeMessageByClassName = (form, className) => {
  const messageElement = form.querySelector(`.${className}`)
  if (messageElement) {
    messageElement.remove()
  }
}
