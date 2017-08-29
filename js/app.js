
main();

function main() {
  addScript('/node_modules/jquery/dist/jquery.js', function() {
    $(document).ready(function() {
      addAuthorMetas();
      addBackButtons();
      lazyLoad();
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

function lazyLoad() {
  $('template.preload').each(function() {
    $(this).replaceWith(this.content);
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
