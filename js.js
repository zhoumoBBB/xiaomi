/**
 * Created by 默 on 2016/12/5.
 */
//购物车下拉
$("#gwc").mouseover(function() {
    $("#gwcdown").stop().slideDown();
})
$("#gwc").mouseleave(function() {
        $("#gwcdown").stop().slideUp();
    })
    //搜索栏  搜索内容下拉
$("#search input").focusin(function() {
    $("#search_in").stop().fadeOut();
    $("#search_cont").stop().show();

})
$("#search input").focusout(function() {
        $("#search_in").stop().fadeIn();
        $("#search_cont").stop().hide();
    })
    //banner淡入淡出
$("#ban_img li:first-child").siblings().css("display", "none");
$("#ban_num li:first-child").css("background-color", "white");
var i = 0;
$("#btn_ban_l").click(function() {
    i++;
    if (i == 5) {
        i = 0
    }
    $("#ban_img li").eq(i).fadeIn().siblings().fadeOut();
    $("#ban_num li").eq(i).css("background-color", "white").siblings().css("background-color", "black");
})
$("#btn_ban_r").click(function() {
        i--;
        if (i == -5) {
            i = 0
        }
        $("#ban_img li").eq(i).fadeIn().siblings().fadeOut();
        $("#ban_num li").eq(i).css("background-color", "white").siblings().css("background-color", "black");
    })
    //导航栏下拉菜单
$("nav ul li").mouseover(function() {
    var a = 2;
    $("#nav_down ul li:eq(a) img").attr("src", bijiben.src[a]);
    $("#nav_down").stop().slideDown();
})
$("nav ul li").mouseleave(function() {
    $("#nav_down").stop().slideUp();
})
var hongmi = {
    src: ["images/320-2202!160x110 (1).jpg", "images/4A-320-220!160x110.jpg", "images/hongmipro-320!160x110.jpg", "images/hongminote4!160x110.jpg", "images/hm3S-320-220!160x110.jpg", "images/320-220!160x110.jpg"],
    name: ["红米4", "红米4A", "红米Pro", "红米Note 4", "红米手机3S", "红米手机3X"],
    price: ["699", "499", "1099", "999", "699", "799"]
}
var bijiben = {
    src: ["images/mipad2-16!160x110.jpg", "images/mipad2-16!160x110.jpg", "images/mipad2-16!160x110.jpg", "images/mipad2-64-win!160x110.jpg", "images/bijiben32012.5!160x110.jpg", "images/bijiben320!160x110.jpg"],
    name: ["小米平板2 16GB", "小米平板2 32GB", "小米平板2 64GB", "小米平板2 64GB Windows版", "小米笔记本Air 12.5", "小米笔记本Air 13.3"],
    price: ["999", "1299", "1599", "1299", "3499", "4999"]
}
var dianshi = {
    src: ["images/101843.png", "images/101848.png", "images/101855xin.png", "images/101860xin.png", "images/65yingyuan.png", "images/101865.png"],
    name: ["小米电视3s 43英寸", "小米电视3s 48英寸", "小米电视3s 55英寸", "小米电视3s 60英寸", "小米电视3s 65英寸", "小米电视3s 65英寸", "查看全部"],
    price: ["1799", "1999", "3499", "4499", "5999", "小米电视"]
}
$("#star_img ul li").first().siblings().css("margin-left", "12px");
$("#star_img_2 li").first().siblings().css("margin-left", "12px");
$("#btn_star_l").click(function() {
    $("#star_cont").stop().animate({ left: -1228 }, 500);
    $(this).css("color", "#AAA9AE");
    $("#btn_star_r").css("color", "black");
})
$("#btn_star_r").click(function() {
    $("#star_cont").stop().animate({ left: 0 }, 500)
    $(this).css("color", "#AAA9AE");
    $("#btn_star_l").css("color", "black");
})
$("#zhineng_r ul li").eq(3).nextAll().css("margin-top", "14px")
$("#zhineng_r ul li,.cont_img_l ul li,.cont_img_r ul li").hover(function() {
    $(this).css("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)");
    $(this).animate({ top: -4 }, 100);
}, function() {
    $(this).css("box-shadow", "none");
    $(this).animate({ top: 0 }, 100);
})