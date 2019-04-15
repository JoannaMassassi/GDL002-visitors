let visitorName = document.querySelector("#visitor");
let visitingCo = document.querySelector("#selectCoworker");

const btnRegister = document.querySelector("#register");


function registerVisitant () {
  db.collection("visitors").add({
    name: visitorName.value,
    visiting: visitingCo.value,
    hour: null, //aqui iria la referencia del timestamp ServerValue.TIMESTAMP 
    photo: null //y aquí la de la fotografía
  });
  alert("Gracias por visitarnos");
  visitorName.value = "";
  visitingCo.value = "";
}

if (btnRegister) {
  btnRegister.addEventListener("click", registerVisitant);
}
