import './BackButton.css'
export const BackButton = () => {
  const button = document.createElement('button')

  button.className = 'backButton'
  button.textContent = '<< Back'

  return button
}
