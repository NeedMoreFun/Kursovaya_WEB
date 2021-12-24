src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js">
function slowScroll(id) {
     $('html, body').animate({scrollTop: $(id).offset().top}, 500);
 }
document.getElementById('mess_send').addEventListener('click', function (){
      alert('Сообщение отправлено!');
      window.location.reload(true);
});
