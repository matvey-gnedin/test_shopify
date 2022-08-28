const btn = document.querySelector('.collapsible__button');
const content = document.querySelector('.collapsible__content');
const btnHide = document.querySelector('.collapsible__action--visible');
const btnShow = document.querySelector('.collapsible__action--hidden')

content.style.maxHeight = 0;
content.style.overflow = 'hidden';
btnShow.style.display = 'block';
btnHide.style.display = 'none';

const effectShow = [
  { maxHeight: 0},
  { maxHeight: content.scrollHeight + 'px'}  
]

const effectHide = [
  { maxHeight: content.scrollHeight + 'px'},
  { maxHeight: 0}
]

const timeProperty = {
  duration: 1000,
  easing: 'ease-out',
  fill: 'forwards'
}

btn.addEventListener('click', () => {
  if(parseInt(content.style.maxHeight) > 0) {
    btnShow.style.display = 'block';
    btnHide.style.display = 'none';
    content.style.maxHeight = 0;
    content.animate(effectHide, timeProperty);
  } else {
    btnHide.style.display = 'block';
    btnShow.style.display = 'none';
    content.style.maxHeight = content.scrollHeight + 'px';
    content.animate(effectShow, timeProperty);
  }
})



