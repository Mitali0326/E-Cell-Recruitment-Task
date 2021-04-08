document.getElementById("toggle-button").addEventListener("click" , function(){
  var nav = document.getElementById("nav").classList.toggle
  ("toggle-style");
 var x = document.getElementById("icon").classList.value; 
 if(x == "fas fa-bars"){
  document.getElementById("icon").classList.remove("fa-bars");
  document.getElementById("icon").classList.add("fa-times");
  // document.getElementById("icon").classList.remove("right");

 }
 else if(x == "fas fa-times"){
  document.getElementById("icon").classList.remove("fa-times");
  document.getElementById("icon").classList.add("fa-bars");
  // document.getElementById("icon").classList.add("right");


 }
});
$(function () {
  $(document).scroll(function () {
    var nav = $(".mynav");
    var topbtn =$("#topbtn")
    nav.toggleClass('scrolled', $(this).scrollTop() > nav.height());
    topbtn.toggleClass('gotopbtn', $(this).scrollTop() > nav.height());

  });
});
AOS.init();
