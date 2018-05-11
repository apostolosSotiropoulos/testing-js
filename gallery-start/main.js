// TODO: hide global vars
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
// TODO: hide global vars
var overlay = document.querySelector('.overlay')
var btn = document.querySelector('button')
btn.onclick = function () {
  let overlayType = overlay.className.split(' ')[1]
  switch (overlayType) {
    case 'full-transparent':
      overlay.className = 'overlay semi-transparent'
      btn.innerHTML = 'Lighten'
      break
    case 'semi-transparent':
      overlay.className = 'overlay full-transparent'
      btn.innerHTML = 'Darken'
      break
  }
}
