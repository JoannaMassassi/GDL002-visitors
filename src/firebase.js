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

//probando la tabla de ingresos

let tableData = document.getElementById('table-data');


function guestList() {
  db.collection("visitors").onSnapshot(querySnapshot => {
    tableData.innerHTML = '';
    querySnapshot.forEach(doc => {
      tableData.innerHTML += `
      <div class="card col-md-3">
      <h5 class="card-header">${doc.id}</h5>
      <div class="card-body">
      <p class="card-text">${doc.data().name}</p>
      <p class="card-text">${doc.data().visiting}</p>
      <p class="card-text">${doc.data().hour}</p>
      <p class="card-text"> Aquí va la fotografía </p>
      </div>
      </div>   `;
    });
  });
}
