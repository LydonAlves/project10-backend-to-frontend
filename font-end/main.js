import { Home } from './src/pages/Home/Home'
import '/style.css'

const Main = () => {
  const app = document.querySelector('#app')
  app.innerHTML = `
  <main></main>
  `
}


Main()
Home()
