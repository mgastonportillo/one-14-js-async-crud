import userServices from '../services/user.service.js';
const { userList, removeUser } = userServices;

const createNewLine = (userName, userEmail, id) => {
	const line = document.createElement('tr');
	const content = `
    <td class="td" data-td>
			${userName}
		</td>
		<td>${userEmail}</td>
		<td>
			<ul class="table__button-control">
				<li>
					<a
						href="../screens/user-edit.html"
						class="simple-button simple-button--edit"
					>
						Edit
					</a>
				</li>
				<li>
					<button class="simple-button simple-button--delete" type="button" id="${id}">
						Remove
					</button>
				</li>
			</ul>
		</td>`;
	line.innerHTML = content;
	const button = line.querySelector('button');
	button.addEventListener('click', () => {
		const id = button.id;
		removeUser(id)
			.then((response) => console.log(response))
			.catch((error) => console.log(error));
	});
	return line;
};

const table = document.querySelector('[data-table]');

userList()
	.then((data) => {
		data.forEach((profile) => {
			const { name, email, id } = profile;
			const newLine = createNewLine(name, email, id);
			table.appendChild(newLine);
		});
	})
	.catch((error) => console.log(error));
