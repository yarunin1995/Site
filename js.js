/*$(document).ready(init);
function init() {	
		$("#elem").click(
     function(){
	$('h1').text('changed Value');
	 $('h1').css('color','red');
	 
	 }
  );
  }*/
  $(document).ready(contacts);
  function contacts() {	
		$("#contact").click(
     function(){
	$('h1').text('CONTACTS'); 
	$('section').html('<h2>Новый заголовок</h2><p>Новый текст, который содержит <a href="#">другую ссылку</a>.</p>');
	$('#contact').css('background','#29c5e6');
	$('#contact').css('color','#FFF');
	$('#A').css('color','#FFF');
	 }
  );
  }
  $(function() {
 
$(window).scroll(function() {
 
if($(this).scrollTop() != 0) {
 
$('#toTop').fadeIn();
 
} else {
 
$('#toTop').fadeOut();
 
}
 
});
 
$('#toTop').click(function() {
 
$('body,html').animate({scrollTop:0},800);
 
});
 
});
  

