function updateDisplay (dropdownChoice) {
  var url = dropdownChoice.replace(' ', '').toLowerCase() + '.txt'
  var request = new XMLHttpRequest()
  request.open('GET', url)
  request.responseType = 'text'
  request.onload = function () {
    poemDisplay.innerHTML = request.response
  }
  request.send()
}

var verseChoose = document.querySelector('select')
var poemDisplay = document.querySelector('pre')

verseChoose.onchange = function () {
  var verse = verseChoose.value
  updateDisplay(verse)
}
