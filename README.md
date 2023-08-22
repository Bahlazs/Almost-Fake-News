
# Almost Fake News

## Table of contents
- [About](#about)
- [Technologies](#technologies)
- [Features](#features)
- [Setup guide](#setup-guide)
  - [Backend](#backend) 
  - [Frontend](#frontend)
  - [Database](#database-connection-info)
 

## About
In its current state this is a one page web application with the focus on responsive web design 
with minimal functionality in the form of an online news site. 
While i worked on it this project grew to me so i plan to expand it in the future and turn it into a proper fake news site 


## Technologies

- React
- Css
- Java
- Spring
- Vite
- Postgresql

## Features
- fully responsive
- online data base
- funny fake news

## Setup guide

First clone the project from my Github repository. After you cloned the project open the project folders with your IDE 
of choice or if you dont have one open it in terminal. I recommend to open the afnBackend and the afnFrontend folders separately. 

### Backend

If you dnt have maven and OpenJDK on your computer first install OpenJDK after that you should install maven.
If you ar not familiar with the process how to do this follow these guides:

[OpedJDK install guide](https://openjdk.org/install/) <br>
[Maven install guide](https://www.javatpoint.com/how-to-install-maven)


After that open the afnBackend folder. If your IDE didn't configure the project or you opened the project in a terminal (cmd or powershell on windows) run the following command:

This will compile your code and start your server
```angular2html
mvn spring-boot:run
```


After starting the sever it should automatically connect to the data base.
#### dependencies
- OpenJDK 17
- Maven

### Frontend

Open the afnFrontend folder in your IDE. If you are using windows it's possible that nvm is not installed on your computer, 
so you should install it first. <br>

If you are not familiar how to do this follow the guide in the following link:

[Link to node version manager installation guide](https://www.freecodecamp.org/news/nvm-for-windows-how-to-download-and-install-node-version-manager-in-windows-10/)

After that open a terminal in your IDE and run the command bellow.

```angular2html
npm install
```
This will install all the dependencies that you need to run the program.
After that run the code bellow to start the React development server. 

```angular2html
npm run dev
```
You can check out the site on the link bellow:

http://localhost:5173/

If you run into any problems contact me on nick.balazs18@gmial.com

#### dependencies
- nvm 
- npm 

### Database connection info
host: db.kydyvpgalddbpmmxxclr.supabase.co <br>
user: postgres <br>
database: postgres <br>
pw: Test_Pw-0218

### Future Plans
- User role
- Admin role
- News types
- News relevance system

