function staircase (steps) {
  let screenOutput = Array(steps)
  for (let i = 0; i < steps; i++) {
    screenOutput[i] = '#'
    console.log(screenOutput.join(''))
  }
}

function christmasTree (floors) {
  let maxWidth = 1 + (floors - 1) * 2
  let treeImage = []
  for (let floor = 1; floor <= maxWidth; floor += 2) {
    treeImage.push(treeFloor({ currentFloor: floor, maxWidth: maxWidth }))
  }

  return treeImage
}

function treeFloor (params) {
  let spaceBlocks = (params.maxWidth - params.currentFloor) / 2
  let spaces = Array(spaceBlocks).fill(' ')
  let hashesBlocks = params.currentFloor
  let hashes = Array(hashesBlocks).fill('#')

  return spaces.concat(hashes).concat(spaces)
}

function treePrinter (treeImage) {
  if (printerError(treeImage)) return false

  for (let treeFloor of treeImage) {
    console.log(treeFloor.join(''))
  }
}

function printerError (treeImage) {
  return !Array.isArray(treeImage)
}

treePrinter(christmasTree(6))
treePrinter(christmasTree(5))
