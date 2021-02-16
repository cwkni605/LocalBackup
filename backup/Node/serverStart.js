const http = require('http');
const formidable = require('formidable');
const express = require('express');
var workSpace = require('./updateWorkSpace.js');
const hostname = '127.0.0.1';
const port = 8000;

setInterval(() => {
    workSpace.updateWorkSpace();
}, 1000);

const server = http.createServer((req, res) => {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
          var oldpath = files.filetoupload.path;
          var newpath = 'C:/Users/Your Name/' + files.filetoupload.name;
          fs.rename(oldpath, newpath, function (err) {
            if (err) throw err;
            res.write('File uploaded and moved!');
            res.end();
          });
     });
     return;
    }

  if (req.url === '/download') {
    app.get('/download', function(req, res){
        const file = `../worktest2.txt`;
        res.download(file); // Set disposition and send it.
      });      
    res.setHeader('Content-disposition', 'attachment; filename=working.txt');
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end("working");
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
});
 
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
