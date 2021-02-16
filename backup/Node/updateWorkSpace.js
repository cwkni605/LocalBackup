const fse = require('fs-extra');
var srcDir = "../work/";
var destDir = "g:/My Drive/backupDrive";

function updateWorkSpace() {
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
}

exports.updateWorkSpace = function updateWorkSpace() {
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
};

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