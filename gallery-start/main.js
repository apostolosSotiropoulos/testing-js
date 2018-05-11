var displayedImage = document.querySelector('.displayed-img')
var thumbBar = document.querySelector('.thumb-bar')

btn = document.querySelector('button')
var overlay = document.querySelector('.overlay')

/* Looping through images */
for (var i = 1; i < 6; i++) {
  // wrong because https://wesbos.com/for-of-es6/
  var newImage = document.createElement('img')
  newImage.path = 'images/pic' + i + '.jpg'
  newImage.setAttribute('src', newImage.path)
  newImage.onclick = function () {
    displayedImage.src = newImage.path
  }
  thumbBar.appendChild(newImage)
}

/* Wiring up the Darken/Lighten button */
