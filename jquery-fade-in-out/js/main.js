function main () {
  $('.projects-button').on('click', function () {
    $(this).toggleClass('active')
    $(this).parent().find('.projects').toggle()
  })
}

$(document).ready(main)
