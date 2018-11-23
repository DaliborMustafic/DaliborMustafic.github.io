
document.onload = replace ();	
	function replace(){

		var text = document.getElementsByClassName("textZusammen")

		for( var i = 0; i< text.length; i++){

			text[i].innerHTML.replace(/:/,"<br>")
		}

	}

