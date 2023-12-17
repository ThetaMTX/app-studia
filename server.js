const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());

app.get('/api', (req, res) => {
  res.json({
    message: 'This is the api endpoint'
  });
});

// New endpoint to communicate with Python script
app.post('/api/medication', (req, res) => {
  console.log(req.body)
  let jsonFile = req.body

  console.log(jsonFile.medication)
  

  const pythonProcess = spawn('python', ['script.py', jsonFile.medication]);

  let result = '';  // Variable to store the result from the Python script
  let error = '';   // Variable to store errors from the Python script

  pythonProcess.stdout.on('data', (data) => {
    // Handle data received from the Python script
    result += data.toString()
  });

  pythonProcess.stderr.on('data', (data) => {
    // Handle errors from the Python script
    error += data.toString()
    
  });

  pythonProcess.on('close', (code) => {
    // Send the response once the Python script has completed
    if (code === 0) {
      res.json({ result })
    } else {
      res.status(500).json({ error })
    }
  });
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
});
