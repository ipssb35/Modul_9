let inputs = document.querySelector('input')
// Вешаем обработчик события на инпут
inputs.addEventListener('keyup', function(e) {
  // Выбираем р
  let p = document.querySelector('#duplicateField')
  p.textContent = e.target.value
})

let btn = document.querySelector('.btn')
btn.addEventListener('click', function(e) {
  let p = document.querySelector('#duplicateField')
    let inputs = document.querySelector('input')
    console.log(inputs.value)
    inputs.value = '';
    p.textContent = '';
    btn.preventDefault();
  })
  
 // let btn = document.querySelector('.btn')
//btn.addEventListener('click', function(e) {
    // Выбираем р
 //   let p = document.querySelector('#duplicateField')
 //   let inpuT = document.querySelector('input')
 //   inpuT.textContent = '';
 //   p.textContent = '';
  //})
 
 
 // 