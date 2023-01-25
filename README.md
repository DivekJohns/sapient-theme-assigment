Git url : https://github.com/DivekJohns/sapient-theme-assigment
App URL : https://theme-chaging-app.onrender.com/
Default user: divek@email.com

API Endpoints

1. Will create a new user

POST https://theme-chaging-app.onrender.com/api/v1/primary-color
 {
    "email": "some@email.com"
 }

2. Will update a theme

PUT https://theme-chaging-app.onrender.com/api/v1/primary-color/some@email.com
  {
    "primaryTheme": "#00ea8d"
   }

3. Will read user and theme

GET https://theme-chaging-app.onrender.com/api/v1/primary-color/some@email.com


All Api returns user and theme detail
{
    "id": 1,
    "email": "divek@email.com",
    "primaryTheme": "#00ea8d"
}

Tech stack

React
Typescript
Nodejs
Express
Prsima
RestAPI
SqliteDB








