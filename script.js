

const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.getElementById("container");

open.addEventListener("click", () => {
    container.classList.add("active");
});

close.addEventListener("click", () => {
    container.classList.remove("active");
});

















 /*-----singl product details-----*/
 let ProductImg = document.getElementById("ProductImg");
 let SmallImg = document.getElementsByClassName("small-img");

 SmallImg[0].onclick = function(){
     ProductImg.src = SmallImg[0].src; SmallImg[0].style.border ='1px solid black';
     SmallImg[1].style.border ='none';
     SmallImg[2].style.border ='none';
     SmallImg[3].style.border ='none';
 }
 SmallImg[1].onclick = function(){
    ProductImg.src = SmallImg[1].src; SmallImg[1].style.border ='1px solid black';
    SmallImg[0].style.border ='none';
     SmallImg[2].style.border ='none';
     SmallImg[3].style.border ='none';
}
SmallImg[2].onclick = function(){
    ProductImg.src = SmallImg[2].src; SmallImg[2].style.border ='1px solid black';
    SmallImg[1].style.border ='none';
    SmallImg[0].style.border ='none';
    SmallImg[3].style.border ='none';
}
SmallImg[3].onclick = function(){
    ProductImg.src = SmallImg[3].src; SmallImg[3].style.border ='1px solid black';
    SmallImg[0].style.border ='none';
    SmallImg[1].style.border ='none';
    SmallImg[2].style.border ='none';
}