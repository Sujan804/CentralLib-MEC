# CentralLib-MEC
Central Library
<h1> Project Starting Date: 30 Oct, 2022</h1>

# MECLIB 




## Tech Stack

**Client:** React.js, context-Api, TailwindCSS

**Server:** Node, Express,  Mongoose

**Database:** MongoDB


## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sujanexpress)




## Author

- [@Sujan804](https://github.com/Sujan804)


## 🚀 About Me
I'm a full stack developer


## Installation

## Common setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/contentful/the-example-app.nodejs.git
cd the-example-app.nodejs
```

```bash
npm install
```

## Steps for read-only access

To start the express server, run the following

```bash
npm run start:dev
```

Open [http://localhost:3000](http://localhost:3000) and take a look around.


## Steps for read and write access (recommended)

Step 1: Install the [Contentful CLI](https://www.npmjs.com/package/contentful-cli)

Step 2: Login to Contentful through the CLI. It will help you to create a [free account](https://www.contentful.com/sign-up/) if you don't have one already.
```
contentful login
```
Step 3: Create a new space
```
contentful space create --name 'My space for the example app'
```
Step 4: [Seed](https://github.com/contentful/contentful-cli/tree/master/docs/space/seed) the new space with the example content model [`the-example-app`](https://github.com/contentful/content-models/tree/master/the-example-app). Replace the `SPACE_ID` with the id returned from the create command executed in step 3
```
contentful space seed -s '<SPACE_ID>' -t the-example-app
```
Step 5: Head to the Contentful web app's API section and grab `SPACE_ID`, `DELIVERY_ACCESS_TOKEN`, `PREVIEW_ACCESS_TOKEN`.

Step 6: Open `variables.env` and inject your credentials so it looks like this

```
NODE_ENV=development
CONTENTFUL_SPACE_ID=<SPACE_ID>
CONTENTFUL_DELIVERY_TOKEN=<DELIVERY_ACCESS_TOKEN>
CONTENTFUL_PREVIEW_TOKEN=<PREVIEW_ACCESS_TOKEN>
PORT=3000
```

Step 7: To start the express server, run the following
```bash
npm run start:dev
```
Final Step:

Open [http://localhost:3000?editorial_features=enabled](http://localhost:3000?editorial_features=enabled) and take a look around. This URL flag adds an “Edit” button in the app on every editable piece of content which will take you back to Contentful web app where you can make changes. It also adds “Draft” and “Pending Changes” status indicators to all content if relevant.
