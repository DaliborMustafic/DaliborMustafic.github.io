            
window.onload  = function(){

    getNewMovies();
    

} ;


let input = document.getElementById("woeid");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   getMovies();
   
 
  }
});

let clipID //globale letiable für  youtube ID

let movieTitle = ""; //Globale variable für youtube API 


function getYoutbe(movie){
    console.log(movie)

   


        fetch
        (`https://www.googleapis.com/youtube/v3/search?q=${movie + "trailer"}&key=AIzaSyCHT5xbhlRkZH42SyUWZ0T3xklNvdoKLrE&part=snippet`)
        .then (result=> {
                                               
                return result.json();

            })
        .then(clip => {


            clipID = clip.items[0].id.videoId

            
            
        })

        .catch(error => console.log(error))

        
        

    

}



function showNewMovies(){

	

    let movieList = document.getElementsByClassName("items")[0].children

    setTimeout(function(){
        console.log(movieTitle  + "from get youtube settimeout")

    	getYoutbe(movieTitle)



    },500)
        

    for(let i = 0 ; i < movieList.length; i++){
        let movieImage = document.getElementsByClassName("items")[0].children[i].children[0] 
        let movieID = document.getElementsByClassName("items")[0].children[i].children[0]

        movieImage.addEventListener("click",function(e){

            let id = this.id


            fetch
            (`https://api.themoviedb.org/3/movie/${id}?api_key=cb5bdc9bad7c681f9ac1635d13afe249`)//fetch for the plot
            .then (result=> {
                                               
                return result.json();

            })
            .then(movie =>{

            	movieTitle = movie.title

                console.log(movieTitle + " wurde gesetzt")
                

                
              
                let poster = ("https://image.tmdb.org/t/p/w500" + movie.poster_path)
                
            
                setTimeout(function(){
                                document.getElementById("textbre").innerHTML = `

                                <div  class="container box"> 
                                <h2 class ="titel" style="text-decoration:underline;color:white;"> ${movie.title} </h2>

                                <img class="rounded mx-auto d-block img-thumbnail" src="${poster}" >
                                <p id = "${movie.original_title}"> 
                                 </p>
                                 
                                   
                                
                                <div  class = "newMovies">

                                <div id="${movie.id}"> 

                                <p> Plot : ${movie.overview} </p>

                                 ${movie.genres.length > 0 ? `<p> Genre : ${movie.genres[0].name} </p> ` : `<p> Genre : Not in the Database </p> `}

                                <a target="_blank" rel="noopener noreferrer"  href="https://www.imdb.com/title/${movie.imdb_id}/"><img src="img/imdb.png" style="height:50px;width:50px;" ></a>

                               

                                <p> Release Date : ${movie.release_date} </p>

                                <div class="vid">

                                     <iframe class="vidEbeded" src="http://www.youtube.com/embed/${clipID}"
                                    frameborder="0" allowfullscreen></iframe>
                        
                        
                                </div>

                                

                                


                                </div>

                                </div>



                                    `
                                },1500)
                           



            })  

            
            
        })

       
    }



}



function getNewMovies(){
    let today = new Date();

    let pastDate = today.getDate() - 7;

    today.setDate(pastDate);

  
    let dd = String(today.getDate()).padStart(2, '0');
    
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-"+ dd;


    fetch
    (`https://api.themoviedb.org/3/discover/movie?api_key=cb5bdc9bad7c681f9ac1635d13afe249&primary_release_date.gte=${today}`)
    .then (result=> {
                
                    
        return result.json();
                   
    })
    .then(kino => {

        for(let i = 0 ; i < kino.results.length ; i ++){
            let poster = ("https://image.tmdb.org/t/p/w500" + kino.results[i].poster_path)





            if(kino.results[i].poster_path != null ){


                document.getElementsByClassName("items")[0].innerHTML+= `
                <div class="items">

                <img onclick="showNewMovies()" id="${kino.results[i].id}" title="${kino.results[i].title}" src=${poster} style:"cursor: pointer;">

                </div>


                `

            }
            else{

            }
          

        }
        
    })
    .catch(error => console.log(error))


}





function getMovies(){


    document.getElementById("textbre").innerHTML = "";
    wid = document.getElementById("woeid") ; 
    titel = wid.value;

    let posterBaseUrl = "https://image.tmdb.org/t/p/w500"
  
                fetch
                (`https://api.themoviedb.org/3/search/movie?api_key=cb5bdc9bad7c681f9ac1635d13afe249&language=en-US&query=${titel}&page=1&include_adult=false`)
                .then (result=> {
                
                    
                    return result.json();
                   
                })
                .then(data => {

                    

                	for (let i = 0 ; i < data.results.length ; i++){

                        let movie = data.results[i]
                        

                        let posterUrl = posterBaseUrl + movie.poster_path

         

                        if(movie.poster_path != null){

                            document.getElementById("textbre").innerHTML+= `

                                <div  class="container box"> 
                                <h2 class ="titel" style="text-decoration:underline;color:white;"> ${movie.title} </h2>

                                <img class="rounded mx-auto d-block img-thumbnail" src="${posterUrl}" >
                                <p id = "${movie.original_title}"> 
                                 </p>
                                 
                                    <img onclick="getPlot()"style="height:30px;width:30px;" title="Show Details with Doubleclick"class ="mx-auto d-block arow" src="img/down-arrow.png">
                                
                                <div  class="plot">

                                <div id="${movie.id}"> 
                               
                                </div>

                                </div>


                            `

                        }



                	}
                
                })
                .catch(error => console.log(error))

            }

function getPlot(){


   

    
            
    //alle img im array
    let arowIcon = document.getElementsByClassName("arow") ;

    setTimeout(function(){
        getYoutbe(movieTitle)

        console.log("getyoutube wurde aufgerufen")



    },1000)

    //array durchlaufen und wenn der arrow geclickt ist dann 
        for (let i = 0 ; i < arowIcon.length ; i ++){

        arowIcon[i].addEventListener("click",function(e){

       
 

            //die classe display block;
            this.parentElement.lastElementChild.classList.toggle("plotShow");
            
            
           let movieId =  this.parentElement.children[4].firstElementChild.id


            fetch
            (`https://api.themoviedb.org/3/movie/${movieId}?api_key=cb5bdc9bad7c681f9ac1635d13afe249`)//fetch for the plot
            .then (result=> {
                
                                               
                return result.json();
               

            })

            .then(movie => {
                 movieTitle = movie.title
                 console.log(movieTitle + " variable gesetzt")




                setTimeout(function(){

                    



                    document.getElementById(movie.id).innerHTML = 
                        `
                    <p>${movie.genres.length > 0 ? `<p> Genre : ${movie.genres[0].name} </p> ` : `<p> Genre : Not in the Database </p> `}</p>

                    <a target="_blank" rel="noopener noreferrer"  href="https://www.imdb.com/title/${movie.imdb_id}/"><img src="img/imdb.png" style="height:50px;width:50px;" ></a>

                    <p>Overview: ${movie.overview}</p>

                    <p> Release Date : ${movie.release_date} </p>


                     <div class="vid">


                       <iframe class="vidEbeded" src="http://www.youtube.com/embed/${clipID}"
                        frameborder="0" allowfullscreen></iframe>

                            
                    </div>


                    `
                },1500)
               



            })

            e.stopPropagation();





        })


    }


}




