function main () {
  function addToList () {
    let newItem = document.createElement('li')
    newItem.innerText = document.querySelector('input').value
    let remover = document.createElement('button')
    remover.innerText = 'Remove'
    $(remover).on('click', removeFromList)
    newItem.appendChild(remover)
    document.querySelector('#list').appendChild(newItem)
    document.querySelector('input').value = ''
  }

  function removeFromList (e) {
    e.target.parentNode.parentNode.removeChild(e.target.parentNode)
  }

  $('#adder').on('click', addToList)
}

$(main)
