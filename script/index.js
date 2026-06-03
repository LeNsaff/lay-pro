//navbar scroll
window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navdivv');
  if (window.scrollY > 220) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
});


function mail() {
  let parms = {
      nom: document.getElementById('nom').value,
      prenom: document.getElementById('prenom').value,
      email: document.getElementById('email').value,
      tel: document.getElementById('tel').value,
      pays: document.getElementById('ville').value,
      eta: document.getElementById('pres').value,
      pres: document.getElementById('expl').value,
  };
  if (parms.nom == "") {
      alert("Inscription incomplete");
  }
  if(parms.prenom == ""){
      alert("Inscription incomplete");
  }
  if(parms.email==""){
      alert("Inscription incomplete");
  }
  if(parms.tel==""){
      alert("Inscription incomplete");
  }
  if(parms.ville==""){
      alert("Inscription incomplete");
  }
  if(parms.pres==""){
      alert("Inscription incomplete");
  }
  if(parms.expl==""){
      alert("Inscription incomplete");
  }
  else {
      emailjs.send("service_lebiwhy", "template_nxqphdw", parms)
      .then(function() {
          alert("Inscription envoyée");
      })
  } 
}