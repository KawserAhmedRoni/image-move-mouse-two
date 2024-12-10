/*-----------------------------------------------------------------

Template Name:  Foresty - Ecology and Environment Template
Author:  Gramentheme
Author URI: https://themeforest.net/user/gramentheme/portfolio
Developer: Kawser Ahmed Roni
Version: 1.0.0
Description: Foresty - Ecology and Environment Template

-------------------------------------------------------------------
CSS TABLE OF CONTENTS
-------------------------------------------------------------------

01. preloader
02. header
03. swiper slider
04. animated text with swiper slider
05. shop products count
06. image src change
07. hide & show a div
08. isotope
09. add class & remove class
10. magnificPopup
11. back to top
12. data backgrund
13. coundown by click
14. remove products
15. wow animation

------------------------------------------------------------------*/

(function ($) {
	("use strict");
	// Mouse move js start here ***
	$(document).ready(function () {
		$(".image-move-mouse__item")
			.on("mousemove", function (e) {
				var $item = $(this),
					rect = this.getBoundingClientRect(),
					img = $item.find("img"),
					offsetX = e.pageX - $item.offset().left,
					offsetY = e.pageY - $item.offset().top;

				img.css({
					left: offsetX,
					top: offsetY,
				});
			})
			.on("mouseleave", function () {
				var img = $(this).find("img");
				img.css({
					left: "", // Clearing left and top styles to stop image movement
					top: "",
				});
			});
	});

	// Mouse move js end here ***
})(jQuery);
