function openNav(){document.getElementById("mySidenav").style.width="250px";document.getElementById("main").style.marginLeft="250px";}
function closeNav(){document.getElementById("mySidenav").style.width="0";document.getElementById("main").style.marginLeft="0";}
function iconanimated(x){x.classList.toggle("change");}
function myFunction(){document.getElementById("DropdownSrc").classList.toggle("show-src");}
var dropdown=document.getElementsByClassName("dropdown-btn");var i;for(i=0;i<dropdown.length;i++){dropdown[i].addEventListener("click",function(){this.classList.toggle("active");var dropdownContent=this.nextElementSibling;if(dropdownContent.style.display==="block"){dropdownContent.style.display="none";}else{dropdownContent.style.display="block";}});}
const cardContainer1=document.querySelector('.card-container-uni');const prevBtn1=document.querySelector('.prev-btn-uni');const nextBtn1=document.querySelector('.next-btn-uni');prevBtn1.addEventListener('click',()=>{cardContainer1.scrollBy({left:-350,behavior:'smooth'});});nextBtn1.addEventListener('click',()=>{cardContainer1.scrollBy({left:350,behavior:'smooth'});});const cardContainer2=document.querySelector('.card-container-sf');const prevBtn2=document.querySelector('.prev-btn-sf');const nextBtn2=document.querySelector('.next-btn-sf');let isDown=false;let startX;let scrollLeft;cardContainer2.addEventListener('mousedown',(e)=>{isDown=true;startX=e.pageX-cardContainer2.offsetLeft;scrollLeft=cardContainer2.scrollLeft;});cardContainer2.addEventListener('mouseleave',()=>{isDown=false;});cardContainer2.addEventListener('mouseup',()=>{isDown=false;});cardContainer2.addEventListener('mousemove',(e)=>{if(!isDown)return;e.preventDefault();const x=e.pageX-cardContainer2.offsetLeft;const walk=(x-startX)*3;cardContainer2.scrollLeft=scrollLeft-walk;});prevBtn2.addEventListener('click',()=>{cardContainer2.scrollBy({left:-350,behavior:'smooth'});});nextBtn2.addEventListener('click',()=>{cardContainer2.scrollBy({left:350,behavior:'smooth'});});const cardContainer3=document.querySelector('.card-container-sl');const prevBtn3=document.querySelector('.prev-btn-sl');const nextBtn3=document.querySelector('.next-btn-sl');let isDown3=false;let startX3;let scrollLeft3;cardContainer3.addEventListener('mousedown',(e)=>{isDown3=true;startX3=e.pageX-cardContainer3.offsetLeft;scrollLeft3=cardContainer3.scrollLeft;});cardContainer3.addEventListener('mouseleave',()=>{isDown3=false;});cardContainer3.addEventListener('mouseup',()=>{isDown3=false;});cardContainer3.addEventListener('mousemove',(e)=>{if(!isDown3)return;e.preventDefault();const x=e.pageX-cardContainer3.offsetLeft;const walk=(x-startX3)*3;cardContainer3.scrollLeft=scrollLeft3-walk;});prevBtn3.addEventListener('click',()=>{cardContainer3.scrollBy({left:-350,behavior:'smooth'});});nextBtn3.addEventListener('click',()=>{cardContainer3.scrollBy({left:350,behavior:'smooth'});});