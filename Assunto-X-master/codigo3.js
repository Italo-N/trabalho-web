let troca1 = document.querySelector('#fotons');
let troca2 = document.querySelector('#densidade');
troca1.addEventListener('click', function(){
  off = document.querySelector('.materiaativa')
  off.classList.add('materiaativa-off')
  off.classList.remove('materiaativa')
  off = document.querySelector('.materia')
  off.classList.add('materia-in')
  off.classList.remove('materia')
})
troca2.addEventListener('click', function(){
  off = document.querySelector('.materia-in')
  off.classList.add('materia')
  off.classList.remove('materia-in')
  off = document.querySelector('.materiaativa-off')
  off.classList.add('materiaativa')
  off.classList.remove('materiaativa-off')
})

