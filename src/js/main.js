import '../css/package.scss';

Zepto(function($) {
  init();
});

const $loading = $("#o2_loading");
const $main = $("#o2_main");

/**
 * init
 */
function init() {
  console.log('init ok', $);
  setTimeout(function () {
    $loading.remove();
    $main.removeClass('hide');
  }, 2000)
}



