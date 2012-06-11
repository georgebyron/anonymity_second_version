// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function () {

//do sth with this code, DRY!

//ANONYMITY BUTTON
	$('#anonymity_button_description').hover(function () {
		$(this).stop().show()
	});

	$('#anonymity_button_description').mouseleave(function () {
		$(this).stop().animate({top:'0px'}, 500)
	});


	$('#anonymity_button').mouseenter(function () {
		 $('#anonymity_button_description').stop().animate({top:'-120px'}, 500)
			}
		);

	$('#anonymity_button').mouseleave(function () {
			$('#anonymity_button_description').stop().animate({top:'0px'}, 500)
		}
	);

//TRACKING BUTTON
	$('#tracking_button_description').hover(function () {
		$(this).stop().show()
	});

	$('#tracking_button_description').mouseleave(function () {
		$(this).stop().animate({top:'0px'}, 500)
	});

	$('#tracking_button').mouseenter(function () {
		 $('#tracking_button_description').stop().animate({top:'-120px'}, 500)
			}
		);

	$('#tracking_button').mouseleave(function () {
			$('#tracking_button_description').stop().animate({top:'0px'}, 500)
		}
	);


//PROBLEMS BUTTON
	$('#problems_button_description').hover(function () {
		$(this).stop().show()
	});

	$('#problems_button_description').mouseleave(function () {
		$(this).stop().animate({top:'0px'}, 500)
	});

	$('#problems_button').mouseenter(function () {
		 $('#problems_button_description').stop().animate({top:'-120px'}, 500)
			}
		);

	$('#problems_button').mouseleave(function () {
			$('#problems_button_description').stop().animate({top:'0px'}, 500)
		}
	);

//METHODS BUTTON
$('#methods_button_description').hover(function () {
		$(this).stop().show()
	});

	$('#methods_button_description').mouseleave(function () {
		$(this).stop().animate({top:'0px'}, 500)
	});

	$('#methods_button').mouseenter(function () {
		 $('#methods_button_description').stop().animate({top:'-120px'}, 500)
			}
		);

	$('#methods_button').mouseleave(function () {
			$('#methods_button_description').stop().animate({top:'0px'}, 500)
		}
	);

//STATISTICS BUTTON
$('#statistics_button_description').hover(function () {
		$(this).stop().show()
	});

	$('#statistics_button_description').mouseleave(function () {
		$(this).stop().animate({top:'0px'}, 500)
	});

	$('#statistics_button').mouseenter(function () {
		 $('#statistics_button_description').stop().animate({top:'-120px'}, 500)
			}
		);

	$('#statistics_button').mouseleave(function () {
			$('#statistics_button_description').stop().animate({top:'0px'}, 500)
		}
	);



//SCROLLING TROLLING

 $('a[href=#top]').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });


//GRAPHS

color = '#5D88B1';

arrayOfData = new Array(
   	 [30,'dyskusje',color],
   	 [23.1,'ogłoszenia',color],
   	 [16.5,'pytania',color],
   	 [13.20,'teksty',color],
   	 [9.9,'testowanie',color],
			[3.7,'zdjęcia',color],
			[0.4,'oprogramowanie',color],
			[3.3,'inne',color]
);

$('#anonymity_content_stats').jqbargraph({
  	 data: arrayOfData 
});



});

