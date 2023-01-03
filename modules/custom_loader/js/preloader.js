(function ($, Drupal) {
    Drupal.behaviors.customLoader = {
    attach: function (context) {
    $(window).on('load', function () {
    $('#custom-loader').fadeOut();
    });
    }
    }
    })(jQuery, Drupal);