let visitorName = document.querySelector("#visitor");
let visitingCo = document.querySelector("#selectCoworker");

const btnRegister = document.querySelector("#register");



function registerVisitant () {
  if (visitorName.value.length < 5) {
    alert ("Ingresa un nombre válido");
  }
  if (visitingCo.value ===""){
    alert("Selecciona a quien visitas");
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
