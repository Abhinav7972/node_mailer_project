# node_mailer_project
these is simple nodemailer project that send mail based on http post request body with node js

steps to use : 
(1) clone project
(2) create pass.env file in it 
(3) add your email id and app password in it genrate it from google+>security=>app password
(4) start server by entering node index.js in terminal 
(5) copy server url and give JSON post request using  postman or thunderclient 

(6) JSON post request  format :
{
  "from": "your name",
  "to": "reciver email id",
  "message": "message"
}
