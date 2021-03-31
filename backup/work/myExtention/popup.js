/*document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      d = document;

      var f = d.createElement('form');
      f.action = 'http://gtmetrix.com/analyze.html?bm';
      f.method = 'post';
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'url';
      i.value = tab.url;
      f.appendChild(i);
      d.body.appendChild(f);
      f.submit();
    });
  }, false);
}, false);
*/
/*
var player = document.getElementById('player');
var handleSuccess = function(stream) {
        player.srcObject = stream;
};
navigator.mediaDevices.getUserMedia({ audio: true, video: true })
.then(handleSuccess);
*/

document.getElementById('start').addEventListener('click', ()=>{
  starto();
});

function starto(){
  chrome.tabs.getSelected(null, function(tab) {
    let shouldStop = false;
    let stopped = false;
    const downloadLink = document.getElementById('download');
    const stopButton = document.getElementById('stop');

    stopButton.addEventListener('click', function() {
      shouldStop = true;
    });
    function clickering() {
        shouldStop = true;
    }

    var handleSuccess = function(stream) {
      console.log("fragment start");
      const options = {mimeType: 'video/webm'};
      const recordedChunks = [];
      const mediaRecorder = new MediaRecorder(stream, options);

      mediaRecorder.addEventListener('dataavailable', function(e) {
          console.log("fragment Dta Avail");
        if (e.data.size > 0) {
          recordedChunks.push(e.data);
        }
        
        if(shouldStop === true && stopped === false) {
          mediaRecorder.stop();
          stopped = true;
        }
      });
      
      mediaRecorder.addEventListener('stop', function() {
          console.log("fragment stop");
        downloadLink.href = URL.createObjectURL(new Blob(recordedChunks));
        downloadLink.download = 'acetest.webm';
      });

      mediaRecorder.start();
      setInterval(()=>{
          if(shouldStop == true && stopped === false) {
              mediaRecorder.stop();
              stopped = true;
          }
      },100);
      
    };

    navigator.mediaDevices.getUserMedia({ audio: true, video: true })
        .then(handleSuccess);
  });
}