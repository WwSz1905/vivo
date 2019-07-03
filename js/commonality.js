$(function(){
    $('.side_bar li').mouseenter(function(){
        $(this).css('backgroundColor','#ebebeb')
         $(this).children('.prompt').show();
    })
    $('.side_bar li').mouseleave(function(){
         $(this).css('backgroundColor','#ffffff')
         $(this).children('.prompt').hide();
    })
    $(window).scroll(function(){  //侧边导航显示
        if($(window).scrollTop()>150){
            $('#xiaoshi').css('display','block').fadeIn(1000,'swing')
        }else{
            $('#xiaoshi').css('display','none').fadeOut(1000,'swing')
        }
    })
    $("#xiaoshi").click(function(){  //点击导航
		//$('body,html').animate({scrollTop:0},1000);
		if ($('html').scrollTop()) {
			$('html').animate({ scrollTop: 0 }, 500);
			return false;
		}
		$('body').animate({ scrollTop: 0 }, 500);
        return false;   
    });
    //鼠标移入显示内容          //移入公共父级
    $('.wc_login').on('mouseleave',$('.wc_banxin .wc_navl .vp_head_site li'),function(){
        $('.wc_banxin .wc_navl .vp_head_site li').hover(function(){
                    $('.wc_head_menu').slideDown(200,'swing')
                },function(){
                    $('.wc_head_menu').mouseleave(function () { 
                    $('.wc_head_menu').slideUp(200,'swing')
                });
        })
    })
    // $('.wc_login').on('mouseleave',$('.wc_banxin .wc_navl .vp_head_site li'),function(){
    //     $('.wc_head_menu').slideUp(200,'swing',function(){})
    // })

    $('.wc_Personal_Center').on('mouseenter',$('.wc_Personal_Center '),function(){
        $('.wc_zd').css('display','block')
        $('.wc_zd ul li').slideDown("slow");
    })
    $('.wc_Personal_Center').on('mouseleave',$('.wc_Personal_Center '),function(){
        $('.wc_zd').css('display','none')
        $('.wc_zd ul li').slideUp("slow");
    })
    //导航图片切换
    $('.vp_head_site li ').mouseenter(function(){
        // var index = 0;
        $(this).addClass('wc_color').siblings('li').removeClass('wc_color');
        var i = $(this).index();
        // console.log(i)
        $('.wc_n>ul').eq(i).addClass('wc_showlist').siblings().removeClass('wc_showlist');
        
    });
    $('.wc_search a').click(function(){
        $('.wc_search').css('display','none')
        $('.wc_swarch_menu').css('display','block')
        $('.wc_navl').css('display','none')
        $('.wc_login').css('background','#ffffff')
    })
    $('.wc_search_confim .icon-zuojiantou').click(function(){
        $('.wc_search').css('display','block')
        $('.wc_navl').css('display','block')
        $('.wc_swarch_menu').css('display','none')
        $('.wc_login').css('background',' #f7f7f5')
    })
    // $('.wc_login').click(function(){
    //     $('.wc_search').css('display','block')
    //     $('.wc_navl').css('display','block')
    //     $('.wc_swarch_menu').css('display','none')
    //     $('.wc_login').css('background',' #f7f7f5')
    // })
    $('.wc_img').mouseenter(function(){
        $('.img01').css('left','10px');
        $('.img02').css('left','30px');
        $('.img03').css('left','50px');
        $('.img04').css('left','70px');
    })
    $('.wc_img').mouseleave(function(){
        $('.img01').css('left','50px');
        $('.img02').css('left','50px');
        $('.img03').css('left','50px');
        $('.img04').css('left','50px');
    })
    $('.nex1').mouseenter(function(){
        $('.nex1 img').eq(0).css('left','10px');
        $('.nex1 img').eq(1).css('left','30px');
        $('.nex1 img').eq(2).css('left','50px');
        $('.nex1 img').eq(3).css('left','70px');
    })
    $('.nex1').mouseleave(function(){
        $('.nex1 img').eq(0).css('left','50px');
        $('.nex1 img').eq(1).css('left','50px');
        $('.nex1 img').eq(2).css('left','50px');
        $('.nex1 img').eq(3).css('left','50px');
    })
    $('.nex2').mouseenter(function(){
        $('.nex2 img').eq(0).css('left','10px');
        $('.nex2 img').eq(1).css('left','30px');
        $('.nex2 img').eq(2).css('left','50px');
        $('.nex2 img').eq(3).css('left','70px');
    })
    $('.nex2').mouseleave(function(){
        $('.nex2 img').eq(0).css('left','50px');
        $('.nex2 img').eq(1).css('left','50px');
        $('.nex2 img').eq(2).css('left','50px');
        $('.nex2 img').eq(3).css('left','50px');
    })
    $('.nex3').mouseenter(function(){
        $('.nex3 img').eq(0).css('left','10px');
        $('.nex3 img').eq(1).css('left','30px');
        $('.nex3 img').eq(2).css('left','50px');
        $('.nex3 img').eq(3).css('left','70px');
    })
    $('.nex3').mouseleave(function(){
        $('.nex3 img').eq(0).css('left','50px');
        $('.nex3 img').eq(1).css('left','50px');
        $('.nex3 img').eq(2).css('left','50px');
        $('.nex3 img').eq(3).css('left','50px');
    })
})


//账号登录后 首页显示个人中心


// function getlog(){
//     $('.dl_zc .xw').on('mouseenter',function(){
//         $('.wc_nav_right .wc_Personal_Center').css('display','block');
//        $('.wc_nav_right .dl_zc').css('display','none')
//     })
//     //   if(localStorage.getItem('user')){
//     //       var ls =localStorage.getItem('user');
//     //       alert('nihao ');
//     //     //   console.log(localStorage.getItem('user'));
//     //     //   $('.wc_nav_right .wc_Personal_Center').css('display','block');
//     //     //   $('.wc_nav_right .dl_zc').css('display','none')
//     //   }
// } 
$(function(){
    if(!localStorage.getItem('user')==''){            
                  $('.wc_nav_right .wc_Personal_Center').css('display','block');
                  $('.wc_nav_right .dl_zc').css('display','none')
              }else{
                $('.wc_nav_right .wc_Personal_Center').css('display','none');
                $('.wc_nav_right .dl_zc').css('display','block');
              }
})