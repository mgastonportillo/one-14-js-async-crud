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

export default { userList, newUser, removeUser };
