# Tutor
The project is designed for ITCS 6112 Spring 2023 for the group W3 Enthusiasts.

This is broken up into the following pages:

- index.ejs : Main page of the application with an API connection to Google Authentication
- profile.ejs : This will pull data from our login session for the user
- students.ejs : This will allow users to add students to the database
- appointments.ejs : This will allow users to add appointments using students

This project is being fully hosted in the cloud via a google cloud virtual machine. This will be turned off in January 2024 after the subscription expires and the domain name will be dropped in late 2024 after the yearly subscription is over.

For running the project as it is now, you will need to utilize a mongodb database. You can do this by installing mongodb, running a mongoshell and running mongod. From here, running the prodApp.js will start the application. This will not work however as the google authentication requires the URI of our domain in order to properly move you to further stages of the application.

You can visit this application in the production environment and add new students/appointments via the link below:

https://toolboxtutor.org/

On this page, you can navigate the app by logging in, and using the navbar to the four main pages, home_page, appointments, students, and profile.

The point of this application was designed to test our knowledge and understanding of utilizing new features such as google authentication, github with branches across all members of the group, a virtual machine to host the production version of the application, and building a domain to make the site look as official as possible. 

On the back end, we perform the following:

- Data validation/verification cleaning anything that could be malicious
- Proper file structures for routers, controllers, and schemas.
- EJS HTML files for data passing to the front end
- Sessions so that logging in will keep you logged in as long as you have cookies enabled. 

Thank you for viewing our project!