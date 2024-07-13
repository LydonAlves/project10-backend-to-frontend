import { Home } from '../../../../pages/Home/Home'
import { loading } from '../../../loading/loading'
import './Login.css'

export let userInfo
export let userLoggedId

export const Login = async (userName, password, form) => {
  const errorText = document.querySelector('.errorText')
  if (errorText) {
    errorText.remove()
  }

  const finalObject = JSON.stringify({ userName, password })

  const options = {
    method: 'POST',
    body: finalObject,
    headers: { 'Content-Type': 'application/json' }
  }

  const loadingSpinner = loading();
  form.append(loadingSpinner);

  try {
    const res = await fetch('http://localhost:3000/api/v1/users/login', options);
    loadingSpinner.remove();

    if (res.status === 400) {
      const errorText = document.createElement('p');
      errorText.textContent = 'User name or password incorrect';
      errorText.className = 'errorText';
      form.append(errorText);
      return;
    }

    if (!res.ok) {
      const errorText = document.createElement('p');
      errorText.textContent = 'An error occurred. Please try again.';
      errorText.className = 'errorText';
      form.append(errorText);
      return;
    }

    const finalAnswer = await res.json();


    localStorage.setItem('token', finalAnswer.token);
    localStorage.setItem('user', JSON.stringify(finalAnswer.user));
  } catch (error) {
    loadingSpinner.remove();

    const errorText = document.createElement('p');
    errorText.textContent = 'A network error occurred. Please try again later.';
    errorText.className = 'errorText';
    form.append(errorText);
    console.error('Fetch error:', error);
  }

  Home()
}
