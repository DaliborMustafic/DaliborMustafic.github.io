

const d = new Date();
let cur_year = d.getFullYear();
let birth_year = 1985
let difference = cur_year - birth_year



function toggle_visible(id){
    if(document.getElementById(id).style.display == 'none'){
        document.getElementById(id).style.display = "block"
    }else{
        document.getElementById(id).style.display = "none"
    }
  

}