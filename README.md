# Notes-App-API

This is a simple REST API for a notes app. It allows users to create, edit, delete, and fetch notes. The API is built using Node.js and the Express framework, and it uses a MongoDB database to store the notes. This API can be run locally or packaged inside a Docker container for easy deployment in any environment that supports Docker.

## Getting started

To run the API locally, you'll need to have Node.js and MongoDB installed on your machine. You can download Node.js from the official website (https://nodejs.org/) and install MongoDB following the instructions here (https://docs.mongodb.com/manual/installation/).

Once you have Node.js and MongoDB installed, you can clone this repository and install the dependencies by running:

``` npm install ```~creates package-lock.json and node modules
<br><br>
Next, you'll need to set up a local MongoDB instance. You can do this by running:<br><br>
``` mongod ```


Finally, you can start the API by running:

``` npm start ``` ~The API will be available at http://localhost:5000.

## Endpoints
### 1) GET /notes

+ Retrieves a list of all notes.

Example response:
```
[    
    {        
        "_id": "615705a47c0fcfa08d7cb5af", 
        "title": "Note 1",
        "body": "This is the first note",
        "createdAt": "2021-10-01T17:23:40.670Z", 
        "updatedAt": "2021-10-01T17:23:40.670Z",
        "__v": 0    
     },  
     
     {
         "_id": "615705af7c0fcfa08d7cb5b0",
         "title": "Note 2",
         "body": "This is the second note",
         "createdAt": "2021-10-01T17:23:51.385Z",
         "updatedAt": "2021-10-01T17:23:51.385Z",
         "__v": 0    
      }
]
```
### 2) GET /notes/:id
+ Retrieves a single note by ID.

Example response:
```
{
    "_id": "615705a47c0fcfa08d7cb5af",
    "title": "Note 1",
    "body": "This is the first note",
    "createdAt": "2021-10-01T17:23:40.670Z",
    "updatedAt": "2021-10-01T17:23:40.670Z",
    "__v": 0
}
```

### 3) POST /notes

+ Creates a new note.

Example request body:

```
{
    "title": "Note 3",
    "body": "This is the third note"
}

```

Example response:

```
{
    "success": true
}
```

### 4) PUT /notes/:id

+ Updates an existing note by ID.

Example request body:

```
{
    "title": "Note 1 updated",
    "body": "This is the updated first note"
}

```
Example response:
```
{
    "success": true
}

```

### 5) DELETE /notes/:id

+ Deletes a note by ID.

Example response:

```
{
    "success": true
}

```

## Docker
To package the API inside a Docker container, you can use the included Dockerfile. To build the Docker image, run:

```docker build -t RESTapi```<br>Creates a Docker image with the name "RESTapi".<br><br>
You can run the container with the following command:

```docker run -p 5000:5000 RESTapi```<br>
This command maps port 5000 in the container to port 5000 on the host machine. You should now be able to access the API by visiting http://localhost:5000 in your web browser.

## Docker Compose
To make it easier to manage multiple containers, you can use Docker Compose. Docker Compose is a tool for defining and running multi-container Docker applications.<br>

Here's an example docker-compose.yml file that defines a container for the API and a container for a MongoDB database:

```
version: '3.8'
services:
  RESTapi:
    build: .
    ports:
      - "5000:5000"
    depends_on:
      - database
    environment:
      - MONGODB_URI=mongodb://database:27017/notes
  database:
    image: mongo:latest
    ports:
      - "27017:27017"
```
This docker-compose.yml file defines two services: notes-api and database. The notes-api service is built from the Dockerfile in the current directory (.), and exposes port 5000. It depends on the database service and sets an environment variable MONGODB_URI to connect to the MongoDB database.

The database service uses the latest MongoDB image and exposes port 27017.

To start the application with Docker Compose, run the following command:
```
docker-compose build
docker-compose up -d
```
This command will start both containers and you should be able to access the API by visiting http://localhost:5000 in your web browser.<br>

You can also access the MongoDB shell of the running container by executing the following command:
```
docker exec -it <container-id> mongosh -u <username> -p <password>
```
Replace <container-id> with the ID or name of your running MongoDB container, <username> with the username and <password> with the password for the MongoDB user you want to authenticate as. Once you run this command, you should be connected to the MongoDB shell and able to run queries against your database.

## API Documentation
The API exposes the following endpoints:

+ GET /notes - returns a list of all notes with their title, body, creation and update dates.
+ GET /notes/:id - returns a single note with the specified ID.
+ POST /notes - creates a new note with the specified title and body.
+ PUT /notes/:id - updates the note with the specified ID with the provided title and body.
+ DELETE /notes/:id - deletes the note with the specified ID.<br>
All endpoints return JSON data.
## Conclusion

In this project, we have created a simple notes app with a REST API and packaged it using Docker. We have used Node.js and MongoDB to implement basic CRUD functionality for the notes, and used Docker to make it easy to deploy the application in any environment that supports Docker.



