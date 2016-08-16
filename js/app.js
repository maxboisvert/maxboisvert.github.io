
main();

function main() {
  // addCss('/css/style.css');

  addScript('/node_modules/jquery/dist/jquery.js', function() {
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
  addScript('/node_modules/jquery-lazyload/jquery.lazyload.js', function() {
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

function addBootstrap() {
  // <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
  var css = document.createElement("link");
  css.href = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
  css.rel = "stylesheet";
  css.type= "text/css";
  css.integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7";
  css.crossorigin="anonymous";

  document.head.appendChild(css);
}
