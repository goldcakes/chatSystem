# ChatSystem

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.1.

## Git

The git repository contains the Chat System project. The Angular project was generated through the CLI with the "ng new chatSystem" command. And the NodeJS server was generated in the server folder with "npm init" and "npm install express --save" commands. The "git add *" command was used to stage changes during development on my local repository and "git commit -m <message>" to control version history during the development of the project. The "git push" and "git pull" commands were used to push and pull the projects between the local and remote repositories.

## Data Structures

There are three data structures for this project. There are Users, Groups and Channels. These structures are stored in the server of the project udner chatSystem\server\data as JSON files.  
Users are an array of users. Each user has a username, email, id, and role.  
Groups are an array of groups. Each group has a group name and id.  
Channels are an array of channels. Each channel has a channel name and id.

## REST API

### Auth Route
  
**Description** This route checks if the user exists in the list of existing users. If they exist it logs them in, otherwise it will display an error.  
**Route** /api/auth  
**Method** POST  
**Parameters** username: string  
**Reture Value** {valid: true, user: {id: number, username: string, email: string, role: string}} or {valid: false, error: {}}  

### Create User

**Description** This route is used to create a new user if the entered username is available.  
**Route** /api/createUser  
**Method** POST  
**Parameters** username: string, email: string, role: string  
**Reture Value** returns users if username doesn't exist or error if username exists.  

## Angular Architecture

### Components

#### Login

#### Chat