	function getOption() {


	  	var ek 	= document.getElementById("mySelect");
	  	var nf 	= document.getElementById("nf")
	  	var rip = document.getElementById("rip")
	  	var ccpk1 = document.getElementById("ccpk1")
	  	var ccpk2 = document.getElementById("ccpk2")
	  	var ispk1 = document.getElementById("ispk1")
	  	var ispk2 = document.getElementById("ispk2")
	  	//anbruch variablen
	  	var ccpk1A 	= document.getElementById("ccpk1A")
	  	var ccpk2A = document.getElementById("ccpk2A")
	  	var ispk1A = document.getElementById("ispk1A")
	  	var ispk2A = document.getElementById("ispk2A")
	  	var ccSalfelden = document.getElementById("30")
	  	var intercenrvice = document.getElementById("31")
	  	var imst = document.getElementById("65")
	  	//calculation normal preis

	  	var nfPreis = (ek.value * 1.30).toFixed(2);
		var ripPreis = ((ek.value * 1.30)*1.45).toFixed(2);
		var ccpk1Preis = (ek.value * 1.45).toFixed(2);
		var ccpk2Preis = (ek.value * 1.42).toFixed(2);
		var ispk1Preis = (ek.value * 1.55).toFixed(2);
		var ispk2Preis = (ek.value * 1.52).toFixed(2);
		//anbruch calculation

	  	var ccpk1APreis = ((ek.value * 1.45)*1.10).toFixed(2) ;
		var ccpk2APreis = (ek.value * 1.42).toFixed(2)
		var ispk1APreis = ((ek.value * 1.55)*1.10).toFixed(2)
		var ispk2APreis = (ek.value * 1.52).toFixed(2)
		var ccSalfeldenPreis = (ek.value * 1.45).toFixed(2)
		var intercenrvicePreis =(ek.value * 1.55).toFixed(2)
		var imstPreis = (ek.value * 1.45).toFixed(2)


		var listaNeRundCena= [
				nfPreis,
				ccpk2Preis,
				ispk2Preis,
				ccpk2APreis,
				ispk2APreis
					]

		var listaPoljaNeRund = [
					nf,
					ccpk2,
					ispk2,
					ccpk2A,
					ispk2A
					]

		
		var listaCena= [
				
				ripPreis,
				ccpk1Preis,
				ispk1Preis,
				ccpk1APreis,
				ispk1APreis,
				ccSalfeldenPreis,
				intercenrvicePreis,
				imstPreis

						]

		var listaPolja = [
				
				rip,
				ccpk1,
				ispk1,
				ccpk1A,
				ispk1A,
				ccSalfelden,
				intercenrvice,
				imst

						]





		for(var i = 0 ; i< listaCena.length ; i++){
			console.log(listaCena[i] + " Rund"  )

			var drugiBrojPosleTacke = listaCena[i].slice(3,4)
			var odPrvogDoPrvogPosleNule = listaCena[i].slice(0,3)
			var prviBrojPosleTacke = listaCena[i].slice(2,3)
			var prviBrojSaTackom = listaCena[i].slice(0,2)
			var prviBroj = listaCena[i].slice(0,1)

			if (parseInt(drugiBrojPosleTacke) >= 5 &&  parseInt(drugiBrojPosleTacke) <= 9){//ako je drugi broj posle tacke veci od 5 a manji od 9 onda

				listaCena[i] =  odPrvogDoPrvogPosleNule + "9" // onda drugi broj posle nule 9
			}else if (parseInt(drugiBrojPosleTacke) >= 0 &&  parseInt(drugiBrojPosleTacke) < 5 ){

				if ( parseInt(prviBrojPosleTacke) > 0  ) {//ako je prvi broj posle tacke veci od 0

					listaCena[i] = prviBrojSaTackom + (parseInt(prviBrojPosleTacke)-1).toString() + "9"
				}else if( parseInt(prviBrojPosleTacke) == 0 ){

					listaCena[i] = (parseInt(prviBroj) -1 ).toString() + ".99"

				}else{
					alert("something went wrong")
				}			

			}
		 	
			listaPolja[i].value = listaCena[i] 
		}


		for (var i = 0 ; i < listaNeRundCena.length; i++){
			console.log("nicht rund " +listaPoljaNeRund[i] )

			listaPoljaNeRund[i].value = listaNeRundCena[i]
		}


	}



function clearAll(){

	  	var nf 	= document.getElementById("nf")
	  	var rip = document.getElementById("rip")
	  	var ccpk1 = document.getElementById("ccpk1")
	  	var ccpk2 = document.getElementById("ccpk2")
	  	var ispk1 = document.getElementById("ispk1")
	  	var ispk2 = document.getElementById("ispk2")
	  	//anbruch variablen
	  	var ccpk1A 	= document.getElementById("ccpk1A")
	  	var ccpk2A = document.getElementById("ccpk2A")
	  	var ispk1A = document.getElementById("ispk1A")
	  	var ispk2A = document.getElementById("ispk2A")
	  	var ccSalfelden = document.getElementById("30")
	  	var intercenrvice = document.getElementById("31")
	  	var imst = document.getElementById("65")

			var listaPolja = [
				
				rip,
				ccpk1,
				ispk1,
				ccpk1A,
				ispk1A,
				ccSalfelden,
				intercenrvice,
				imst,
				nf,
				ccpk2,
				ispk2,
				ccpk2A,
				ispk2A

						]

	for(var i = 0 ; i<listaPolja.length;i++){

		listaPolja[i].value = ""

	}


}



	