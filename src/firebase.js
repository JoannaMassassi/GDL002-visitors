let visitorName = document.querySelector("#visitor");
let visitingCo = document.querySelector("#selectCoworker");

const btnRegister = document.querySelector("#register");



function registerVisitant () {
  if (visitorName.value.length < 5 || visitingCo.value === "" ) {
    alert ("Datos incorrectos" );
  
  } else {
    db.collection("visitors").add({
      name: visitorName.value,
      visiting: visitingCo.value,
      hour: firebase.firestore.FieldValue.serverTimestamp(),
      photo: null //y aquí la de la fotografía
    });
    alert("Gracias por visitarnos");
    visitorName.value = "";
    visitingCo.value = "";
  };
}

if (btnRegister) {
  btnRegister.addEventListener("click", registerVisitant);
}

const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snap = document.getElementById("snap");
const errorMsgElement = document.querySelector('span#errorMsg');

const constraints = {
    audio: false,
    video: {
        width: 300, height: 300
      }
    };
    
    // Access webcam
    async function init() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            handleSuccess(stream);
          } catch (e) {
              errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
            }
          }
          
          // Success
          function handleSuccess(stream) {
              window.stream = stream;
              video.srcObject = stream;
            }
            
            // Load init
            init();

//probando lo de la cámara
/*const captureVideoButton = document.querySelector('#screenshot .capture-button');
const screenshotButton = document.querySelector('#screenshot-button');
const img = document.querySelector('#screenshot img');
const video = document.querySelector('#screenshot video');


function hasGetUserMedia() {
  return !!(navigator.mediaDevices &&
  navigator.mediaDevices.getUserMedia);
}

if (hasGetUserMedia()) {
  // Good to go!
} else {
  alert('getUserMedia() is not supported by your browser');
}

const constraints = {
  video: true
};

const videoCamera = document.querySelector('video');

navigator.mediaDevices.getUserMedia(constraints).
then((stream) => {video.srcObject = stream});



const canvas = document.getElementById('canvas');

captureVideoButton.onclick = function() {
  navigator.mediaDevices.getUserMedia(constraints).
  then(handleSuccess).catch(handleError);
};

screenshotButton.onclick = video.onclick = function() {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0);
  // Other browsers will fall back to image/png
  img.src = canvas.toDataURL('image/webp');
};

function handleSuccess(stream) {
  screenshotButton.disabled = false;
  video.srcObject = stream;
}


/*window.addEventListener("load",init);
function init(){
  let video = document.querySelector("#v");
  let canvas = document.querySelector("#c");
  let btn = document.querySelector("#t");
  let img = document.querySelector("#img");
  
  navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
  if(navigator.getUserMedia){
    navigator.getUserMedia({video:true},function(stream){
      video.src= window.URL.createObjectURL(stream);
      video.play();
    },function(e){console.log(e);})
  }
  else alert("error de navegador");
    video.addEventListener("loadedmetadata", 
    function(){
      canvas.width = video.videoWidth; 
      canvas.height = video.Height;
    },false);
  
  btn.addEventListener('click', function(){
    canvas.getContext("2d").drawImage(video,0,0);
    let imgData = canvas.toDataURL("image/png");
    img.setAttribute("src",imgData);
  });
 */
