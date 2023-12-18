# Studia App

This is a simple web application that serves as an API endpoint and communicates with a Python script to fetch medication information from a MySQL database.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/ThetaMTX/app-studia.git
   ```
## Install dependencies:
```
npm install
```
## Start the server:
```
npm start
```
# Usage
## API Endpoint
```
/api: This endpoint returns a simple JSON response to indicate that it is the API endpoint.

/api/medication: This endpoint communicates with the included Python script (script.py). It takes a JSON payload with a medication property and fetches the corresponding medication description from the MySQL database.
```
## Example:
```
{
  "medication": "Apap"
}
```

# Project Structure
## server.js: The Node.js server file that defines the API endpoints and communicates with the Python script.
## script.py: The Python script that connects to the MySQL database to fetch medication information.

# Dependencies
```
Express: Web framework for Node.js
Body-parser: Middleware to handle JSON data
MySQL Connector: Python library for connecting to MySQL
```

# License
This project is licensed under the MIT License.
