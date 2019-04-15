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
