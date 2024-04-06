import './SeeMoreButton.css'

export const SeeMoreButton = () => {
  const SeeMoreButton = document.createElement('button')

  SeeMoreButton.innerText = 'See more'
  SeeMoreButton.className = 'seeMoreButton'

  return SeeMoreButton
}
