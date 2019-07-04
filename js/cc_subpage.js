$(function(){
// ---------------------------------------------------------------------------
// ajax动态获取数据page1手机子页的2种情况
//1、手机展示界面不点击默认情况下展示
    (function(){
        $.ajax({
            type:'get',
            url:'./data/cc_page1.json',
            dataType:'json',
            success:function(data){
                // console.log(data); 
                var result = '';
                $.each(data,function(index,value){             
                    result +='<a href ="carDedails.html" class = ".one_product clearfix" code = "'+value.code+'"><div class="product_tips"> <div class="product_img"><img src="'+value.imgurl01+'" alt="买买买，手机！" class = "show_img01"/><img src="'+value.imgurl02+'" alt="买买买，手机！" class = "show_img02"/><div class="hot"><img src="img/part17.png" alt="活动特色"></div></div> <h3>'+value.title+'</h3><span class="message">'+value.message+'</span> <span class="price">'+value.price+'</span></div></a>';
                });
                $('.product_show').html(result);
            }
        });
    })();
//2、手机展示界面点击的情况下切换
    $('.type .type01').click(function(){
        $.ajax({
            type:'get',
            url:'./data/cc_page1.json',
            dataType:'json',
            success:function(data){
                // console.log(data); 
                var result = '';
                $.each(data,function(index,value){             
                    result +='<a href ="carDedails.html" class = ".one_product clearfix" code = "'+value.code+'"><div class="product_tips"> <div class="product_img"><img src="'+value.imgurl01+'" alt="买买买，手机！" class = "show_img01"/><img src="'+value.imgurl02+'" alt="买买买，手机！" class = "show_img02"/><div class="hot"><img src="img/part17.png" alt="活动特色"></div></div> <h3>'+value.title+'</h3><span class="message">'+value.message+'</span> <span class="price">'+value.price+'</span></div></a>';
                });
                $('.product_show').html(result);
            }
        });      
        $('.cc_header .tags').html('<ul class="tags clearfix"><li><a href="#">全部</a></li><li><a href="#">iQOO</a></li> <li><a href="#">NEX系列</a></li><li><a href="#">X系列</a></li><li><a href="#">Y系列</a></li><li><a href="#">Z系列</a></li><li><a href="#">S系列</a></li><li><a href="#">u系列</a></li></ul>');
        $('#cc_wrapper .guide .which_type').html(' 智能手机').css('background','yellow');
    });
// ---------------------------------------------------------------------------------
// ajax动态获取数据page2耳机充电器子页
    $('.type').on('click','.type02',function(){
        (function(){
            $.ajax({
                type:'get',
                url:'./data/cc_page2.json',
                dataType:'json',
                success:function(data){
                    // console.log(data); 
                    var result = '';
                    $.each(data,function(index,value){             
                        result +='<a href ="carDedails.html" class = ".one_product clearfix" code = "'+value.code+'"><div class="product_tips"> <div class="product_img"><img src="'+value.imgurl+'" alt="买买买，手机！" class = "cc_change"/><div class="hot"><img src="img/part10.png" alt="活动特色"></div></div> <h3>'+value.title+'</h3><span class="message">'+value.message+'</span> <span class="price">'+value.price+'</span></div></a>';
                    });
                    $('.product_show').html(result);
                }
             
            });
        })();
  
        $('.cc_header .tags').html('<ul class="tags clearfix"><li><a href="#">全部</a></li> <li><a href="#">充电</a></li> <li><a href="#">充电</a></li><li><a href="#">配件</a></li><li><a href="#">音乐</a></li><li><a href="#">摄影</a></li><li><a href="#">智能</a></li></ul>');
        $('#cc_wrapper .guide .which_type').html(' 配件产品').css('background','yellow');
        console.log('how is going ?');
        console.log('ok????');
        // console.log($('.product_img img'));
        
    });

// 存储localstorage
    $('.product_show').on('click','a',function(){
        var cc_code = $(this).attr('code');
        var cc_price = $(this).find('.price').html().substr(1);
        // var jsonStr = JSON.stringify({"code":codeArr});//转成json字符串
        localStorage.setItem('cc01',cc_code);
        localStorage.setItem('cc02',cc_price);
        console.log(cc_code);
        console.log(cc_price);
        // alert('how is going ?')
    });
    $('.product_show').on("click","a",function (){
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
        localStorage.setItem('product_tips',jsonStr);
        // alert('成功加入购物车！');
    })

// ------------------------------------------------------------------------------------
// 点击切换iQOO NEX系列 X系列
    $('.cc_header .tags').on('click','li a',function(){
        $(this).css('background','red').parent().siblings().find('a').css('background','orange');
        switch($(this).text()){
            case 'iQOO':
                $('.product_show').html('<a href="#" class = "one_product" > <div class="product_tips"> <div class="product_img"><img src="img/iphone54.png" alt="买买买，手机！" class="show_img01"> <img src="img/iphone4.png" alt="买买买，手机！" class="show_img02"><div class="hot"><img src="img/part10.png" alt="优惠活动"></div></div><h3>iQOO Neo 强悍袭来</h3><span class="message">【7月2日20:00品鉴会+预定，敬请期待】 高通骁龙845，触控加速，4D游戏震撼</span> <span class="price">￥2688.00 元</span></div></a><a href="#" class = "one_product" > <div class="product_tips"> <div class="product_img"><img src="img/iphone49.png" alt="买买买，手机！" class="show_img01"> <img src="img/iphone38.png" alt="买买买，手机！" class="show_img02"><div class="hot"><img src="img/part10.png" alt="优惠活动"></div></div><h3>iQOO Neo 强悍袭来</h3><span class="message">【7月2日20:00品鉴会+预定，敬请期待】 高通骁龙845，触控加速，4D游戏震撼</span> <span class="price">￥2688.00 元</span></div> </a><a href="#" class = "one_product" > <div class="product_tips"> <div class="product_img"><img src="img/iphone23.png" alt="买买买，手机！" class="show_img01"> <img src="img/iphone34.png" alt="买买买，手机！" class="show_img02"><div class="hot"><img src="img/part10.png" alt="优惠活动"></div></div><h3>iQOO Neo 强悍袭来</h3><span class="message">【7月2日20:00品鉴会+预定，敬请期待】 高通骁龙845，触控加速，4D游戏震撼</span> <span class="price">￥2688.00 元</span></div> </a><a href="#" class = "one_product" > <div class="product_tips"> <div class="product_img"><img src="img/iphone24.png" alt="买买买，手机！" class="show_img01"> <img src="img/iphone9.png" alt="买买买，手机！" class="show_img02"><div class="hot"><img src="img/part10.png" alt="优惠活动"></div></div><h3>iQOO Neo 强悍袭来</h3><span class="message">【7月2日20:00品鉴会+预定，敬请期待】 高通骁龙845，触控加速，4D游戏震撼</span> <span class="price">￥2688.00 元</span></div> </a><a href="#" class = "one_product" > <div class="product_tips"> <div class="product_img"><img src="img/iphone47.png" alt="买买买，手机！" class="show_img01"> <img src="img/iphone51.png" alt="买买买，手机！" class="show_img02"><div class="hot"><img src="img/part10.png" alt="优惠活动"></div></div><h3>iQOO Neo 强悍袭来</h3><span class="message">【7月2日20:00品鉴会+预定，敬请期待】 高通骁龙845，触控加速，4D游戏震撼</span> <span class="price">￥2688.00 元</span></div> </a>');
                break;
                case 'NEX系列':
                $('.product_show').html('<a href="#" class = "one_product" > <div class="product_tips"> <div class="product_img"><img src="img/iphone47.png" alt="买买买，手机！" class="show_img01"> <img src="img/iphone42.png" alt="买买买，手机！" class="show_img02"><div class="hot" class="show_img01"><img src="img/part10.png" alt="优惠活动"></div></div><h3>NEX双屏版 10GB+128GB 冰原蓝</h3><span class="message">【7月2日20:00品鉴会+预定，敬请期待】 【12期分期免息】 高通845AIE、星环溢彩屏，双屏多任务、夜视摄像头、10G大运存</span> <span class="price">￥4998.00 元</span></div></a><a href="#" class = "one_product" > <div class="product_tips"> <div class="product_img"><img src="img/iphone46.png" alt="买买买，手机！" class="show_img01"> <img src="img/iphone45.png" alt="买买买，手机！" class="show_img02"><div class="hot"><img src="img/part10.png" alt="优惠活动"></div></div><h3>NEX双屏版 10GB+128GB 冰原蓝</h3><span class="message">【7月2日20:00品鉴会+预定，敬请期待】 【12期分期免息】 高通845AIE、星环溢彩屏，双屏多任务、夜视摄像头、10G大运存</span> <span class="price">￥4998.00 元</span></div> </a><a href="#" class = "one_product" > <div class="product_tips"> <div class="product_img"><img src="img/iphone41.png" alt="买买买，手机！" class="show_img01"> <img src="img/iphone40.png" alt="买买买，手机！" class="show_img02"><div class="hot"><img src="img/part10.png" alt="优惠活动"></div></div><h3>NEX双屏版 10GB+128GB 冰原蓝</h3><span class="message">【7月2日20:00品鉴会+预定，敬请期待】 【12期分期免息】 高通845AIE、星环溢彩屏，双屏多任务、夜视摄像头、10G大运存</span> <span class="price">￥4998.00 元</span></div> </a><a href="#" class = "one_product" > <div class="product_tips"> <div class="product_img"><img src="img/iphone24.png" alt="买买买，手机！" class="show_img01"> <img src="img/iphone9.png" alt="买买买，手机！" class="show_img02"><div class="hot"><img src="img/part10.png" alt="优惠活动"></div></div><h3>NEX双屏版 10GB+128GB 冰原蓝</h3><span class="message">【7月2日20:00品鉴会+预定，敬请期待】 【12期分期免息】 高通845AIE、星环溢彩屏，双屏多任务、夜视摄像头、10G大运存</span> <span class="price">￥4998.00 元</span></div> </a><a href="#" class = "one_product" > <div class="product_tips"> <div class="product_img"><img src="img/iphone47.png" alt="买买买，手机！" class="show_img01"> <img src="img/iphone51.png" alt="买买买，手机！" class="show_img02"><div class="hot"><img src="img/part10.png" alt="优惠活动"></div></div><h3>NEX双屏版 10GB+128GB 冰原蓝</h3><span class="message">【7月2日20:00品鉴会+预定，敬请期待】 【12期分期免息】 高通845AIE、星环溢彩屏，双屏多任务、夜视摄像头、10G大运存</span> <span class="price">￥4998.00 元</span></div> </a>');
                break;
                case 'X系列':
                $('.product_show').html('<a href="#" class = "one_product" > <div class="product_tips"> <div class="product_img"><img src="img/iphone3.png" alt="买买买，手机！" class="show_img01"> <img src="img/iphone20.png" alt="买买买，手机！" class="show_img02"><div class="hot"><img src="img/part10.png" alt="优惠活动" class="show_img02"></div></div><h3>X27 8GB+256GB 粉黛金</h3><span class="message">【直降300，享12期免息】 升降式摄像头，19.5:9零界全面屏，4800万后置三摄+超广角+超微距+超级夜景+超级逆光，vivo闪充，零感水冷散热</span> <span class="price">￥3698.00 元</span></div></a><a href="#" class = "one_product" > <div class="product_tips"> <div class="product_img"><img src="img/iphone33.png" alt="买买买，手机！" class="show_img01"> <img src="img/iphone2.png" alt="买买买，手机！" class="show_img02"><div class="hot"><img src="img/part10.png" alt="优惠活动"></div></div><h3>X27 8GB+256GB 粉黛金</h3><span class="message">【直降300，享12期免息】 升降式摄像头，19.5:9零界全面屏，4800万后置三摄+超广角+超微距+超级夜景+超级逆光，vivo闪充，零感水冷散热</span> <span class="price">￥3698.00 元</span></div> </a><a href="#" class = "one_product" > <div class="product_tips"> <div class="product_img"><img src="img/iphone24.png" alt="买买买，手机！" class="show_img01"> <img src="img/iphone12.png" alt="买买买，手机！" class="show_img02"><div class="hot"><img src="img/part10.png" alt="优惠活动"></div></div><h3>X27 8GB+256GB 粉黛金</h3><span class="message">【直降300，享12期免息】 升降式摄像头，19.5:9零界全面屏，4800万后置三摄+超广角+超微距+超级夜景+超级逆光，vivo闪充，零感水冷散热</span> <span class="price">￥3698.00 元</span></div> </a><a href="#" class = "one_product" > <div class="product_tips"> <div class="product_img"><img src="img/iphone39.png" alt="买买买，手机！" class="show_img01"> <img src="img/iphone42.png" alt="买买买，手机！" class="show_img02"><div class="hot"><img src="img/part10.png" alt="优惠活动"></div></div><h3>X27 8GB+256GB 粉黛金</h3><span class="message">【直降300，享12期免息】 升降式摄像头，19.5:9零界全面屏，4800万后置三摄+超广角+超微距+超级夜景+超级逆光，vivo闪充，零感水冷散热</span> <span class="price">￥3698.00 元</span></div> </a><a href="#" class = "one_product" > <div class="product_tips"> <div class="product_img"><img src="img/iphone56.png" alt="买买买，手机！" class="show_img01"> <img src="img/iphone1.png" alt="买买买，手机！" class="show_img02"><div class="hot"><img src="img/part10.png" alt="优惠活动"></div></div><h3>X27 8GB+256GB 粉黛金</h3><span class="message">【直降300，享12期免息】 升降式摄像头，19.5:9零界全面屏，4800万后置三摄+超广角+超微距+超级夜景+超级逆光，vivo闪充，零感水冷散热</span> <span class="price">￥3698.00 元</span></div> </a>');
                break;
        }
    }); 
});