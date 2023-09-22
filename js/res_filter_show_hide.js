$(document).ready(function(){
$(".departments").click(function(){
$(".departments_subproduct_list").show();
$(".pay_on_delivery_subproduct_list, .pro_brand_subproduct_list, .pro_discount_subproduct_list, .pro_price_subproduct_list, .pro_new_arrivals_subproduct_list, .pro_availability_subproduct_list, .pro_seller_subproduct_list, .pro_gst_invoice_subproduct_list").hide();
});

$(".pay_on_delivery").click(function(){
$(".pay_on_delivery_subproduct_list").show();
$(".departments_subproduct_list, .pro_brand_subproduct_list, .pro_discount_subproduct_list, .pro_price_subproduct_list, .pro_new_arrivals_subproduct_list, .pro_availability_subproduct_list, .pro_seller_subproduct_list, .pro_gst_invoice_subproduct_list").hide();
});

$(".pro_brand").click(function(){
$(".pro_brand_subproduct_list").show();
$(".pay_on_delivery_subproduct_list, .departments_subproduct_list, .pro_discount_subproduct_list, .pro_price_subproduct_list, .pro_new_arrivals_subproduct_list, .pro_availability_subproduct_list, .pro_seller_subproduct_list, .pro_gst_invoice_subproduct_list").hide();
});

$(".pro_discount").click(function(){
$(".pro_discount_subproduct_list").show();
$(".pay_on_delivery_subproduct_list, .pro_brand_subproduct_list, .departments_subproduct_list, .pro_price_subproduct_list, .pro_new_arrivals_subproduct_list, .pro_availability_subproduct_list, .pro_seller_subproduct_list, .pro_gst_invoice_subproduct_list").hide();
});

$(".pro_price").click(function(){
$(".pro_price_subproduct_list").show();
$(".pay_on_delivery_subproduct_list, .pro_brand_subproduct_list, .pro_discount_subproduct_list, .departments_subproduct_list, .pro_new_arrivals_subproduct_list, .pro_availability_subproduct_list, .pro_seller_subproduct_list, .pro_gst_invoice_subproduct_list").hide();
});


$(".pro_new_arrivals").click(function(){
$(".pro_new_arrivals_subproduct_list").show();
$(".pay_on_delivery_subproduct_list, .pro_brand_subproduct_list, .pro_discount_subproduct_list, .pro_price_subproduct_list, .departments_subproduct_list, .pro_availability_subproduct_list, .pro_seller_subproduct_list, .pro_gst_invoice_subproduct_list").hide();
});

$(".pro_availability").click(function(){
$(".pro_availability_subproduct_list").show();
$(".pay_on_delivery_subproduct_list, .pro_brand_subproduct_list, .pro_discount_subproduct_list, .pro_price_subproduct_list, .pro_new_arrivals_subproduct_list, .departments_subproduct_list, .pro_seller_subproduct_list, .pro_gst_invoice_subproduct_list").hide();
});

$(".pro_seller").click(function(){
$(".pro_seller_subproduct_list").show();
$(".pay_on_delivery_subproduct_list, .pro_brand_subproduct_list, .pro_discount_subproduct_list, .pro_price_subproduct_list, .pro_new_arrivals_subproduct_list, .pro_availability_subproduct_list, .departments_subproduct_list, .pro_gst_invoice_subproduct_list").hide();
});

$(".pro_gst_invoice").click(function(){
$(".pro_gst_invoice_subproduct_list").show();
$(".pay_on_delivery_subproduct_list, .pro_brand_subproduct_list, .pro_discount_subproduct_list, .pro_price_subproduct_list, .pro_new_arrivals_subproduct_list, .pro_availability_subproduct_list, .pro_seller_subproduct_list, .departments_subproduct_list").hide();
});
})



$(document).ready(function(){
$(".product_sort").click(function(){
$(".sortby_content").show();
$(".filterby_content").hide();
});

$(".product_filter").click(function(){
$(".filterby_content").show();
$(".sortby_content").hide();
});
})




$(document).ready(function(){
$('.product_sort').click(function(){
$('.sortby_content').addClass("active");    
$('.filterby_content').removeClass("active");
$(this).addClass("active");
});
});





$(document).ready(function(){
$('.departments').click(function(){
$('.pay_on_delivery,.pro_brand,.pro_discount, .pro_price, .pro_new_arrivals, .pro_availability, .pro_seller, .pro_gst_invoice').removeClass("filter_pro_active");
$(this).addClass("filter_pro_active");
});
});


$(document).ready(function(){
$('.pay_on_delivery').click(function(){
$('.departments,.pro_brand,.pro_discount, .pro_price, .pro_new_arrivals, .pro_availability, .pro_seller, .pro_gst_invoice').removeClass("filter_pro_active");
$(this).addClass("filter_pro_active");
});
});

$(document).ready(function(){
$('.pro_brand').click(function(){
$('.departments,.pay_on_delivery,.pro_discount, .pro_price, .pro_new_arrivals, .pro_availability, .pro_seller, .pro_gst_invoice').removeClass("filter_pro_active");
$(this).addClass("filter_pro_active");
});
});

$(document).ready(function(){
$('.pro_discount').click(function(){
$('.departments,.pro_brand,.pay_on_delivery, .pro_price, .pro_new_arrivals, .pro_availability, .pro_seller, .pro_gst_invoice').removeClass("filter_pro_active");
$(this).addClass("filter_pro_active");
});
});

$(document).ready(function(){
$('.pro_price').click(function(){
$('.departments,.pro_brand,.pro_discount, .pay_on_delivery, .pro_new_arrivals, .pro_availability, .pro_seller, .pro_gst_invoice').removeClass("filter_pro_active");
$(this).addClass("filter_pro_active");
});
});

$(document).ready(function(){
$('.pro_new_arrivals').click(function(){
$('.departments,.pro_brand,.pro_discount, .pro_price, .pay_on_delivery, .pro_availability, .pro_seller, .pro_gst_invoice').removeClass("filter_pro_active");
$(this).addClass("filter_pro_active");
});
});

$(document).ready(function(){
$('.pro_availability').click(function(){
$('.departments,.pro_brand,.pro_discount, .pro_price, .pro_new_arrivals, .pay_on_delivery, .pro_seller, .pro_gst_invoice').removeClass("filter_pro_active");
$(this).addClass("filter_pro_active");
});
});

$(document).ready(function(){
$('.pro_seller').click(function(){
$('.departments,.pro_brand,.pro_discount, .pro_price, .pro_new_arrivals, .pro_availability, .pay_on_delivery, .pro_gst_invoice').removeClass("filter_pro_active");
$(this).addClass("filter_pro_active");
});
});

$(document).ready(function(){
$('.pro_gst_invoice').click(function(){
$('.departments,.pro_brand,.pro_discount, .pro_price, .pro_new_arrivals, .pro_availability, .pro_seller, .pay_on_delivery').removeClass("filter_pro_active");
$(this).addClass("filter_pro_active");
});
});



















