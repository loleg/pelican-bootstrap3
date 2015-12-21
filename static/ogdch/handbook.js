$(document).ready(function() {
    $('table').addClass('table table-striped table-hover');

    var lang = $('html').attr('lang');
    var $curlang = $('#lang-switch li[lang="' + lang + '"]').addClass('active');
    $('#lang-button .name').html($curlang.text());

    $('blockquote > blockquote').each(function() {
      $(this).parent()
        .html($(this).html())
        .addClass('block-block')
        .prepend('<i class="fa fa-file-text-o"></i>');
    });
});

function validateForm(query) {
  return (query.length > 0);
}
