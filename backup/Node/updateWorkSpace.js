const fs = require("fs");
const fse = require('fs-extra');
var srcDir = "../work/";
var destDir = "g:/My Drive/backupDrive/";

function backupWorkSpace() {
  fse.copySync(srcDir, destDir+Date.now(),{ overwrite: true }, (err) => {
      if (err) {                 
        console.error(err);
      } else {
        console.log("success!");
      }
    });
};

function updateWorkSpace() {
  fs.readdir(destDir, (err, files)=>{
    let newestFolder = 1;
    if(err)throw err;
    files.sort((a,b)=>
    {
      if(b > a)
      {
          return 1;
      }
      else
      {
          return -1;
      }
    });
    newestFolder = files[0];
    fse.copySync(destDir+newestFolder, srcDir,{ overwrite: true }, (err) => {
      if (err) {                 
        console.error(err);
      } else {
        console.log("success!");
      }
    });
  });
};

exports.backupWorkSpace = function backupWorkSpace() {
  fse.copySync(srcDir, destDir+Date.now(),{ overwrite: true }, (err) => {
      if (err) {                 
        console.error(err);
      } else {
        console.log("success!");
      }
    });
};

exports.updateWorkSpace = function updateWorkSpace() {
  fs.readdir(destDir, (err, files)=>{
    let newestFolder = 1;
    if(err)throw err;
    files.sort((a,b)=>
    {
      if(b > a)
      {
          return 1;
      }
      else
      {
          return -1;
      }
    });
    newestFolder = files[0];
    fse.copySync(destDir+newestFolder, srcDir,{ overwrite: true }, (err) => {
      if (err) {                 
        console.error(err);
      } else {
        console.log("success!");
      }
    });
  });
};

//updateWorkSpace();
//                                                            /\         
//                                                           //\\        
//                                                          //  \\       
//exports.coolSymbolImg = function coolSymbolImg() {       //CODE\\      };
//                                                        //      \\     
//                                                       //        \\    
//                                                     ///          \\\  
//                                                    ///     /\     \\\ 
//                                                   /////  ///\\\  \\\\\
//                                                   \\\\\  \\\///  /////
//                                                    \\\     \/     /// 
//                                                     \\\          ///  
//                                                       \\        //    
//                                                        \\      //     
//                                                         \\CODE//      
//                                                          \\  //       
//                                                           \\//        
//                                                            \/         