$(function(){

  $('.toggle-menu').click(function(){
    $('nav').toggleClass('active');
  });
  
  
  $('ul li').click(function(){
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
  });
 
});
