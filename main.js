let form = document.querySelector('form');
let input = document.querySelector('input[type="text"]');
let span = document.querySelector('form > span');

form.onsubmit = function(event) {
  event.preventDefault();

  if(!input.value.includes('@')) {
    input.style.border = '2px solid #ff5263';
    span.style.display = 'block';
    return;
  }

  input.style.border = '2px solid #c2d3ff';
  span.style.display = 'none';

}
