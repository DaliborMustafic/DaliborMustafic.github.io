            
window.onload  = function(){
    window.today = getDate(14);
    window.nowDate = getDate(0);
    
    getNewMovies(`https://api.themoviedb.org/3/discover/movie?api_key=cb5bdc9bad7c681f9ac1635d13afe249&primary_release_date.gte=${today}`,false);
    showFavs(); 
} ;
//Wenn mann nach einen Film sucht in der search bar und enter drückt
(function onEnterSearch(){
    let input = document.getElementById("woeid");
        input.addEventListener("keyup", function(event) {
          if (event.keyCode === 13) {
           event.preventDefault();
           getMovies();
      }
    });
})()

//-------------------------------------------------->
function getDate(daysFromToday){
    let date = new Date();
    let futureDate = date.getDate() + daysFromToday;
    date.setDate(futureDate);
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = date.getFullYear();
    date = yyyy + "-" + mm + "-"+ dd;
    return date
}
//------------------------------------------------->

(function horizontalScrollPerClick() { 
    $('.horizon-prev').click(function(event) {
      event.preventDefault();
      $('#content').animate({
        scrollLeft: "-=750px"

      }, "slow");
    });
    //right
     $('.horizon-next').click(function(event) {
      event.preventDefault();
      $('#content').animate({
       scrollLeft: "+=750px"
      }, "slow");
    });
     //----

})()

//-------------------------------------------------------->
async function getApi(url){
    const result = await fetch(url);
    const data = await result.json();
    return data;
}


