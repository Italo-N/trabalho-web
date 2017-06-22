function dark() {
  let darkmode = document.querySelector('.materia');
  darkmode.classList.toggle('materiaativa');
  darkmode = document.querySelector('.html');
  darkmode.classList.toggle('htmlativa');
}
let elBotao = document.querySelector("#dark");
elBotao.addEventListener('click', dark);

let botaoden1 = document.querySelector("#botaoden1");

botaoden1.addEventListener('click', function() {
          let massa1 = document.querySelector("#massa1").value,
          volume1 = document.querySelector("#volume1").value;
          d = massa1/volume1;
          document.querySelector('#densidade1').value = d + ' g/cm³';
    })
let botaoden2 = document.querySelector("#botaoden2");

botaoden2.addEventListener('click', function() {
          let densidade2 = document.querySelector("#densidade2").value,
          volume2 = document.querySelector("#volume2").value;
          m = densidade2*volume2;
          document.querySelector('#massa2').value = m + ' g';
        })
let botaoden3 = document.querySelector("#botaoden3");

botaoden3.addEventListener('click', function() {
          let densidade3 = document.querySelector("#densidade3").value,
          massa3 = document.querySelector("#massa3").value;
          v = densidade3*massa3;
          document.querySelector('#volume3').value = v + 'cm/³';
        })
