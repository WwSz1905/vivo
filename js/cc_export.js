

$('.fly_img').on("click","a",function (){
    // alert(22)
    if(localStorage.getItem('product_tips')){
        var codeArr = JSON.parse(localStorage.getItem('product_tips')).code; 
    }else{
        var codeArr = [];
    }
    var code =$(this).attr('code');//商品编号
    var goodsp = $('.price').html();
    console.log(goodsp);
    codeArr.push(code);
    // console.log(codeArr);
    var jsonStr = JSON.stringify({'code':codeArr});//转成JSON字符串
    localStorage.setItem('flay_img',jsonStr);
    // alert('成功加入购物车！');
})


// -----------------------------------------------------------------------

// -------右侧滚动切换------------------------------------------------------
var cc_scroll = (function(){
    $(window).on('scroll',function(){
        if($(window).scrollTop()<100){
            $('.step_go ul li').css({'background':'#fff','color':'#666'});
        }else if($(window).scrollTop()>200&&$(window).scrollTop()<400){
            $('.step_go ul li:nth-child(5)').css({'display':'none'});
            $('.step_go ul li:nth-child(1)').css({'background':'yellow','color':'#f40'}).siblings().css({'background':'#fff','color':'#666'});
        }else if($(window).scrollTop()>500&&$(window).scrollTop()<700){
            $('.step_go ul li:nth-child(2)').css({'background':'yellow','color':'#f40'}).siblings().css({'background':'#fff','color':'#666'});
        }else if($(window).scrollTop()>800&&$(window).scrollTop()<1000){
            $('.step_go ul li:nth-child(5)').css({'display':'block','color':'#f40'});
            $('.step_go ul li:nth-child(3)').css({'background':'yellow','color':'#f40'}).siblings().css({'background':'#fff','color':'#666'});
        }else if($(window).scrollTop()>1100&&$(window).scrollTop()<1300){
            $('.step_go ul li:nth-child(4)').css({'background':'yellow','color':'#f40'}).siblings().css({'background':'#fff','color':'#666'});
        }else if($(window).scrollTop()>1400){
            $('.step_go ul li:nth-child(5)').css({'background':'yellow','color':'#000'}).siblings().css({'background':'#fff','color':'#666'});
        }
        
    });
    //d第5个li点击返回顶部
    $('.step_go ul li:nth-child(5)').on('click',function(){
        var to_top = $(window).scrollTop();
        var timer;
        console.log($(window).scrollTop());
        clearInterval(timer);
        timer = setInterval(function(){
            if(to_top <= 0){
                // $(window).scrollTop('0');
                clearInterval(timer);
            }
            to_top -= 20;
            $(window).scrollTop(to_top);
            console.log($(window).scrollTop());
        },20)
    });


})();

// 输入数字，点击确认跳转页面
    $('.goto_page').on('keyup','.go_page',function(){  
        switch($('.go_page').val()){
            case '1':
                $('.goto_page .okgo a').attr('href','cc_subpage.html');
                break;
            case '2':
                $('.goto_page .okgo a').attr('href','cc_subpage1.html');
            break;
            case '3':
                $('.goto_page .okgo a').attr('href','cc_subpage2.html');
            break;
            default:
                $('.goto_page .okgo a').attr('href','#');
        }
    });



// ------导出模块变量-------------------------------------------------
// export {cc_scroll,head_foot};
export {animation, cc_scroll, head_foot};
// import {drag_shadow,flyImg,animation,cc_scroll,head_foot} from './js/cc_export.js';
// ------------------------------------------------------------------

