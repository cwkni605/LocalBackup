const http = require('http');
const fs = require('fs');
const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
var workSpace = require('./updateWorkSpace.js');
const hostname = '127.0.0.1';
const port = 8000;
app.use(fileUpload());
/*
setInterval(() => {
    workSpace.updateWorkSpace();
}, 2000);
*/


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
    if (err) return res.status(500).send(err);
    fs.readFile("uploadPage.html", "utf-8",(err, data)=>{
      res.send(data);
    });
  });
});

app.get(/[\s\S]*/, function(req, res) {
  let router = req.url;
  if (router.startsWith("/download")) {
    const file = "../work"+router.substring(9);
  res.download(file);
  }
  else {
    fs.readFile("index.html", "utf-8",(err, data)=>{
      let tempList = "";
      fs.readdir("../work/"+router,(err, files)=>{
        if(err) throw err;
        let template = ``;
        if(router != "/") tempList = `<a href="${router.substring(0, router.substring(0, router.lastIndexOf("/")).lastIndexOf("/")+1)}" class="list-group-item">^ Up One Directory ^</a>`;
        else tempList = `<a class="list-group-item">Root Work Folder</a>`;
        for (let i = 0; i < files.length; i++) {
          if(files[i].indexOf(".") > 0){
            template = `<a href="/download/${(router+files[i]).substring(1)}" class="list-group-item">^-^</a>`;
          }
          else {
            template = `<a href="${router+files[i]+"/"}" class="list-group-item">^-^</a>`;
          }
          tempList += template.replace("^-^",files[i])+"\n";
        }
        data = data.replace("%&^&%", tempList);
        res.send(data);
      });
    });
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});