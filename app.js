var img = document.querySelector('.img');
var smoke = document.querySelector('.smoke');
var body = document.querySelector('.body')

function smke() {

img.addEventListener('mouseover', () => {
 console.log('hover');
 smoke.classList.add('smokeanime')
 body.classList.add('pink')
})
}
smke()