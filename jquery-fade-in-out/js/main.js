function main () {
  $('.projects-button').on('click', function (ev) {
    let $relatedProject = $(ev.target).parent().find('.projects')
    if ($relatedProject.is(':visible')) {
      $relatedProject.fadeOut(400)
    } else {
      $relatedProject.fadeIn(400)
    }
  })
}

$(document).ready(main)