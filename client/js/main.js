
(function ($) {
  "use strict";

  // Preloader (if the #preloader div exists)
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Smooth scroll for the navigation and links with .scrollto classes
  $('.main-nav a, .mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (! $('#header').hasClass('header-scrolled')) {
            top_space = top_space - 40;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.main-nav, .mobile-nav').length) {
          $('.main-nav .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

})(jQuery);




// custom js starts here


// get a challenge button! to action
let getChallengeBtn = document.querySelector("#getChallenge");
let closeItem = document.querySelector(".closeItem");
let getChallengeDiv = document.querySelector(".getChallengeDiv");
let challengeQuestion = document.querySelector(".challengeQuestion");
let challengeLink = document.querySelector(".challengeLink");

getChallengeBtn.addEventListener("click",e=>{
    // get the data from the server!
    fetch("/getChallenge")
      .then(response=>response.json())
      .then(data=>{
        challengeQuestion.textContent = data.name;
        challengeLink.href = data.link;
        getChallengeDiv.style.display = "block";
        getChallengeBtn.style.display = "none";
        closeItem.addEventListener("click",e=>{
          e.preventDefault();
          getChallengeDiv.style.display = "none";
          getChallengeBtn.style.display = "inline-block";
        });
        
      });
});

$(function() {
  $('#toggle-event').change(function() {
    if($(this).prop('checked')){
      challengeLink.style.display = "inline-block";
      styleCodeLinks("on");
      console.log("checked");
    }else{
      challengeLink.style.display ="none";
      console.log("not!");
      styleCodeLinks("off");
    }
  })
});

function styleCodeLinks(stateTog){
  let codeLinks = document.querySelectorAll(".goLink");
  codeLinks.forEach(codeLink=>{
    if(stateTog === "on"){
      codeLink.style.display = "inline-block";
    }else{
      codeLink.style.display = "none";
    }
  });
}

// dealing with list of algorithms!

let faq = document.querySelector("#faq-list");

function createLi(data){
  let li = document.createElement("li");
  let a1 = document.createElement("a");
  a1.setAttribute("class","collapsed");
  a1.href= data.link;
  a1.textContent = data.name;
  a1.setAttribute("target","_blank");

  // console.log(data);
  let span = document.createElement("span");
  span.textContent =  (data.state).toString();
  span.classList.add("hidden");

  // let a2 = document.createElement("a");
  // a2.textContent = "Code";
  // a2.setAttribute("target","_blank");
  // a2.href = data.link;

  // let button = document.createElement("button");
  // button.setAttribute("class","btn btn-warning");
  // button.textContent = "Done";

  li.append(a1,span);
  faq.appendChild(li);
  
};

let algos  = [];
// 
fetch("/loadAlgos")
  .then(response=>response.json())
  .then(data=>{
    algos = data;
    algos.forEach(alog=>{
      createLi(alog);
    });
  });


  // functionalities to be added !
  // Done btn functionality!
