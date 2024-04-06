export const characterCountLimiter = (descriptionInput, descriptionFooter) => {
  descriptionInput.addEventListener('input', () => {
    let charCount = descriptionInput.value.length
    if (charCount > 200) {
      descriptionInput.value = descriptionInput.value.substring(0, 200)
      charCount = 200
    }
    descriptionFooter.innerText = `Max 200 characters - ${
      200 - charCount
    } characters remaining`
  })
}
