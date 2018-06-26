function main () {
  function addBox () {
    var newBox = document.createElement('div')
    newBox.setAttribute('class', 'box')
    document.querySelector('#box-area').appendChild(newBox)
    return newBox
  }

  document.querySelector('#red-button').onclick = function () {
    var newBox = addBox()
    newBox.style.backgroundColor = 'red'
  }  

  document.querySelector('#random-button').onclick = function () {
    var newBox = addBox()
    newBox.style.backgroundColor = 'blue'
  }
}

window.onload = main
