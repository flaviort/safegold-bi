$(document).ready(function() {

	// show success message after form submit
	$(document).ready(function() {
		if (window.location.href.indexOf("contact-success") > -1) {
			$.fancybox.open($("#contact-success"));
		};
	});

	// hide items ons scroll
	$(document).on('scroll', function() {
		if ($(this).scrollTop() > 100) {
			$('.floating-whatsapp').fadeIn(900);
		} else {
			$('.floating-whatsapp').fadeOut(300);
		}
	});

	// animated numbers
	var waypoint = new Waypoint({
		element: $('.purple-box'),
		handler: function(direction) {
			$('.counter').each(function () {
				$(this).prop('Counter', 0).animate({
						Counter: $(this).data('value')
					}, {
					duration: 5000,
					easing: 'swing',
					step: function (now) {                      
						$(this).text(this.Counter.toFixed(0));
					}
				});
				waypoint.disable();
			});
		},
		offset: '90%'
	});

	// mask for the phone number
	var cleave = new Cleave("input[type='tel']", {
		blocks: [0, 2, 4, 4],
		delimiters: ['(', ') ', ' - ',' '],
		numericOnly: true,
		delimiterLazyShow: true
	});

	// validate form
	$("#contact-form").validate({
		highlight: function (element){
			$(element).closest(".form-line").addClass("error");
		},
		unhighlight: function (element){
			$(element).closest(".form-line").removeClass("error");
		}
	});

});