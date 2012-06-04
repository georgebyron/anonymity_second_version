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

	$('#anonymity_button').mouseenter(function () {
		 $('#anonymity_button_description').stop().animate({top:'-120px'}, 500)
			}
		);

	$('#anonymity_button').mouseleave(function () {
			$('#anonymity_button_description').stop().animate({top:'0px'}, 500)
		}
	);

	$('#tracking_button').mouseenter(function () {
		 $('#tracking_button_description').stop().animate({top:'-120px'}, 500)
			}
		);

	$('#tracking_button').mouseleave(function () {
			$('#tracking_button_description').stop().animate({top:'0px'}, 500)
		}
	);

	$('#problems_button').mouseenter(function () {
		 $('#problems_button_description').stop().animate({top:'-120px'}, 500)
			}
		);

	$('#problems_button').mouseleave(function () {
			$('#problems_button_description').stop().animate({top:'0px'}, 500)
		}
	);

	$('#methods_button').mouseenter(function () {
		 $('#methods_button_description').stop().animate({top:'-120px'}, 500)
			}
		);

	$('#methods_button').mouseleave(function () {
			$('#methods_button_description').stop().animate({top:'0px'}, 500)
		}
	);

	$('#statistics_button').mouseenter(function () {
		 $('#statistics_button_description').stop().animate({top:'-120px'}, 500)
			}
		);

	$('#statistics_button').mouseleave(function () {
			$('#statistics_button_description').stop().animate({top:'0px'}, 500)
		}
	);

});
