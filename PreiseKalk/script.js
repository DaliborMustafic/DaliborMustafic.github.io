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
	
	var listeNichtRundPreise= [
			nfPreis,
			ccpk2Preis,
			ispk2Preis,
			ccpk2APreis,
			ispk2APreis
				]

	var listeFelderNichtRund = [
				nf,
				ccpk2,
				ispk2,
				ccpk2A,
				ispk2A
				]

	
	var listePreise= [
			
			ripPreis,
			ccpk1Preis,
			ispk1Preis,
			ccpk1APreis,
			ispk1APreis,
			ccSalfeldenPreis,
			intercenrvicePreis,
			imstPreis

					]

	var listeFelder = [
			
			rip,
			ccpk1,
			ispk1,
			ccpk1A,
			ispk1A,
			ccSalfelden,
			intercenrvice,
			imst

					]




	//für felder die gerundet werden sollen
	for(var i = 0 ; i< listePreise.length ; i++){
		
		var punkt = listePreise[i].indexOf(".");
		var zweiteZahlNachKomma =  listePreise[i].slice(punkt + 2 ,punkt + 3);

		if ((zweiteZahlNachKomma) >= 5 &&  (zweiteZahlNachKomma) <= 9 )
		{
			listePreise[i] = (parseFloat(listePreise[i])) + (Math.abs(parseFloat("0.0" + (zweiteZahlNachKomma)) - 0.09))
		}else if ((zweiteZahlNachKomma) >= 0 &&  (zweiteZahlNachKomma) < 5 )
		{
			listePreise[i] = (parseFloat(listePreise[i])) - Math.abs(parseFloat("0.0" + (zweiteZahlNachKomma)) + 0.01)
		}
		listeFelder[i].value = listePreise[i].toFixed(2)
	}

	
	//für felder die nicht gerundet werden sollen
	for (var i = 0 ; i < listeNichtRundPreise.length; i++)
	{
		listeFelderNichtRund[i].value = listeNichtRundPreise[i]
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

		var listeFelder = [
			
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

	for(var i = 0 ; i<listeFelder.length;i++){

		listeFelder[i].value = ""

	}


}



	