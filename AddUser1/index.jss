function processRequest() {
	
	var message = null;
	if (request.form.userName) {
		if (!request.form.password || !request.form.passwordConfirm)
			message = "Enter the password twice";
		else if (request.form.password != request.form.passwordConfirm)
			message = "Passwords don't match";
		else
			try {
				message = system.executeCustomCommand("useradd", [
					"-r " + request.form.password,
					request.form.userName
					]);
				console.log(message);
			} catch (e) {
				console.log("Error: " + e);
				if (e.toString().indexOf("permission")>=0)
					message = "Error: You don't have permission to add users.";
				else
					message = "Error: " + e.toString();
			}
	}
	var templateData = {
		message: message
	};
	response.writeUsingTemplateFile("AddUserTemplate.html", templateData);
}