function getClip(id){
        window.clipID

        var url  = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=cb5bdc9bad7c681f9ac1635d13afe249&language=en-US`
        getApi(url).then( clip =>{
            if(clip.results[0] == undefined){
               clipID = "NoVid" 
            }
            else{

                clipID = clip.results[0].key
            } 
        })
}


function getNewMovies(url,arg){

    getApi(url).then(movie =>{
        setTimeout(function(){
            document.getElementsByClassName("items")[0].innerHTML = ""
            for(let i = 0 ; i < movie.results.length ; i ++){
                let poster = ("https://image.tmdb.org/t/p/w500" + movie.results[i].poster_path)
                if(movie.results[i].poster_path != null ){
                    document.getElementsByClassName("items")[0].innerHTML+= `
                        <div class="items">
                        <img   onclick="showNewMovies(event)" id="${movie.results[i].id}" title="${movie.results[i].title}" src=${poster}>
                        </div>`
                    }
                    else{
                    }
                }
        },400)

    })

    if (arg == true)  {setLinksInactive()};


}

function setLinksInactive(){
    var navLinks  =  document.getElementsByClassName("nav-item")
    for (var i = 0 ; i< navLinks.length ; i++){
        navLinks[i].className ="nav-item"
        navLinks[i].addEventListener("click",function(e){
            var linkText= this.innerText
            this.className = "nav-item active"
            document.getElementsByClassName("naslov")[0].innerText = linkText
        })

    }
}
function showNewMovies(event){

    console.log(event.target.id)
    setTimeout(function(){
        getClip(id)
        if(window.scrollY == 0 ){
                window.scrollBy({ top: 350, left: 0, behavior: "smooth" });
        }
    },700)      

    id = event.target.id
    var url = `https://api.themoviedb.org/3/movie/${id}?api_key=cb5bdc9bad7c681f9ac1635d13afe249&language=de-DEU`
    getApi(url).then(movie => {
    let poster = ("https://image.tmdb.org/t/p/w500" + movie.poster_path)
        setTimeout(function(){            
             document.getElementById("textbre").innerHTML = `
                <div  class="container box"> 
                    <h2 class ="titel" style="text-decoration:underline;color:white;"> ${movie.title} </h2>
                    <img class="rounded mx-auto d-block img-thumbnail" src="${poster}" >
                    <div  class = "newMovies">
                        <div id="${movie.id}"> 
                            <p> Plot : ${movie.overview} </p>
                            ${movie.genres.length > 0 ? `<p> Genre : ${movie.genres[0].name} </p> ` : `<p> Genre : Not in the Database </p> `}
                            <a target="_blank" rel="noopener noreferrer"  href="https://www.imdb.com/title/${movie.imdb_id}/"><img src="img/imdb.png" style="height:50px;width:50px;" ></a>
                            <p> Release Date : ${movie.release_date} </p>
                            <p> Vote average : ${movie.vote_average} / 10
                            <div class="fav float-right"> 
                              <a id="${movie.id}" onclick="addToFavNewMovies(event)"style ="color:white;cursor: pointer;"><img style="width: 30px;height: 30px;"src="img/star.png">Add Movie to Watchlist</a>
                            </div> 
                            <div class="vid">
                                ${clipID == "NoVid" ? `<h1> Kein Video verfügbar  </h1>` : `<iframe class="vidEbeded" src="http://www.youtube.com/embed/${clipID}"
                                frameborder="0" allowfullscreen></iframe>` }
                            </div>
                        </div>
                    </div>
                </div>`
        },1100)
    })



}
function getMovies(){
    document.getElementById("textbre").innerHTML = "";
    wid = document.getElementById("woeid") ; 
    let titel = wid.value;
    let posterBaseUrl = "https://image.tmdb.org/t/p/w500"

                var url = `https://api.themoviedb.org/3/search/movie?api_key=cb5bdc9bad7c681f9ac1635d13afe249&language=de-DEU&query=${titel}&page=1&include_adult=false`
                getApi(url).then(data =>{

                    console.log(data)
                    for (let i = 0 ; i < data.results.length ; i++){
                        let movie = data.results[i]
                        let posterUrl = posterBaseUrl + movie.poster_path
                        if(movie.poster_path != null){
                            document.getElementById("textbre").innerHTML+= `
                                <div  class="container box"> 
                                    <img id="movieTape" class="container" src="img/5d39fde889c4e.png">
                                    <h2 class ="titel" style="text-decoration:underline;color:white;"> ${movie.title} </h2>  
                                    <img class="rounded mx-auto d-block img-thumbnail" id="poster" src="${posterUrl}" >
                                    <p id = "${movie.original_title}"> 
                                    </p>
                                    <img onclick="getPlot(event)"style="height:50px;width:50px;" title="Show Details with Doubleclick"class ="mx-auto d-block arow" src="img/down-arrow.png">
                                    <div  class="plot">
                                        <div id="${movie.id}"> 
                                        </div>
                                    </div>
                                </div>
                                  <div class="fav float-right"> 
                                  <a id="${movie.id}" onclick="addToFav(event)"style ="color:white;cursor: pointer;"><img style="width: 30px;height: 30px;"src="img/star.png">Add Movie to Watchlist</a>
                                  </div> 
 
                            `
                        }
                    }
                })
}

function addToFav(event){
    

    var newFavs = {};
    var parent = event.target.parentElement.previousSibling.previousSibling.children
    var id = event.target.id 

    newFavs["name" + id] = parent[1].innerText
    newFavs["poster" + id] = parent[2].attributes[2].nodeValue
    newFavs["id" + id] = id


    var obj = JSON.parse( localStorage.getItem(id) ) || {};
    obj = newFavs   
    localStorage.setItem(id, JSON.stringify(obj));
    showFavs();  
}

function addToFavNewMovies(event){
    
    var newFavs = {};
    var parent = event.target.parentElement.parentElement.parentElement.parentElement.childNodes


    var id = event.target.id;
    newFavs["name" + id] = parent[1].innerText
    newFavs["poster" + id] = parent[3].currentSrc
    newFavs["id" + id] = id

    var obj = JSON.parse( localStorage.getItem(id) ) || {};
    obj = newFavs   
    localStorage.setItem(id, JSON.stringify(obj));
    showFavs();  

}


