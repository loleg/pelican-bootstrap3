$(document).ready(function() {
    $('table').addClass('table table-striped table-hover');

    var lang = $('html').attr('lang');
    var $curlang = $('#lang-switch li[lang="' + lang + '"]').addClass('active');
    $('#lang-button .name').html($curlang.text());

    $('.page .entry-content a[href^="/"]').each(function() {
      var href = $(this).attr('href');
      if (href.indexOf('/library/') >= 0) {
        $(this).addClass('library-ref')
          .prepend('<i class="fa fa-file-text-o"></i>&nbsp;');
      } else if (href.indexOf('/pages/') < 0) {
        $(this).addClass('article-ref')
          .prepend('<i class="fa fa-bookmark-o"></i>&nbsp;');
      }
    });
});

function validateForm(query) {
  return (query.length > 0);
}
