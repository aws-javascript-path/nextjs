const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

//const names = users.map(user => user.name)
users.map(user => {
	console.log(
		`Name = ${user.name} ID = ${user.id}
		`
	)

} )

