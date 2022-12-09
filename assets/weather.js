jQuery(function ($) {
  $.fn.weatherForcast = function (settings) {
    var defaults = {
      appID: "1234",
    };    
  var settings = $.extend(defaults, settings);
  return this.each(function () {
    getForcast();

    function getForcast() {
    
    }
  })
}
});



