# PWA-Push

BUILD YOUR SINGLE PAGE REACT.JS PROGRESSIVE WEB APP USING CREATE-REACT-APP

1.	Install Node.js - https://nodejs.org/en/download/

2.  Install a code editor - We recommend Visual Studio Code which is a great free tool for Node.js projects - https://code.visualstudio.com/ . 
VS Code has an inbuilt powershell where you can execute your cmd commands.

3.	Create a new working folder (can open it up in VS Code if you'd like to edit/run/debug)

----
Follow steps 4-6 only if you want to generate your own React.JS app.  You can skip these if you directly sync the code from the repository in the PWA folder.  
----
4.	Install Create-React-App with Node Package Manager (npm) from cmd
      
        npm install -g create-react-app
        
5.	Restart cmd and run create-react-app to generate the web page scaffolding in your working folder under a specified project-subfolder
      
        create-react-app {project-subfolder}
                
6.  The output generated web app will automatically be a progressive web app project with public/manifest.json and src/registerServiceWorker.js; however it will only run in production mode when you execute - npm run build - from command line. However our code (taken from this repository) will add a custom service worker that will work in dev mode too, when you start the web page through - npm run start.
----

7.  From cmd, run npm install from the project folder to install dependencies.  This will create a sub folder called node_modules and populate it.  This step might take a few minutes, see it through.

        npm install 

8.  From cmd, run npm run start.  This will create a server at http://localhost.com:3000 and automatically open up a browser window with that address.

        npm run start

Enjoy! - The Assembly Team
