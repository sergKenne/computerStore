

// $(window).resize(function(){
// 	location.reload();
// })





var windowWidth = $(window).width();

if(windowWidth < 769) {
	$(".js-slide-btn").click(function() {
		$(".js-sublist").slideToggle();
		
	});
}


$(".nav-menu__link, .nav-menu__subList-link, .left-side__link").click(function(){
	var inner_text = $(this).html();
    $(".header__slide-btn").html(inner_text);
	
});


// $(".products").click(function() {
// 	var products_name = $(this).find(".products__title").html();
// 	//$(".categories-title").html() = products_name;
// 	alert($(".categories-title").html());
// });

