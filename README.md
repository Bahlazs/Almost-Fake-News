
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
of choice. I recommend to open the afnBackend and the afnFrontend folders separately. 

### Backend

Open the afnBackend folder in your IDE. The code editor should recognize the pom.xml and configure the running configurations.
After starting the sever it should automatically connect to the data base.
 
#### dependencies
- Java 17
- Maven

### Frontend

Open the afnFrontend folder in your IDE. If you are using windows it's possible that nvm is not installed on your computer, 
so you should install it first. <br>

If you are not familiar how to do this follow the guide in the following link:

[Link to mvn installation guide](https://www.freecodecamp.org/news/nvm-for-windows-how-to-download-and-install-node-version-manager-in-windows-10/)

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

