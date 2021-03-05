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

exports.backupWorkSpace = function backupWorkSpace() {
  fse.copySync(srcDir, destDir+Date.now(),{ overwrite: true }, (err) => {
      if (err) {                 
        console.error(err);
      } else {
        console.log("success!");
      }
    });
};

//updateWorkSpace();
//                                                            /\         
                                                             //\\        
                                                            //  \\       
//exports.readWorkSpace = function readWorkSpace() {       //CODE\\      };
                                                          //      \\     
                                                         //        \\    
                                                       ///          \\\  
                                                      ///     /\     \\\ 
                                                     /////  ///\\\  \\\\\
//                                                   \\\\\  \\\///  /////
//                                                    \\\     \/     /// 
//                                                     \\\          ///  
//                                                       \\        //    
//                                                        \\      //     
//                                                         \\CODE//      
//                                                          \\  //       
//                                                           \\//        
//                                                            \/         
/*
setInterval(() => {
    fse.copySync(srcDir, destDir,{ overwrite: true }, (err) => {
        if (err) {                 
          console.error(err);
        } else {
          console.log("success!");
        }
      });
      fse.copySync(destDir, srcDir,{ overwrite: true }, (err) => {
        if (err) {                 
          console.error(err);
        } else {
          console.log("success!");
        }
      });
}, 1000);
*/