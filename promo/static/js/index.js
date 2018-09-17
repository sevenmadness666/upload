// 个人中心 小按钮点击
$(document).ready(function(){
  $(".user .sbtn button , .user .sbtn .btn").click(function(){
      $('.user .sbtn button , .user .sbtn .btn').removeClass('active'),
      $(this).addClass('active');
  });
});

//返回頂端
$(window).scroll(function(){
    if($(this).scrollTop() >= 50){
        $('#go_top').fadeIn("fast");
    }
    else{
        $('#go_top').fadeOut("fast");
    }
});
$('#go_top').click(function(){
    $('body,html').animate({
        scrollTop : 0
    }, 500);
});