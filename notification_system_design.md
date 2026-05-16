Notification System Design:
This project implements a centralized logging middleware and backend notification system.
//Architecture
-Client Layer
-Backend API layer
-Logging Middleware
-External Logging Server
//Workflow
1.Client sends request
2.Backend receives request
3.Middlware logs activity
4.Log sent to evaluation server
5.Response returned to client
//Components
-Express Server
-Axios HTTP Client
-Dotenv Configuration
-Logger Middleware