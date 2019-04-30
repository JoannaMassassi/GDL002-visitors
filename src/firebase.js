

//this are my variables and EventListeners needed

let visitorName = document.querySelector("#visitor");
let visitingCo = document.querySelector("#selectCoworker");
const btnRegister = document.querySelector("#register");
btnRegister.addEventListener('click', submitData);
let coWorkerName = document.querySelector("#coWorker");
let coWorkerMail = document.querySelector("#mailTo");
const btnSave = document.querySelector("#save");
btnSave.addEventListener('click', submit);

//this function validates the inputs from the guest
function submitData (){
  validateInputs ();
};

//this function creates the collection for visitors on firebase
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

//this function validate the inputs from the guest and if there is an error send an alert.
function validateInputs () {
  if (visitorName.value.length < 5 || visitingCo.value === "" ) {
    alert ("Tu información no está completa");
  
  } else {
    createCollection();
  };
}

//this function validates the inputs from the admin
function submit (){
  validateInfo();
};

//this function creates the collection for coworkers on firebase
function coWorkerList() {
  db.collection("coworkers").add({
    email: coWorkerMail.value,
    name: coWorkerName.value
  });
  coWorkerName.value= "";
  coWorkerMail.vale= "";
}

//this function validate the inputs from the admin and if there is an error, send an alert.
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
    width: 200, height: 200
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



let tableData = document.getElementById('table-data');

//this function create cards with the info of visitors collection and show it to the admin.
function guestList() {
  db.collection("visitors").onSnapshot(querySnapshot => {
    tableData.innerHTML = '';
    querySnapshot.forEach(doc => {
      let formatHour = new Date (doc.data().hour.seconds*1000);
      tableData.innerHTML += `
      <div class="card col-md-3">
      <h5 class="card-header"></h5>
      <div class="card-body">
      <p class="card-text">${doc.data().name}</p>
      <p class="card-text">${doc.data().visiting}</p>
      <p class="card-text">${formatHour}</p>
      <!-- <p class="card-text"> Aquí va la fotografía </p>
      <img src= "aqui va el base 64"> -->
      </div>
      </div>   `;
    });
  });
}

let selectCoworker = document.getElementById('selectCoworker');

//this function create fields on the select with the name of the coworker
function dinamicSelector () {
  db.collection("coworkers").onSnapshot(querySnapshot =>{
    selectCoworker.innerHTML = '<option value="">A quien visitas</option>';
    querySnapshot.forEach(doc => {
      selectCoworker.innerHTML +=`
      <option value="${doc.data().email}">${doc.data().name}</option>`;
    });
  });
}
