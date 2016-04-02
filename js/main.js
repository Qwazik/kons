
	$('#menuTrigger').on('click', function(){
		$('.menu').slideToggle('.menu')
	})

	var th = $(this);
	$('.menu li').hover(function(){
			$(this).children('ul').toggleClass('active');
		},
		function(){
			$(this).children('ul').toggleClass('active');
		}
	)

	$('.triangle').on('click', function(){
		$(this).next().toggleClass('active');
	})

