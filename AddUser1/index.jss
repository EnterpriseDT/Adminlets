function processRequest() {
	
	var message = null;  // this will be displayed at the top of the page

	// is a user being added?
	if (request.form.userName) {
		// make sure the password fields are set and that they match
		if (!request.form.password || !request.form.passwordConfirm)
			message = "Enter the password twice";
		else if (request.form.password != request.form.passwordConfirm)
			message = "Passwords don't match";
		else {
			// the fields are valid so let's try to add the user
			try {
				// execute the 'useradd' command see URL below
				// https://enterprisedt.com/products/completeftp/doc/guide/html/admincommands.html
				message = system.executeCustomCommand("useradd", [
					"-r " + request.form.password,  // password field
					request.form.userName           // user-name field
				]);
			} catch (e) {
				// lack of permissions is a common error, so we make sure it's clear
				if (e.toString().indexOf("permission")>=0)
					message = "Error: You don't have permission to add users.";
				else
					message = "Error: " + e.toString();
			}
		}
	}

	// return the contents of AddUserTemplate.html with 'message' substituted for '{{message}}'
	response.writeUsingTemplateFile("AddUserTemplate.html", {
		message: message
	});
}