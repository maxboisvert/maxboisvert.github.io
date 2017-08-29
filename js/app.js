
main();

function main() {
  $(document).ready(function() {
    addAuthorMetas();
    addBackButtons();
    lazyLoad();
  });
}

function addAuthorMetas() {
  $('head').append([
      $('<meta>', { name: 'description', content: 'Maxime Boisvert personel website' }),
      $('<meta>', { name: 'author', content: 'Maxime Boisvert' }),
      $('<title>', { text: 'Maxime Boisvert - ' + window.location.pathname }),
  ]);
}

function lazyLoad() {
  $('template.preload').each(function() {
    $(this).replaceWith(this.content);
  });
}

function addBackButtons() {
  $('.back').append($('<a>', {
    href: '..',
    html: 'Back'
  }));
}
