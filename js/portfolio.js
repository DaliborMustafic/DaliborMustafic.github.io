$(".coffe").ripples({

	resolution: 512,
	dropRadius: 5,
	perturbance: 0.01,

});

$(window).on('resize', function(){
      var win = $(this);
      if (win.width() < 993) { 

      $('#coffeWhole').addClass('mobile');

      }
    else
    {
        $('#coffeWhole').removeClass('mobile');
    }

});

