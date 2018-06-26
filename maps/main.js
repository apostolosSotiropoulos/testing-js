function geolocationError () {
  var para = document.createElement('p')
  para.textContent = 'Argh, no geolocation!'
  document.body.appendChild(para)
}

function geolocationSuccess (position) {
  var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
  var myOptions = {
    zoom: 8,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.TERRAIN,
    disableDefaultUI: true
  }
  var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions)
}

if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(
    geolocationSuccess,
    geolocationError
  )
} else {
  geolocationError()
}
