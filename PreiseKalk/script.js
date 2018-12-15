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
	  	ek = ek.value.replace(",",".")
	  	var nfPreis = (ek * 1.30).toFixed(2);
		var ripPreis = ((ek * 1.30)*1.45).toFixed(2);
		var ccpk1Preis = ((ek * 1.45).toFixed(2));
		var ccpk2Preis = (((ek * 1.45)*0.97).toFixed(2));
		var ispk1Preis = ((ek * 1.55).toFixed(2));
		var ispk2Preis = (((ek * 1.55)*0.97).toFixed(2));
		//anbruch calculation

	  	var ccpk1APreis = (((ek * 1.45)*1.10).toFixed(2)) ;
		var ccpk2APreis = (((ek * 1.45)*0.97).toFixed(2))
		var ispk1APreis = (((ek * 1.55)*1.10).toFixed(2))
		var ispk2APreis = (((ek * 1.55)*0.97).toFixed(2))
		var ccSalfeldenPreis = ((ek * 1.45).toFixed(2))
		var intercenrvicePreis =((ek * 1.55).toFixed(2))
		var imstPreis = ((ek * 1.45).toFixed(2))
		
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
			

			var tacka = listaCena[i].indexOf(".");
			var drugiBrojPosleTacke =  listaCena[i].slice(tacka + 2 ,tacka + 3);

			if ((drugiBrojPosleTacke) >= 5 &&  (drugiBrojPosleTacke) <= 9 )

			{//ako je drugi broj posle tacke veci od 5 a manji od 9 onda
				
				
				
				listaCena[i] = (parseFloat(listaCena[i])) + (Math.abs(parseFloat("0.0" + (drugiBrojPosleTacke)) - 0.09))


			}else if ((drugiBrojPosleTacke) >= 0 &&  (drugiBrojPosleTacke) < 5 )

			{
				console.log("ovo je rund cena manja od 5 pre " + listaCena[i] )

				listaCena[i] = (parseFloat(listaCena[i])) - Math.abs(parseFloat("0.0" + (drugiBrojPosleTacke)) + 0.01)

				console.log("ovo je rund cena manja od 5  posle" + listaCena[i] )
				
			}
		 	
			listaPolja[i].value = listaCena[i].toFixed(2)
		}


		for (var i = 0 ; i < listaNeRundCena.length; i++){

			

			listaPoljaNeRund[i].value = listaNeRundCena[i]
			console.log("ovo nije rund cena   " + listaNeRundCena[i] )
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



	