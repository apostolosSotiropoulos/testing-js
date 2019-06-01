function arrayChunk(array, chunkSize) {
	let chunksArray = []
	let chunkStart  = 0
	let chunkFinish = 0
	let arrayLimit  = array.length

	for (chunkStart ; chunkStart < arrayLimit ; chunkStart += chunkSize) {
		if (chunkStart > arrayLimit) break
		chunkFinish = chunkStart + chunkSize > arrayLimit ? arrayLimit : chunkStart + chunkSize
		chunksArray.push(array.slice(chunkStart, chunkFinish))
	}

	return chunksArray
}

function arrayChunk2(array, chunkSize) {
	let chunksArray     = []
	let arrayLimit      = array.length
	let chunkArrayIndex = 0

	for (let i = 0 ; i < arrayLimit ; i++) {
		if (chunksArray[chunkArrayIndex]) {
		  chunksArray[chunkArrayIndex].push(array[i])
		} else { 
			chunksArray[chunkArrayIndex] = [array[i]]
		}
		if ( i != 0 && (i+1)%chunkSize == 0) chunkArrayIndex++;
	}

	return chunksArray
}

function arrayChunk3(array, chunkSize) {
	const chunks = []

	for (let item of array) {
		const lastChunk = chunks[chunks.length - 1]
		if (!lastChunk || lastChunk.length === chunkSize) chunks.push([item]);
		else lastChunk.push(item)
	}

	return chunks
}