const http = require('http');
const fs = require('fs');
const formidable = require('formidable');
const express = require('express');
const app = express();
var workSpace = require('./updateWorkSpace.js');
const hostname = '127.0.0.1';
const port = 8000;

setInterval(() => {
    workSpace.updateWorkSpace();
}, 2000);

http.createServer((req, res) => {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      //console.log(files.multipleFiles.path);
      console.log(files);
      //console.log(files.filetoupload);
      //console.log(files.filetoupload.path);
      var oldpath = files.multipleFiles.path;
      var newpath = 'C:/Users/cknight167/Desktop' + files.multipleFiles.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.end('File uploaded and moved!');
      });
    });
    return;
  }

  if (req.url === '/download') {
    fs.readFile('index.html', function (err,data) {
      if(err) throw err;
     res.setHeader('Content-disposition', 'attachment; filename=working.txt');
      res.end(data);
      app.get('/download', function(req, res){
        const file = `../work/new/tester.txt`;
        res.download(file); // Set disposition and send it.
      });
    });
    return;
  }

  // show a file upload form
  res.writeHead(200, { 'content-type': 'text/html' });
  res.end(`
    <h2>With Node.js <code>"http"</code> module</h2>
    <form action="/fileupload" enctype="multipart/form-data" method="post">
      <div>Text field title: <input type="text" name="title" /></div>
      <div>File: <input type="file" name="multipleFiles" multiple="multiple" /></div>
      <input type="submit" value="Upload" />
    </form>
  `);
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
