/*--------------------------------------------------
 * Theme Name: NOBIS - Multipurpose Responsive HTML Template
 * Author: Dazzlersoft
 * Description: A Bootstrap-3 Responsive  Template
 * Version: 1.0
 * Bootstrap  v3.3.7 (http://getbootstrap.com)
 * Copyright 2017 Dazzlersoft
-----------------------------------------------------

    JS INDEX
    ================================================
    1. preloader js
    2. scroll to top js
    3. slick menu js
    4. sticky menu js
    5. main slider js
    6. counter js
    7. Portfolio  isotope And Masonry
    8. gallery masonary
    9. wow js
    10. team slider js
    11. Testimonial slick Slider
    12. Project Detail Slider
    13. Testimonial owl carousel
    14. partner slider js
    15. circular progress bar
    16. widget slider
    17. Google map
    ================================================*/

(function($) {

    var $main_window = $(window);

    /*====================================
    preloader js
    ======================================*/
    $main_window.on("load", function() {
        $("#preloader").fadeOut("slow");
    });

    /*====================================
    scroll to top js
	======================================*/
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 250) {
          $("#c-scroll").fadeIn(200);
        } else {
          $("#c-scroll").fadeOut(200);
        }
      });
      $("#c-scroll").on("click", function() {
        $("html, body").animate(
          {
            scrollTop: 0
          },
          "slow"
        );
        return false;
      });
    

    /*====================================
       slick menu js
	======================================*/

      var logo_path=$('.mobile-menu').data('logo');
      $('#menu').slicknav({
          appendTo:'.mobile-menu',
          removeClasses:true,
          label:'',
          closedSymbol:'<i class="fa fa-angle-right"><i/>',
          openedSymbol:'<i class="fa fa-angle-down"><i/>',
          brand:'<img src="'+logo_path+'" class="img-responsive" alt="logo">'
      });

    /*====================================
       sticky menu js
	======================================*/

      $main_window.on('scroll', function () {  
        var scroll = $(window).scrollTop();
        if (scroll >= 200) {
            $(".menu-header").addClass("sticky-menu");
        } else {
            $(".menu-header").removeClass("sticky-menu");
        }
      });

  /*====================================
		main slider js
	======================================*/

    if ($(".main-slider").length > 0) {
        var mainslider = $(".corp-slider");
        mainslider.owlCarousel({
          items: 1,
          autoplay:true,
          autoplayHoverPause:true,
          nav: false,
          smartSpeed:1000,
          dots: true,
          loop: true,
          navText: [
            '<i class="fa fa-arrow-left"></i>',
            '<i class="fa fa-arrow-right"></i>'
          ]
        });
    }


  /*=======================================
  counter
  ======================================= */
  if ($(".counter-wrap").length > 0) {
    $(".count").counterUp({
      delay: 10,
      time: 2000
    });
  }

    
    /*====================================
      Portfolio  isotope And Masonry
    ======================================*/   

    $('.portfolio').imagesLoaded(function () {
    // init Isotope
    var $grid = $('.portfolio-items').isotope({
        itemSelector: '.port-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.port-item'
        }
    });
    $('.sorting').on('click', '.filter-btn', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });
    $('.sorting li').on('click', function (event) {
        $(".filter-btn").removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
       });
    });

    /*====================================
      gallery masonary
    ======================================*/
    $('.gallery').imagesLoaded(function () {
        $('.gallery-wrap').isotope({
            itemSelector: '.gal-mason',
            percentPosition: true,
            masonry: {
                columnWidth: '.gal-mason'
            }
        });
    });

    /*====================================
      Blog Masonry
    ======================================*/
    $('.blog-masonary').imagesLoaded(function () {  
        $('.blog-masonary').isotope({
            itemSelector: '.blog-mas',
            percentPosition: true,
            masonry: {
                columnWidth: '.blog-mas'
            }
        });
    });

	/*====================================
	  wow js
	======================================*/
    new WOW().init();
    
  /*====================================
	  team slider js
	======================================*/

    if ($(".team-slider").length > 0) {
        var teamslider = $(".team-slider");
        teamslider.owlCarousel({
        margin:30,
        autoplay:false,
        autoplayHoverPause:true,
        nav: true,
        smartSpeed: 350,
        dots: false,
        loop: true,
        navText: [
            '<i class="fa fa-long-arrow-left"></i>',
            '<i class="fa fa-long-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2,
            },
            991: {
                items: 3,
            },
            1199: {
                items: 4,
            }
        }
        });
    }

	/*------------------------------------
	    Testimonial slick Slider
	--------------------------------------*/
 
      if ($(".testimonial-1").length > 0) {
        $('.testimonial-content').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.slick-thumbnail-slider',
            dots: false,
            arrows: true,
            autoplay:true,
            fade: true,
            autoplayHoverPause:true,
            prevArrow: "<a href='#' class='slick-prev'></a>",
            nextArrow: "<a href='#' class='slick-next'></a>",
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });

        $('.slick-thumbnail-slider').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows:false,
            autoplay:true,
            centerMode: true,
            centerPadding: '0',
            autoplayHoverPause:true,
            focusOnSelect: true,
            dots:false,
            asNavFor: '.testimonial-content',
        });
    }


	/*------------------------------------
	    Project Detail Slider
    --------------------------------------*/
    if ($(".project-slider").length > 0) {
    $('.project-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay:true,
        autoplayHoverPause:true,
        fade: true,
        asNavFor:'.project-thumb-slider',
    });
    
    $('.project-thumb-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        autoplayHoverPause:true,
        dots: false,
        arrows: false,
        focusOnSelect: true,
        asNavFor:'.project-slider',
        vertical:true,
        verticalSwiping:true,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                vertical:false,
                 verticalSwiping:false,
              }
            }
        ]
    });
    }

    /*------------------------------------
	    Testimonial owl carousel
    --------------------------------------*/
        var testiOwl = $(".testimonial-theme-2");
        testiOwl.owlCarousel({
            autoplay:true,
            margin:30,
            dots:false,
            autoplayHoverPause:true,
            nav:true,
            loop:true,
            navText: [
                '<i class="fa fa-long-arrow-left"></i>',
                '<i class="fa fa-long-arrow-right"></i>'
              ],
            responsiveClass:true,
            responsive:{
                0: {
                    items:1,
                },
                991:{
                    items:2
            }
            }
        });

    /*====================================
		partner slider js
	======================================*/

        var partnerslider = $(".partner-slider");
        partnerslider.owlCarousel({
          autoplay: true,
          nav: false,
          autoplayHoverPause:true,
          smartSpeed: 350,
          dots: false,
          margin:30,
          loop: true,
          navText: [
            '<i class="fa fa-arrow-left"></i>',
            '<i class="fa fa-arrow-right"></i>'
          ],
          responsiveClass: true,
          responsive: {
              0: {
                  items: 1,
              },
              575: {
                  items: 2,
              },
              991: {
                  items: 4,
              }
            }
        });

    
    /*====================================
		circular progress bar
	======================================*/
    $('.chart').waypoint(function(event, direction) {
        $('.chart').easyPieChart({
            animate: 2000,
            barColor: '#0c65ed',
            trackColor:'transparent',
            scaleColor:false,
            lineCap: 'butt' ,
            size:'120',
            lineWidth:'11',
            rotate: '90',
            onStep: function(value) {
            this.$el.find('span').text(Math.round(value));
            },
            onStop: function(value, to) {
            this.$el.find('span').text(Math.round(to));
            }
        });
    },{
        triggerOnce: true,
        offset: 'bottom-in-view'
      });

    /*====================================
		widget slider
    ======================================*/
    var widslider =  $(".widget-slider");
    widslider.owlCarousel({
        items:1,
        autoplayHoverPause:true,
        autoplay:true,
        margin:0,
        nav:true,
        loop:true,
        dots:false,
        navText:[
            '<i class="fa fa-long-arrow-left"></i>',
            '<i class="fa fa-long-arrow-right"></i>'
        ]              
    });
    

})(jQuery);

   /*======================================
        Google map
    ====================================== */
    if (document.getElementById("theme-map")) {
        var myCenter = new google.maps.LatLng(-37.813628, 144.963058);
    
        function initialize() {
            var mapProp = {
                center: myCenter,
                scrollwheel: false,
                zoom: 13,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("theme-map"), mapProp);
            var marker = new google.maps.Marker({
                position: myCenter,
                animation: google.maps.Animation.BOUNCE,
                icon: 'img/map-icon.png',
                map: map,
            });
            marker.setMap(map);
        }
        google.maps.event.addDomListener(window, 'load', initialize);
    }
    // map initialization code  ends