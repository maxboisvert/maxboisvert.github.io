
main();

function main() {
  addCss('/vendor/bootstrap/dist/css/bootstrap.css')

  addScript('/vendor/jquery/dist/jquery.js', function() {
    $(document).ready(function() {
      addAuthorMetas();
      lazyloadImages();
      addBackButtons();
    });
  });

  addScript('/js/analytics.js')
}

function addAuthorMetas() {
  $('head').append([
      $('<meta>', { name: 'description', content: 'Maxime Boisvert personel website' }),
      $('<meta>', { name: 'author', content: 'Maxime Boisvert' }),
      $('<title>', { text: 'Maxime Boisvert - ' + window.location.pathname }),
  ]);
}

function lazyloadImages() {
  addScript('/vendor/jquery-lazyload/jquery.lazyload.js', function() {
    $('img[data-original]').lazyload()
  });
}

function addBackButtons() {
  var buttons = $('.back');

  buttons.append($('<a>', {
    href: '..',
    html: 'Back'
  }));
}

function addCss(href) {
  var css = document.createElement("link");
  css.href = href;
  css.rel = "stylesheet";
  css.type= "text/css";

  document.head.appendChild(css);
}

function addScript(src, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = src;

  if (callback) {
    // inspired by https://gist.github.com/hagenburger/500716
    var loaded;

    script.onreadystatechange = script.onload = function() {
      if (!loaded) {
        callback();
      }
      loaded = true;
    };
  }

  document.body.appendChild(script);
}

