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
  db.collection("visitors").orderBy("hour","desc").onSnapshot(querySnapshot => {
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

