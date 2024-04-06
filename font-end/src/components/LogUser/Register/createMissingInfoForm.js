export const missingInfoInForm = (detailsArray, form) => {
  if (detailsArray.some((value) => value === '')) {
    //*This is to leave the text there instead of replacing it
    let missingInfoText = form.querySelector('.missingInfoText')
    if (!missingInfoText) {
      const missingInfoText = document.createElement('p')
      missingInfoText.className = 'missingInfoText'
      missingInfoText.innerText = 'please fill in all required information'
      form.append(missingInfoText)
    }
    return true
  }
  return false
}
