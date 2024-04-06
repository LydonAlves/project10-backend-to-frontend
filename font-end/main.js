// import { createNotAuthorizedPopup } from './src/pages/Home/NotAuthorisedPopUp/NotAuthorisedPopUp'
import { Home } from './src/pages/Home/Home'
import '/style.css'

const Main = () => {
  const app = document.querySelector('#app')
  app.innerHTML = `
  <main></main>
  `
}

// document.addEventListener('DOMContentLoaded', () => {
//   const token = localStorage.getItem('token')

//   if (token) {
//     Home()
//     createNotAuthorizedPopup()
//   }
//   return
// })

Main()
Home()
