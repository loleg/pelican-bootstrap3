$(document).ready(function() {
    $('table').addClass('table table-striped table-hover');

    var lang = $('html').attr('lang');
    var $curlang = $('#lang-switch li[lang="' + lang + '"]').addClass('active');
    $('#lang-button .name').html($curlang.text());

    var DEFAULT_LANG = 'de';
    if (lang !== DEFAULT_LANG) { $('.lang-' + DEFAULT_LANG).addClass('hidden'); }
    $('.lang-' + lang).removeClass('hidden');
});

function validateForm(query) {
  return (query.length > 0);
}
