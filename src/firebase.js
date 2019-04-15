

let visitorName = document.querySelector("#visitor");
let visitingCo = document.querySelector("#selectCoworker");

const btnRegister = document.querySelector("#register");


function registerVisitant () {
  
  db.collection("visitors").add({
    name: visitorName.value,
    visiting: visitingCo.value
  });
  alert("Gracias por visitarnos");
  document.querySelector("#visitor").value = "";
  document.querySelector("#selectCoworker").value = "";
}
  if (btnRegister) {
    btnRegister.addEventListener("click", registerVisitant);
  }
