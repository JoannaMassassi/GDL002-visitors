

let visitorName = document.getElementById("visitor").value;
let visitingCo = document.getElementById("selectCoworker").value;

const btnRegister = document.querySelector("#register");


   function registerVisitant () {
    db.collection("visitors").add({
      name: visitorName,
      visiting: visitingCo 
    });
    console.log(visitorName,visitingCo);
  }

  if (btnRegister) {
      btnRegister.addEventListener("click",registerVisitant);
     
      
  }

  