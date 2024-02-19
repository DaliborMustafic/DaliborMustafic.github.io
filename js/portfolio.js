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

const d = new Date();
let cur_year = d.getFullYear();
let birth_year = 1985
let difference = cur_year - birth_year
document.getElementById("myText").innerHTML = difference;
