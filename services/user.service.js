const userList = () =>
	fetch('http://localhost:3000/profile').then((response) => response.json());

const newUser = (name, email) => {
	return fetch('http://localhost:3000/profile', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ id: uuid.v4(), name, email }),
	});
};

const removeUser = (id) => {
	return fetch(`http://localhost:3000/profile/${id}`, {
		method: 'DELETE',
	});
};

const editUser = (name, email, id) => {
	return fetch(`http://localhost:3000/profile/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ name, email }),
	}).then((response) => response);
};

const userInfo = (id) => {
	return fetch(`http://localhost:3000/profile/${id}`).then((response) =>
		response.json()
	);
};

export default { userList, userInfo, newUser, editUser, removeUser };
