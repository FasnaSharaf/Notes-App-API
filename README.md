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

```docker build -t notes-api```<br>Creates a Docker image with the name "notes-api".<br><br>
You can run the container with the following command:

```docker run -p 5000:5000 notes-api```<br>
This command maps port 5000 in the container to port 5000 on the host machine. You should now be able to access the API by visiting http://localhost:5000 in your web browser.




