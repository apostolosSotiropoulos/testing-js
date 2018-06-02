function main () {
  $('.projects-button').on('click', function () {
    $(this).toggleClass('active')
    $(this).next().toggle()
  })
}

$(document).ready(main)
