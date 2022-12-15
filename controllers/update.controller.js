import userServices from '../services/user.service.js';
const { userInfo, editUser } = userServices;

const form = document.querySelector('[data-form]');

const getInfo = async () => {
	const url = new URL(window.location);
	const id = url.searchParams.get('id');

	if (id === null) {
		window.location.href = '../screens/user-edit-error.html';
	}

	const userName = document.querySelector('[data-name]');
	const userEmail = document.querySelector('[data-email]');

	try {
		const profile = await userInfo(id);
		if (profile.name && profile.email) {
			userName.value = profile.name;
			userEmail.value = profile.email;
		} else {
			throw new Error();
		}
	} catch (error) {
		window.location.href = '../screens/user-edit-error.html';
	}
};

getInfo();

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const url = new URL(window.location);
	const id = url.searchParams.get('id');

	let rawUserName = document.querySelector('[data-name]');
	const userName = rawUserName.value.trim();
	const userEmail = document.querySelector('[data-email]').value;

	if (userName === '') {
		alert('User Name cannot be empty');
		rawUserName.value = '';
		return;
	} else {
		editUser(userName, userEmail, id).then(
			() => (window.location.href = '../screens/user-edit-success.html')
		);
	}
});
