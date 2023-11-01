$(function() {
    console.log( "ready!" );
  
  //click the eye icon w/class reveal 
  $(".reveal").on('click',function() {
    let $pwd = $(".pwd");
    
    if ($pwd.attr('type') === 'password') {
        $pwd.attr('type', 'text');
       $(this).children('i').addClass('bi-eye-slash-fill').removeClass('bi-eye-fill');
    } else {
        $pwd.attr('type', 'password');
     $(this).children('i').removeClass('bi-eye-slash-fill').addClass('bi-eye-fill');
    }
});
  
});
