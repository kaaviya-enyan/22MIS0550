Project Name: Notification Logging Middleware System

Overview: It is a backend-based notificatio and centralized logging system which is developed using Node.js and Express.js. The application records API activites and sends logs to a remote logging server using a reusable custom middleware.

Features:
-Custom logging middlware
-Centralized log management
-Express.js backend APIs
-External API integration using Axios
-Error handling support

Technologies used:
-Node.js
-Express.js
-Axios
-Dotenv
-Nodemon
-Git & GitHub
-Postman

Installation Steps:
1.Clone repository: git clone https://github.com/kaaviya-enyan/22MIS0550.git

2.Install dependencies: 
//logging middleware
cd logging-middleware
npm install
//backend server
cd ..
cd notification_app_be
npm install
//environment variables
create a .env file inside logging-middleware
inside .env file, TOKEN=YOUR_ACCESS_TOKEN
//running project
npm run dev
//server runs on
http://localhost:5000
//API endpoints
//HOME Route
GET / 
//Response
//json
{
    "success": true,
    "messaage":"Backend working successfully"
}
//logging workflow
1.clients sends request
2.Express server handles request
3.Custom logger middleware is triggered
4.Log data is sent to external logging server
5.Response returned to client