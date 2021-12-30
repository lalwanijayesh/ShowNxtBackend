# ShowNxtBackend

ShowNxt is a video sharing social media app turning passion into opportunity, bridging the gaps in college sports recruiting. The application follows a 3-tier architecture - Frontend, Backend and Database. This repository contains the backend code and the API server for the mobile app.

## Technologies

- Node.js for server-side scripting
- GraphQL schema types and resolvers for API contract
- Acts as Apollo Server to listen to calls and respond accordingly
- Data Persistence using CRUD operations on PostgreSQL database
- Mock database and Jest setup for Unit testing of endpoints

## Architecture

- Similar to the frontend repository, the backend repository has its root in *index.js* and uses the *.env* file for any environment variables.
- It contains the following directories - *graphql (controller), model (service), dao and test.* The backend repository follows the Controller-Service-DAO pattern which implements Separation of Concerns (SoC) design principle. It can be described as below.
- **Controller** is the entry point of the API, also referred to as endpoint, which in our case is the GraphQL resolver. This is only concerned with interpreting the request parameters, arguments and wrapping up the response before returning to the caller (frontend app).
- **DAO or Data Access Object** is the layer that interacts with the database and contains the CRUD operations, i.e. SQL statements executed on a database server to store information and retrieve results. This is only concerned with the database interactions in our application.
- **Service** is the plain JavaScript object model that acts as a middle layer between the Controller and DAO. Any results from the DAO are wrapped into the model object and then sent to controller (graphql resolver) to be returned as an API response. Service layer is only concerned with application logic, any algorithm implementation and all business-related code.

The SoC approach assures that the application components are as loosely coupled as possible and any of the components can be easily replaced/swapped if needed. To further iterate on an example of a GraphQL API, let’s think of query called sports, which returns the list of all sports in ShowNxt app.

This example API call runs through the following files.

1. **graphql/Sport/*sport.resolvers.js*** (and *sport.types.js)*
2. **dao/*sport.dao.js***
3. **mode/Sport.js**

The backend code additionally contains testing setup using a mock database. This has not been utilized to its full potential but the idea behind it is to perform unit testing for each of the API endpoints by using a mock function and mock insert scripts. Take a look at the code in *test* directory to experiment further.

## How to run

- Install Node.js ([https://nodejs.org/en/](https://nodejs.org/en/)). Recommended is Version 14 LTS.
- Assuming you have already installed Node.js and Git, as part of Frontend setup, we can skip to next step. If not, refer to the steps in beginning of environment setup.
- Clone the [ShowNxtBackend](https://github.com/lalwanijayesh/ShowNxtBackend) repository from GitHub using the following command. Alternatively, you can unzip the compressed zip file containing backend source code.

```bash
git clone https://github.com/lalwanijayesh/ShowNxtBackend.git
```

- Navigate to the project directory and run **npm install** to configure the dependencies.
- Create or verify **.*env* file** in the project directory with the database connection properties as shown below. These are the same properties that you start your *psql shell* with. These key-value pairs are imported in the *index.js* file of the project which connects to the database.

```
DB_HOST=localhost
DB_PORT=5432
DB_USER=generate
DB_PASSWORD=generate
DB_NAME=shownxt
APP_PORT=3000
ENV_TYPE=DEV
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/90c9b910-b8f5-4fd8-ab95-8705c3358b5f/Untitled.png)

- Run the app using the following terminal command in the project directory.

```bash
node index.js
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e74597f9-d77f-4c8e-81a1-15b3731c7e8e/Untitled.png)

- Verify working by visiting [http://localhost:3000/](http://localhost:3000/) on your browser. It should bring up the following interface for interacting with your GraphQL API.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f7c8e90b-24fc-4031-86f2-3b7d857ec6e3/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f963535b-2208-4383-88e4-0238a71c35de/Untitled.png)

- Run all the SQL scripts present in *ShowNxt_DB.sql* file to create all the required database tables. Also execute the *test_data.sql* file to insert the dummy data into those tables.
- You are now all set to explore and iterate on the ShowNxt app, backend and the database.
