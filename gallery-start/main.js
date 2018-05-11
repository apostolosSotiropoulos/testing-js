var displayedImage = document.querySelector('.displayed-img')
var thumbBar = document.querySelector('.thumb-bar')

/* Looping through images */
for (let i = 1; i < 6; i++) {
  let newImage = document.createElement('img')
  newImage.path = 'images/pic' + i + '.jpg'
  newImage.setAttribute('src', newImage.path)
  newImage.onclick = function () {
    displayedImage.src = newImage.path
  }
  thumbBar.appendChild(newImage)
}

/* Wiring up the Darken/Lighten button */
var overlay = document.querySelector('.overlay')
var btn = document.querySelector('button')
btn.onclick = function () {
  overlay.setAttribute('style', 'background-color: rgba(0,0,0,0.5)')
}
