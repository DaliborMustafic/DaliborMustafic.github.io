//wenn wir auf  New Game clicken  werden 6 farben
var numSquares = 6 //anzahl der squares die variirt wenn man auf Easy oder hard clickt
var colors = ColorArray(numSquares) // array  von farben die generiert werden mit der anzahl der squares und in die variable colors gescpeichert werden
var pickedColor = colors[Math.floor(Math.random()*colors.length)];//die farbe wird random von den array Colors gespeichert




var buttonEasy = document.getElementById("easy")
var titleRgb = document.getElementById("titleRgbColor")
var h1 = document.querySelector("h1")
var splice = document.querySelectorAll("button")
var buttonNewGame = document.getElementById("newGame")
var squares = document.querySelectorAll(".square")
var tryitAgain = document.querySelector("#tryitAgain")



titleRgb.textContent = pickedColor


splice[2].classList.add("buttonsHover")// default ist es auf hard(button)

tryitAgain.textContent = " "


//splice (new game, easy , hard) Buttons
for (var i = 0 ; i<splice.length;i++){

	splice[i].addEventListener("click",function(){

		splice[0].classList.remove ("buttonsHover")//löschen aller farben damit der hover efekt funktioniert
		splice[1].classList.remove ("buttonsHover")
		splice[2].classList.remove ("buttonsHover")
		this.classList.add("buttonsHover")
		this.textContent ==="Leicht"? numSquares =3: numSquares=6;
		reset();
	})
}

//end splice




//Main




for (var i =  0 ; i <squares.length; i++){
	

	squares[i].style.backgroundColor= colors[i];

	squares[i].addEventListener("click",function(){

		if(pickedColor == this.style.backgroundColor){

			for (var i =0; i< numSquares ;i++){ // kleiner als numSquares weil wenn es easy mode ist dan darf es nur die 3 färben

				squares[i].style.backgroundColor= pickedColor;
				h1.style.backgroundColor = pickedColor;
				tryitAgain.textContent = " Du hast gewonnen !!! ";
				splice[0].textContent = "Nochmal spielen?"

				for(var t=0;t<splice.length;t++){

					splice[t].style.backgroundColor = pickedColor;

				}
				
				// splice[i].style.backgroundColor = pickedColor;

			}

		}else{


			this.style.backgroundColor = "#232323"
			tryitAgain.textContent = "Versuch es Nochmal !"
		}

	})

}



//end Main



buttonNewGame.addEventListener("click",function(){
	reset();
})



function reset (){
	colors = ColorArray(numSquares);
	pickedColor = colors[Math.floor(Math.random()*colors.length)]
	titleRgb.textContent = pickedColor;
	newGame.textContent ="Neue Farben"
	for (var i = 0; i< squares.length;i++){
		if(colors[i]){
			
			squares[i].style.background =colors[i]
		}else{
			squares[i].style.background ="#232323"
		}
	//add initialcolors to squares
	// squares[i].style.backgroundColor= colors[i];
	//add click listeners ti swuares}
		}
	h1.style.backgroundColor = "steelblue";
	tryitAgain.textContent = " "
	splice[0].removeAttribute("style");
	splice[1].removeAttribute("style");
	splice[2].removeAttribute("style");
}

function rgbRandomColor(){ //funktija za generisanje random colorsa
 //skup boja koje se generisu (array)


	r = Math.floor(Math.random()*256);
	g = Math.floor(Math.random()*256);
	b = Math.floor(Math.random()*256);
	return "rgb("+r+", " + g + ", "+ b + ")";

}



function ColorArray(num){  //mach ein Array aus RGB farben
	arr = []
	for (var i =0; i< num;i++){
		arr.push(rgbRandomColor())

	}
	return arr;
}




function aimColor(){ //boja koju moramo da pogodimo

	random = Math.floor(Math.random()*colors.length)
	return ColorArray(numSquares)[random];//colorArray je Array sa farbama kocki 
}



//Title se njenja sa genereisanjem novih boja
//Ako kliknemo Easy onda mora samo da prikaze 3 kocke i mesa novoboje
//ako kliknemo na Hard onda prikazuje 6 imesa novo boje


//ako kliknemo na kocku (a ona nije ta kocka koju moramo da pogodimo ) span pise Try it again
//ona mora da se promeni background na #232323.

// ako je kliknuta kocka ta kocka koju moramo da pogodino onda se menjaju sve 6 kocke
// u istu boju i na span(message ) pise da si i pobedio .
