var blur = document.querySelector('.container')
var popup = document.querySelector('.popup')
var btn1 = document.querySelector('.btn1')
var btn2 = document.querySelector('.btn2')

// Toggle
function main() {
  blur.classList.toggle('active')
  popup.classList.toggle('active')
}

// Click event
btn1.addEventListener('click', () => {
  main()
})
btn2.addEventListener('click', () => {
  main()
})