//this are my variables and EventListeners needed

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
    Swal.fire(
      'Gracias por tu visita ' + visitorName.value,
      'vuelve pronto',
      'success',
     // confirmButtonColor: '#330b62'
    );
      //alert("Gracias por tú visita");
      visitorName.value = "";
      visitingCo.value = "";
}

//this function validate the inputs from the guest and if there is an error send an alert.
function validateInputs () {
  if (visitorName.value.length < 5 || visitingCo.value === "" ) {
    Swal.fire({
      title: 'Tus datos no estan completos',
      //text: 'Do you want to continue',
      type: 'error',
      confirmButtonText: 'Ok',
      confirmButtonColor: '#330b62'
    })
   // alert ("Tu información no está completa");
  
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
  Swal.fire(
    'CoWorker registrado',
    'Gracias!',
    'success',
    //confirmButtonColor: '#330b62'
    );
  coWorkerMail.value= "";
  coWorkerName.value= "";
  
}

//this function validate the inputs from the admin and if there is an error, send an alert.
function validateInfo () {
  if (coWorkerMail.value === "" || coWorkerName.value === "" ) {
    Swal.fire({
      title: 'Llena los campos antes de registrar',
      type: 'error',
      confirmButtonText: 'Ok',
      confirmButtonColor: '#330b62'
    })
   // alert ("Llena los campos antes de registrar");
    
  } else {
    coWorkerList();
  };
}

