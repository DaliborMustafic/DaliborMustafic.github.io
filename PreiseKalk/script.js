
var Felder = (function(){


	return {
		getInput : function() {

			return{

				ek : document.getElementById("mySelect"),
				 nf: document.getElementById("nf"),
			  	 rip: document.getElementById("rip"),
			  	 ccpk1: document.getElementById("ccpk1"),
			  	 ccpk2: document.getElementById("ccpk2"),
			  	 ispk1: document.getElementById("ispk1"),
			  	 ispk2: document.getElementById("ispk2"),
			  	 ccpk1A: document.getElementById("ccpk1A"),
			  	 ccpk2A: document.getElementById("ccpk2A"),
			  	 ispk1A: document.getElementById("ispk1A"),
			  	 ispk2A: document.getElementById("ispk2A"),
			  	 ccSalfelden: document.getElementById("30"),
			  	 intercenrvice: document.getElementById("31"),
			  	 imst: document.getElementById("65")

			}

		}

	}

})();



function calc() {

	Feld = Felder.getInput()


  	//calculation normal preis
  	ekReplaced = Feld.ek.value.replace(",",".")



	var nfPreis = (ekReplaced * 1.30).toFixed(2);
	var ripPreis = ((ekReplaced * 1.30)*1.45).toFixed(2);
	var ccpk1Preis = ((ekReplaced * 1.45).toFixed(2));
	var ccpk2Preis = (((ekReplaced * 1.45)*0.97).toFixed(2));
	var ispk1Preis = ((ekReplaced * 1.55).toFixed(2));
	var ispk2Preis = (((ekReplaced * 1.55)*0.97).toFixed(2));
	//anbruch calculation

  	var ccpk1APreis = (((ekReplaced * 1.45)*1.10).toFixed(2)) ;
	var ccpk2APreis = (((ekReplaced * 1.45)*0.97).toFixed(2))
	var ispk1APreis = (((ekReplaced * 1.55)*1.10).toFixed(2))
	var ispk2APreis = (((ekReplaced * 1.55)*0.97).toFixed(2))
	var ccSalfeldenPreis = ((ekReplaced * 1.45).toFixed(2))
	var intercenrvicePreis =((ekReplaced * 1.55).toFixed(2))
	var imstPreis = ((ekReplaced * 1.45).toFixed(2))

	

	listeFelderNichtRund = [Feld.nf,Feld.ccpk2,Feld.ispk2,Feld.ccpk2A,Feld.ispk2A]

	listeFelder = [Feld.rip,Feld.ccpk1,Feld.ispk1,Feld.ccpk1A,Feld.ispk1A,Feld.ccSalfelden,Feld.intercenrvice,Feld.imst]

	listePreise= [ripPreis,ccpk1Preis,ispk1Preis,ccpk1APreis,ispk1APreis,ccSalfeldenPreis,intercenrvicePreis,imstPreis]

	listeNichtRundPreise = [nfPreis,ccpk2Preis,ispk2Preis,ccpk2APreis,ispk2APreis]





	var hauptProgramm = (function(){
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

	})();				

}



function clearAll(){


  	 listeFelderAll = listeFelder.concat(listeFelderNichtRund)


	for(var i = 0 ; i<listeFelderAll.length;i++){

		listeFelderAll[i].value = ""

	}


}



	