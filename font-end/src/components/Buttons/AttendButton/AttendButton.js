import './AttendButton.css'

export const AttendButton = () => {
  const attendButton = document.createElement('button')

  attendButton.innerText = 'Confirm attendence'
  attendButton.className = 'attendButton'

  return attendButton
}
