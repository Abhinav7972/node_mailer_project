# Node.js Mailer API

A simple Node.js backend project that sends emails using Nodemailer based on data received through an HTTP POST request.

## Features

* Send emails dynamically using JSON payloads
* Custom sender name
* Custom recipient email
* Custom message content
* Environment variable support using dotenv
* Event-driven email notification using EventEmitter

## Installation

1. Clone the repository

```bash
git clone <repository-url>
cd <project-folder>
```

2. Install dependencies

```bash
npm install
```

3. Create a `pass.env` file in the project root

```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_google_app_password
```

4. Generate a Google App Password

* Open your Google Account
* Go to Security
* Enable 2-Step Verification
* Open App Passwords
* Generate an App Password
* Copy the generated password into `pass.env`

## Run the Server

```bash
node index.js
```

The server starts on:

```text
http://localhost:5000
```

## Example POST Request

Send a POST request using Postman or Thunder Client.

### Request Body

```json
{
  "from": "Abhinav",
  "to": "receiver@example.com",
  "message": "Hello from Node.js"
}
```

### Example Response

```text
data sent
```

## Technologies Used

* Node.js
* Nodemailer
* EventEmitter
* dotenv
* HTTP Module
* File System (fs)

```
```
