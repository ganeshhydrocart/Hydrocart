/* popup forms show hide */
$(document).ready(function(){
$(".seller_reg_subbtn").click(function(){
$(".seller_otp").show();
$(".seller_reg, .seller_setpw, .seller_pw_success, .seller_login").hide();
});

$(".seller_otpsubbtn").click(function(){
$(".seller_setpw").show();
$(".seller_reg, .seller_otp, .seller_pw_success, .seller_login").hide();
});

$(".seller_pw_subbtn").click(function(){
$(".seller_pw_success").show();
$(".seller_reg, .seller_setpw, .seller_otp, .seller_login").hide();
});

$(".seller_pw_subbtn").click(function(){
$(".seller_pw_success").show();
$(".seller_reg, .seller_setpw, .seller_otp, .seller_login").hide();
});

$(".goback_to_login").click(function(){
$(".seller_login").show();
$(".seller_reg, .seller_setpw, .seller_otp, .seller_pw_success").hide();
});


$(".seller_forget_pw").click(function(){
$(".seller_fpw").show();
$(".seller_reg, .seller_setpw, .seller_otp, .seller_pw_success, .seller_login").hide();
});

$(".seller_fpw_mailphno").click(function(){
$(".seller_otp").show();
$(".seller_reg, .seller_setpw, .seller_fpw, .seller_pw_success, .seller_login").hide();
});

})
/* popup forms show hide end */






$(document).ready(function(){
$('.orders').click(function(){
$('.buy_again, .open_orders, .cancel_orders').removeClass("ordered_items_hdr_active");
$(this).addClass("ordered_items_hdr_active");
});
});

$(document).ready(function(){
$('.buy_again').click(function(){
$('.orders, .open_orders, .cancel_orders').removeClass("ordered_items_hdr_active");
$(this).addClass("ordered_items_hdr_active");
});
});

$(document).ready(function(){
$('.open_orders').click(function(){
$('.buy_again, .orders, .cancel_orders').removeClass("ordered_items_hdr_active");
$(this).addClass("ordered_items_hdr_active");
});
});

$(document).ready(function(){
$('.cancel_orders').click(function(){
$('.buy_again, .open_orders, .orders').removeClass("ordered_items_hdr_active");
$(this).addClass("ordered_items_hdr_active");
});
});

/* Orders Details tab end */



