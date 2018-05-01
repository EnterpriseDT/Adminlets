# Adminlets
A collection of tiny, simple web-apps that perform simple CompleteFTP administration tasks.  These web-apps may be used as is or customized as required.

The following adminlets are available:
* *AddUser1*: Prompts the user for a user-name and a password (twice) and creates a non-Windows user accordingly.  The user's home folder will be `/Home/%UserName%`, which will map to `C:\ProgramData\Enterprise Distributed Technologies\Complete FTP\Users\%UserName%`

# Prerequisite
* CompleteFTP Enterprise Edition version 11.1.0 or later

# Installation
1. Clone or download this repository.
1. Copy the directories containing the subdirectories of the adminlets that you want to a suitable directory in the Windows file-system.
1. Create a group called `subadmins` in CompleteFTP.
1. Add a folder in CompleteFTP's virtual file-system that maps to the adminlet's directory (e.g. `/Adminlets`).
1. Set the group of the newly added folder to `subadmins`.
1. Go to the Extensions panel and select the Permissions tab.
1. Add a group permission that gives the `subadmins` group permission to the `AdminCustomCommands` custom-command extension.
1. Add the CompleteFTP users who you'd like to use the adminlet to the `subadmins` group.
1. Apply the changes.

# Running an adminlet
1. Enter the URL of the desired adminlet, e.g. `http://localhost/Adminlets/AddUser1/`, and press Enter.  You'll be redirected to CompleteFTP's login page.
1. Enter the credentials of a user that's a member of the `subadmins` group and press Enter.  You'll be redirected back to the adminlet's page.
1. Enter the required information and press the button.
