const table = document.querySelector('[data-table]');
const http = new XMLHttpRequest();

const createNewLine = (userName, userEmail) => {
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
					<button class="simple-button simple-button--delete" type="button">
						Remove
					</button>
				</li>
			</ul>
		</td>`;
	line.innerHTML = content;
	return line;
};

const userList = () =>
	fetch('http://localhost:3000/profile').then((response) => response.json());

userList()
	.then((data) => {
		data.forEach((profile) => {
			const newLine = createNewLine(profile.name, profile.email);
			table.appendChild(newLine);
		});
	})
	.catch(() => console.log(`Error: ${http.status} ${http.statusText}`));
