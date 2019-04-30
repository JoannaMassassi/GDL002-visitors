

let visitorName = document.querySelector("#visitor");
let visitingCo = document.querySelector("#selectCoworker");
const btnRegister = document.querySelector("#register");
btnRegister.addEventListener('click', submitData);

function submitData (){
  validateInputs ();
};


// Esta funcion crea el documento con los datos del visitante en Firebase

function createCollection () {
    db.collection("visitors").add({
        name: visitorName.value,
        visiting: visitingCo.value,
        hour: firebase.firestore.FieldValue.serverTimestamp(), //new Date
        photo: null //Fotografía pendiente en base 64
    });
      alert("Gracias por tú visita");
      visitorName.value = "";
      visitingCo.value = "";
}
  
// Función que valida que los campos no estén vacíos 
function validateInputs () {
if (visitorName.value.length < 5 || visitingCo.value === "" ) {
 alert ("Tu información no está completa");

} else {
  createCollection();
  };
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
    async function accesWebcam() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            handleSuccess(stream);
          } catch (e) {
              errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
            }
          }
          
          
         async function handleSuccess(stream) {
            try {
              const selecT = await document.getElementById("selectCoworker").addEventListener("onchange", stream);
              selecT;
              window.stream = stream;
              video.srcObject = stream;
             } catch (e) {
              errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
             }
            }
            
            
            width = 320;
            height = 10;

            function takepicture() {
              var contentVideo = document.querySelector(".video-wrap");   
              contentVideo.width = width;
              contentVideo.height = height;
              contentVideo.getContext('2d').drawImage(video, 0, 0, width, height);
              var data = contentVideo.toDataURL('image/png');
              photo.setAttribute('src', data);
            }
          
            snap.addEventListener("click",takepicture);

            // Load Acces
            accesWebcam();
