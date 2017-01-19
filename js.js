
  $(document).ready(contacts);
  function contacts() {	
		$(".contacts").click( //клик
     function(){
	$('h1').text('CONTACTS'); 
	$('section').html('<h2>Новый заголовок</h2><p>Новый текст, который содержит <a href="#">другую ссылку</a>.</p>');
	$('.contacts').css('background','#29c5e6');
	$('.contacts a').css('color','#FFF');
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
  

