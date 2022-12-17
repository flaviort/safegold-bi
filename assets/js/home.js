$(document).ready(function() {

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