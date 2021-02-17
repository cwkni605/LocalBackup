const http = require('http');
const fs = require('fs');
const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
var workSpace = require('./updateWorkSpace.js');
const hostname = '127.0.0.1';
const port = 8000;
/*
setInterval(() => {
    workSpace.updateWorkSpace();
}, 2000);
*/
app.use(fileUpload());

app.post('/upload', function(req, res) {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = req.files.sampleFile;
  uploadPath = '../work/' + sampleFile.name;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function(err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
  });
});

app.get('/', function(req, res) {
    res.send(`<html>
    <body>
      <form ref='uploadForm' id='uploadForm' action='http://${hostname}:${port}/upload' method='post' encType="multipart/form-data">
          <input type="file" name="sampleFile" />
          <input type='submit' value='Upload!' />
      </form>     
    </body>
  </html>`);
});
app.get('/download', function(req, res){
  //const file = `../work/new/tester.txt`;
  const file = "../work/new/tester.txt";
  res.download(file); // Set disposition and send it.
  fs.readFile('index.html', function (err,data) {
    res.write(data);
   });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});