function updateDisplay (dropdownChoice) {
  var url = dropdownChoice.replace(' ', '').toLowerCase() + '.txt'
  fetch(url).then(function (response) {
    response.text().then(function (text) {
      poemDisplay.innerText = text
    })
  })
}

var verseChoose = document.querySelector('select')
var poemDisplay = document.querySelector('pre')

verseChoose.onchange = function () {
  var verse = verseChoose.value
  updateDisplay(verse)
}
