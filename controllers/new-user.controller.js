import userServices from '../services/user.service.js';
const { newUser } = userServices;

const form = document.querySelector('[data-form]');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const userName = document.querySelector('[data-name]').value;
	const userEmail = document.querySelector('[data-email]').value;
	newUser(userName, userEmail)
		.then(() => (window.location.href = '../screens/new-success.html'))
		.catch((error) => console.log(error));
});