function showFavs(){
    var storage = JSON.stringify(localStorage)
    var fav = document.getElementsByClassName("liste")[0]
    fav.innerHTML = ""; //setzt es initial auf leer
        for (let i = 0; i < localStorage.length; i++){
          let key = localStorage.key(i);
          let value = JSON.parse( localStorage.getItem(key) ) || {}
          fav.innerHTML += `
          
          <p style="color:white; margin-left:5px;font-size:70%;"> ${value["name"+key]}  <img id ="${key}" onclick="delFavs(event)"class="trash" style="with:30px; height:30px;cursor: pointer"src="img/trash.png"></p>
          <img  style="with:100px;height:100px;margin-left:5px;"src="${value["poster"+key]}">
          <p class="favId" style="display:none"> ${key} </p>
          <hr>
         
          `

        }
}

function delFavs(event){

    var id = event.target.id
    localStorage.removeItem(id.trim())      
    showFavs();    
}

function displayFavs(){
    var menu = document.querySelector('.liste') 
    menu.classList.toggle('listeShow');
}


function getPlot(event){
    console.log(event.target.nextElementSibling.className)
    //alle img im array
    var id = event.target.parentElement.children[5].children[0].id
    getClip(id)
    if(event.target.nextElementSibling.className == "plot" ){
        event.target.nextElementSibling.className = "plotShow";
    }else{
        event.target.nextElementSibling.className = "plot"
    }
            
    var url = `https://api.themoviedb.org/3/movie/${id}?api_key=cb5bdc9bad7c681f9ac1635d13afe249&language=de-DEU`
    getApi(url).then(movie =>{
        document.getElementById(movie.id).innerHTML = `
            <p>${movie.genres.length > 0 ? `<p> Genre : ${movie.genres[0].name} </p> ` : `<p> Genre : Not in the Database </p> `}</p>
            <a target="_blank" rel="noopener noreferrer"  href="https://www.imdb.com/title/${movie.imdb_id}/"><img src="img/imdb.png" style="height:50px;width:50px;" ></a>
            <p>Overview: ${movie.overview}</p>
            <p> Release Date : ${movie.release_date} </p>
            <p> Vote average : ${movie.vote_average} / 10 </p>
            <div class="vid">
                <iframe class="vidEbeded" src="https://www.youtube.com/embed/${clipID}"
                    frameborder="0" allowfullscreen></iframe>
            </div>`

    }) 
}


//Scrollbar at click 
(function scroll() { 
    
    window.addEventListener('scroll', function(e) {
      last_known_scroll_position = window.scrollY;
      if(last_known_scroll_position > 400 ) {
        document.getElementsByClassName("navbar")[0].className = "container navbar navbar-expand-md navbar-dark fixed-top bg-dark justify-content-between"
      }
      if(last_known_scroll_position < 400) {
        document.getElementsByClassName("navbar")[0].className = "container navbar navbar-dark  bg-dark justify-content-between "
      }
    });
})()

$(window).resize(function() {
   
    var winWidth = $(window).width()

    if (winWidth < 1508){
         $('.listeShow').css('background', '#343a40')
    }else{

        $('.listeShow').css('background', 'rgba(128, 128, 128,0.2)')
    }
    ;

});


function openForm() {
  document.getElementById("myForm").style.display = "block";
};

function closeForm() {
  document.getElementById("myForm").style.display = "none";
};






/*(function () { //funktion zu speichern von favoriten

    var textFile = null, //textfile wird erst generiert
    makeTextFile = function (text) {
        var data = new Blob([text], {type: 'text/plain'});

        // If we are replacing a previously generated file we need to
        // manually revoke the object URL to avoid memory leaks.
        if (textFile !== null) {
          window.URL.revokeObjectURL(textFile);
        }

        textFile = window.URL.createObjectURL(data);

        return textFile;
      };


      var create = document.getElementById('create'),
        textbox = JSON.stringify(localStorage);

      create.addEventListener('click', function () {
        var link = document.getElementById('downloadlink');
        link.href = makeTextFile(textbox);
        link.style.display = 'block';
      }, false);

})();*/