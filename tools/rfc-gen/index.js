const inquirer = require('inquirer')

function checkForDupes(value) {
	// TODO implement
	
	if (!value || value.trim().length < 1) {
		return false
	}

	return true
}

inquirer.prompt([
	{
		type: 'input',
		name: 'name',
		message: 'Feature Name: ',
		validate: checkForDupes,
		suffix: '(Fill me in with a unique ident)'
	},
	{
		type: 'input',
		name: 'pr',
		message: 'RFC PR (optional): '
	}
])

