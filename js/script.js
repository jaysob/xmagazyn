// ===> Smooth scroll - jQuerry <===

$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 96
        }, 600, 'swing', function () {
        });
    });
});

// ===> Scroll top <===

(function($) {
    // target element for scroll
    var $link = $("a[href='#captioned-gallery']");
    var settings = {
      offset: 50 // hide position
    };
    var state = {
      isVisible: false,
      shouldVisible: false
    };
    // Handle toggle icon base on window.scrolltop
    function toggleControl () {
      var scrolltop = $(window).scrollTop();
      state.shouldVisible = (scrolltop >= settings.offset) ? true : false;
      if (state.shouldVisible && !state.isVisible){
        $link.slideDown('fast');
        state.isVisible = true;
  
      } else if (state.shouldVisible == false && state.isVisible){
        $link.slideUp('fast');
        state.isVisible = false;
      }
    }
    // Handle click event
    $link.click(function() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });
    // Attach function to toggle scroll icon
    $(window).bind('scroll resize', function(e){
      toggleControl();
    });
  })(window.jQuery);

  // ===> Container selection <===

  $(document).ready(function(){
    $(".btn1").click(function () {
       //this is change select value 1
        $('#containerSize').val('1').trigger('change');
    });

    $(".btn2").click(function () {
         //
         //this is change select value 2
         $('#containerSize').val('2').trigger('change');
    });

    $(".btn3").click(function () {
        //
        //this is change select value 3
        $('#containerSize').val('3').trigger('change');
   });
  
});
  