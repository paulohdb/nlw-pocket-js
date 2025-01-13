# Goals Manager (In.Orbit) + REST API

This is a goals manager project using React and NodeJs, it is a middle project, using good frameworks and technologies to improve my learning of development.

## Technologies for Backend
- REST API
- CTE (Common Table Express)
- NodeJs
- TypeScript
- Fastify
- DrizzleORM
- PostgresSQL
- Docker
- Zod

## Technologies for Frontend
- Properties
- States and Components
- Consumption of NodeJs API
- Asynchronous Data Management
- ReactJS
- Vite
- TypeScript
- TailwindCss
- TanStack Query.

## Usage of API (Backend)

The API has 4 rules for this application.

### Functionalities:

- The User can create a new goal
- The user can visualize the week summary of his goals
- The user can visualize the week summary of his pending goals
- The user can register when it did the goal

## Requests

There will be some examples of request we can made.

### POST/goals

This POST method, will send a body with the title of the goal and the desired Weekly Frequency in days.

```json
{
    "title": "Sleep early",
    "desiredWeeklyFrequency": 5
}
```
When it's created, it genereates a new Id and the completion Counter.

### GET/pending-goals

This GET method, will return a object including the pending goals with an array of objects (The goals itself), including the Id, Title, Frequency and Counter.

```json
{
    "pendingGoals": [
        {
            "id": "p2oscdcdx3dpv1iknu4ge7bg",
            "title": "Go to the Gym",
            "desiredWeeklyFrequency": 4,
            "completionCount": 4
        }
    ]
}
```

## Usage of Interface (Frontend)

The first interface it will appear is to register your first Goal of the week:

<img alt="image" src="https://github.com/user-attachments/assets/1486e0c4-e7eb-4401-a2d7-c09f8a770a4c">

When clicked, it will open a sidebar to register your new Goal of the week:

<img alt="image" src="https://github.com/user-attachments/assets/be05e295-a710-4466-bf23-4fe57bb9260a">

After created, it will appear the main interface showing your goals registered:

<img alt="image" src="https://github.com/user-attachments/assets/6525c770-a76f-4048-9e49-bfc0e3cf63b5">

Then, to keep your progress registered, just click the button where your goal is showing, and your progress will be registered: 

<img alt="image" src="https://github.com/user-attachments/assets/9fa36c02-7f22-4857-bcea-0a61e78e164f">

Then, The bar will be completed when you reach your desired weekly frequency:

<img alt="image" src="https://github.com/user-attachments/assets/cfcba21d-15d0-4824-bb5b-35bfad50ddd9">

## How to download the application

Use the command git clone with the link of my project, then open 2 seperate windows (The web part and the server part). First command to run is the install of node package manager:

```properties
npm install
```
The web app is ready to load using the "dev" script.

```properties
npm run dev
```
The Server app will need more attention, with docker installed in your computer, you will need to run the command to start the docker:

```properties
docker compose up -d
```
Then, you will need to update the migration of the database using the drizzle-kit: 

```properties
npx drizzle-kit migrate
```
Then, you can run the load the app using the "dev" script to load the data in the web page:

```properties
npm run dev
```
