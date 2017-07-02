function dark() {
  let darkmode = document.querySelector('.materia');
  darkmode.classList.toggle('materiadark');
  darkmode = document.querySelector('.html');
  darkmode.classList.toggle('htmldark');
}
let elBotao = document.querySelector("#dark");
elBotao.addEventListener('click', dark);
