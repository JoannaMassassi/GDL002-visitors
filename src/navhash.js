
const app = {
  pages: [],
  show: new Event('show'),
  init: function() {
    app.pages = document.querySelectorAll('.page');
    app.pages.forEach(pg => {
      pg.addEventListener('show', app.pageShown);
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', app.nav);
    });
    // history.replaceState({}, 'bienvenida', '#bienvenida');
    history.replaceState({}, 'Home', '#welcomePage');
    window.addEventListener('popstate', app.poppin);
  },
  nav: function(ev) {
    ev.preventDefault();
    // home.style.display="block";
    let currentPage = ev.target.getAttribute('data-target');
    document.querySelector('.active').classList.remove('active');
    document.getElementById(currentPage).classList.add('active');
    // console.log(currentPage);
    history.pushState({}, currentPage, `#${currentPage}`);
    document.getElementById(currentPage).dispatchEvent(app.show);
  },

  poppin: function(ev) {
    console.log(location.hash, 'popstate event');
    let hash = location.hash.replace('#', '');
    document.querySelector('.active').classList.remove('active');
    document.getElementById(hash).classList.add('active');
    console.log(hash);
    document.getElementById(hash).dispatchEvent(app.show);
  },
};
document.addEventListener('DOMContentLoaded', app.init);



function logAdmin() {
  let logPassword = document.getElementById('password').value;
  if (logPassword === "prueba") {
    location.href = "#currentGuest";
  } else {
    alert("La clave que ingresaste no es correcta");
  };
}
