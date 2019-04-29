

let visitorName = document.querySelector("#visitor");
let visitingCo = document.querySelector("#selectCoworker");
const btnRegister = document.querySelector("#register");
btnRegister.addEventListener('click', submitData);
let coWorkerName = document.querySelector("#coWorker");
let coWorkerMail = document.querySelector("#mailTo");
const btnSave = document.querySelector("#save");
btnSave.addEventListener('click', submit);

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

function validateInputs () {
  if (visitorName.value.length < 5 || visitingCo.value === "" ) {
    alert ("Tu información no está completa");
    
  } else {
    createCollection();
  };
}

function submit (){
  validateInfo();
};

function coWorkerList() {
  db.collection("coworkers").add({
    email: coWorkerMail.value,
    name: coWorkerName.value
  });
  coWorkerName.value= "";
  coWorkerMail.vale= "";
}

function validateInfo () {
  if (coWorkerMail.value === "" || coWorkerName.value === "" ) {
    alert ("Llena los campos antes de registrar");
    
  } else {
    coWorkerList();
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

/*let selectCoworker = document.getElementById('selectCoworker');

function dinamicSelector () {
  db.collection("coworkers").onSnapshot(querySnapshot =>{
    selectCoworker.innerHTML = '';
    querySnapshot.forEach(doc => {
      selectCoworker.innerHTML +=`
      <select name="selectCoworker" id="selectCoworker" class="visitantSelector">
      <option value="">A quien visitas</option>
      <option value="${doc.data().email}">${doc.data().name}</option>
      </select>
       `;
    });
  });
} */
