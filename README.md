# ChatSystem

https://github.com/goldcakes/chatSystem.git  
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.1.

## Git

The git repository contains the Chat System project. The Angular project was generated through the CLI with the "ng new chatSystem" command. And the NodeJS server was generated in the server folder with "npm init" and "npm install express --save" commands. The "git add *" command was used to stage changes during development on my local repository and "git commit -m <message>" to control version history during the development of the project. The "git push" and "git pull" commands were used to push and pull the projects between the local and remote repositories.

## Data Structures

There are three data structures for this project. There are Users, Groups and Channels. These structures are stored in the server of the project using mongoDB.  
**Users** are an array of users. Each user has a username, email, id, and role. {username: string, userid: number, email: string, role: string}  
**Groups** are an array of groups. Each group has a group name, id and list of user ids. {groupname: string, groupid: number, users: [number]}  
**Channels** are an array of channels. Each channel has a channel name, id, list of group ids and list of user ids. {channelname: string, channelid: number, groupid: number, users: [number]}

## REST API

### Auth Route
  
**Description** This route checks if the user exists in the list of existing users. If they exist it logs them in, otherwise it will display an error.  
**Route** /api/auth  
**Method** POST  
**Parameters** username: string  
**Reture Value** {valid: true, user: {id: number, username: string, email: string, role: string}} or {valid: false, error: {}}  

### Add User

**Description** This route is used to create a new user if the entered username is available.  
**Route** /addUser  
**Method** POST  
**Parameters** username: string, email: string, role: string  
**Reture Value** returns users if username doesn't exist or error if username exists.  

### Delete User

**Description** This route is used to delete a user.  
**Route** /user/:userId  
**Method** DELETE  
**Parameters** userId: number  
**Reture Value** returns user to the list of users.  

### Get Users

**Description** This route is used to return a list of users.  
**Route** /getUsers  
**Method** POST  
**Parameters** by: string, groupId: number, channelId: number  
**Reture Value** users  

### Add Group

**Description** This route creates a new group.  
**Route** /addGroup  
**Method** POST  
**Parameters** name: string  
**Reture Value** groupId: number.  

### Delete Group

**Description** This route is used to delete a group.  
**Route** /group/:groupId  
**Method** DELETE  
**Parameters** groupId: number  
**Reture Value** returns groupId: number, channels: [number].  

### Add Group User

**Description** This route is used to add users to a group.  
**Route** /group/addUser  
**Method** POST  
**Parameters** userId: number, groupId: number  
**Reture Value**   

### Remove Group User

**Description** This route is used to remove a user from a group.  
**Route** /group/removeUser  
**Method** POST  
**Parameters** userId: number, groupId: number  
**Reture Value** returns user to the list of users in group.  

### Get Groups

**Description** This route retrieves list of groups.  
**Route** /getGroups  
**Method** POST  
**Parameters** by: string, userId: number  
**Reture Value** groups  

### Add Channel

**Description** This route is used to create a new channel in a group.  
**Route** /channel/create  
**Method** POST  
**Parameters** name: string, groupId: number  
**Reture Value** channelId, groupId.  

### Delete Channel

**Description** This route is used to delete a channel.  
**Route** /channel/:channelId  
**Method** DELETE  
**Parameters** channelId: number  
**Reture Value** returns user to the list of channels in group.  

### Add Channel User

**Description** Adds user to list of channel members.  
**Route** /channel/addUser  
**Method** POST  
**Parameters** userId: number, groupId: number, channelId: number  
**Reture Value**   

### Remove Channel User

**Description** This route removes a user from a channel.  
**Route** /channel/removeUser  
**Method** POST  
**Parameters** userId: number, channelId: number  
**Reture Value**   

### Get Channels

**Description** This route retrieves the list of channels.  
**Route** /getChannels  
**Method** POST  
**Parameters** by: string, userId: number  
**Reture Value** channels  

## Angular Architecture

### Components

#### Login

The login component is for the page where a user enters their username to login to their account. On submit it makes a http post request to api/auth with the username as a parameter. If it returns valid as true, it will store that username's account details into session storage.

#### Logout

The logout component is used to clear session storage and redirect the user to the home page when they choose to logout.

#### Chat

The chat component is for the page where people can access the chat groups and channels. It consists of a menu with a list of groups if the user's userid is in any group's users list. 

#### UserManagement

The user management component is for adding and deleting user accounts for the admin level accounts.

### Services

#### Socket Service

**initSocket()** This method initialises socket.  
**send()** This method emits the message.  
**onMessage()** This method listens for messages. When it detects a message in calls the next function to update the chat history.  
