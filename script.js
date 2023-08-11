let img = document.querySelector('.popup img');
let popup = document.querySelector('.popup');
let cancel = document.querySelector(".popup span");
let images = document.querySelectorAll("img")

for(i of images){
    i.onclick = function(){
        popup.style.display = 'block';
       img.src =this.getAttribute('src');
    }
}

cancel.onclick = function(){
    popup.style.display  ="none"
}