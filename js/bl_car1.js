// var codeArr = JSON.parse(localStorage.getItem('product_tips')).code;
// console.log(codeArr[codeArr.length-1])

$(function () {
    //计算localstorage的最后一个值
    var codeArr1 = JSON.parse(localStorage.getItem('product_tips')).code;
    var codeArrLast = codeArr1[codeArr1.length - 1]
    //加载详情页数据
    $.ajax({
        type: "get",
        url: "data/cc_page1.json",
        dataType: "json",
        success: function (data) {
            var imgM = '';
            var type = '';
            var price = '';
            $.each(data, function (index, value) {
                if (value.code === codeArrLast) {
                    imgB = `<ul><li class='bl-show'><img src="${value.imgurl01}" alt=""></li><li><img src="${value.imgurl02}" alt=""></li><li><img src="${value.imgurl01}" alt=""></li><li><img src="${value.imgurl02}" alt=""></li><li><img src="${value.imgurl01}" alt=""></li><li><img src="${value.imgurl02}" alt=""></li></ul>`;
                    imgS = `<ul><li class='bl-border'><img src="${value.imgurl01}" alt=""></li><li><img src="${value.imgurl02}" alt=""></li><li><img src="${value.imgurl01}" alt=""></li><li><img src="${value.imgurl02}" alt=""></li><li><img src="${value.imgurl01}" alt=""></li><li><img src="${value.imgurl02}" alt=""></li></ul>`
                    type = `<h1 class="type">${value.title}</h1>
                    <p class="descript">${value.message}</p> `;
                    price = `<div class="left"><u>${value.price}</u><br/><span>￥2900</span></div>`
                }
            })
            $('.bl-right').prepend(type)
            $('.price').prepend(price)
            $('.big').append(imgB)
            $('.small').append(imgS)

        }
    });
    //更改价格
    var typeArr = [];
    var reprice = localStorage.getItem('cc02')
    console.log(reprice);

    $('.versions ul').on('click', 'li', function () {
        //样式
        $(this).addClass('show-bl').siblings().removeClass('show-bl');
        //获取数据
        var typeCode = $(this).attr('abc')
        typeArr.push(typeCode);
        //提纯数据
        // var moneyReg =new RegExp('￥');
        // var  reprice = mone.replace(moneyReg,'')

        var cont = (typeCode - 0) + (reprice - 0);
        var finCont = "￥" + cont + ".00"
        $('.price .left u').html(finCont);

        //total总价格
        $('.sc i').html(cont)
    })

    //tab切换

    var index = 0;
    $('.nav a:nth-child(2)').click(function () {
        if (index >= 2) {
            // console.log(index)
            return false
        } else {
            index++
        }
        $('.small ul').css('left', -index * 85)
    })

    $('.nav a:first-child').click(function () {
        index--;
        if (index < 0) {
            return false
        }
        $('.small ul').css('left', -index * 85)
        console.log($('.small ul').css('left'))

    })

    $('.small').on('mousemove', 'li', function () {
        var index = $(this).index();
        $(this).addClass('bl-border').siblings().removeClass('bl-border');

        $('.big li').eq(index).addClass('bl-show').siblings('.big li').removeClass('bl-show');

    })

    //scrollTop;
    $(window).scroll(function () {
        var stop = $("body,html").scrollTop();
        if (stop < 182) {
            $(".bl-left").css({
                position: 'fixed',
                top: 182
            })
        } else if (stop > 182 && stop < 1258) {
            $(".bl-left").css({
                position: 'fixed',
                top: 0
            })
        } else if (stop > 1258) {
            $(".bl-left").css({
                position: 'absolute',
                top: 1258
            })
        }

    })

    //数量++
    $('.auto a:first-child').click(function () {
        var auto_data = $('.shuliang').val()
        if (auto_data <= 1) {
            return false
        } else {
            auto_data--
        }
        $('.shuliang').val(auto_data)


    })
    $('.auto a:nth-child(3)').click(function () {
        var auto_data = $('.shuliang').val()
        if (auto_data >= 5) {
            alert('数量不能大于5')
            return false
        } else {
            auto_data++
        }
        $('.shuliang').val(auto_data)
    })

    //  
})

