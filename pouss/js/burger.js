
let iconElt = document.getElementById('burger');

iconElt.addEventListener('click',function(){
menuElt = document.querySelector('ul.menu');

/*si menuElt a une classe visible
alors on la supprime 
sinon on ajoute une classe is_visible*/
if(menuElt.classList.contains('is_visible')){
    menuElt.classList.remove('is_visible')
}else{
    menuElt.classList.add('is_visible');
}


console.log(menuElt)
});
