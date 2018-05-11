/* Looping through images */
for (let i = 1; i < 6; i++) {
  let newImage = document.createElement('img')
  newImage.setAttribute('src', 'images/pic' + i + '.jpg')
  newImage.onclick = function (e) {
    document.querySelector('.displayed-img').src = e.target.getAttribute('src')
  }
  document.querySelector('.thumb-bar').appendChild(newImage)
}

/* Wiring up the Darken/Lighten button */
var btn = document.querySelector('button')
btn.onclick = function () {
  let overlay = document.querySelector('.overlay')
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
