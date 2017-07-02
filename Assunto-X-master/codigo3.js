let troca1 = document.querySelector('#fotons');
let troca2 = document.querySelector('#densidade');

troca1.addEventListener('click', function(){
  off = document.querySelector('.materiaativa-in');
  off.classList.add('materiaativa-off');
  off.classList.remove('materiaativa-in');
  off = document.querySelector('.materia-off');
  off.classList.add('materia-in');
  off.classList.remove('materia-off');
})
troca2.addEventListener('click', function(){
  off = document.querySelector('.materia-in');
  off.classList.add('materia-off');
  off.classList.remove('materia-in');
  off = document.querySelector('.materiaativa-off');
  off.classList.add('materiaativa-in');
  off.classList.remove('materiaativa-off');
})
