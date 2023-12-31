# Studia App

This is a simple web application that serves as an API endpoint and communicates with a Python script to fetch medication information from a SQL database (freesqldatabase).

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/ThetaMTX/app-studia.git
   ```
## Install dependencies:
```
npm install
```
## Install python packages:
```
pip install mysql-connector-python
```
```
pip install request
```
## Start the server:
```
npm start
```
# Usage
## API Endpoint

/api: This endpoint returns a simple JSON response to indicate that it is the API endpoint.

/api/medication: This endpoint communicates with the included Python script (script.py). It takes a JSON payload with a medication property and fetches the corresponding medication description from the SQL database.

## Example:
### Input
```
{
  "medication": "Apap"
}
```
### Output
```
{
    "result": "APAP (acetaminophen) is a common pain reliever and fever reducer that centrally inhibits the enzyme cyclooxygenase. Excessive use can cause severe liver damage, especially in individuals with liver conditions or regular alcohol consumption.\r\n"
}
```

# Project Structure
server.js: The Node.js server file that defines the API endpoints and communicates with the Python script.

script.py: The Python script that connects to the MySQL database to fetch medication information.

# Dependencies
```
Express: Web framework for Node.js
Body-parser: Middleware to handle JSON data
MySQL Connector: Python library for connecting to MySQL
```

# License
This project is licensed under the [Licencji MIT](LICENSE).
