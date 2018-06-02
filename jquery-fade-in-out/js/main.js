function main () {
  $('.projects-button').on('click', function (ev) {
    $(ev.target).parent().find('.projects').toggle()
  })
}

$(document).ready(main)