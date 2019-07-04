$(function () {
	if (localStorage.getItem('product_tips')) {
		var codeArr = JSON.parse(localStorage.getItem('product_tips')).code;
		$.ajax({
			type: 'get',
            url: "data/cc_page1.json",
			cache: false,
			success: function (data) {
				var results = '';
				$.each(codeArr, function (index, value) {
                    $.each(data, function (i, val) {
                        if (value === val.code) {
							results += `<ul class="order_lists" style="border: 1px solid #cccccc" code=${val.code}>
                            <li class="list_chk">
                                <input type="checkbox" id="checkbox_2" class="son_check">
                                <label for="checkbox_2"></label>
                            </li>
                            <li class="list_con">
                                <div class="list_img"><a href="javascript:;"><img src="${val.imgurl01}"></a></div>
                                <div class="list_text"><a href="javascript:;">${val.title}</a></div>
                            </li>
                            <li class="list_info">
                                <p>${val.message}</p>                             
                            </li>
                            <li class="list_price">
                                <p class="price">${val.price}</p>
                            </li>
                            <li class="list_amount">
                                <div class="amount_box">
                                    <a href="javascript:;" class="reduce">-</a>
                                    <input type="text" value="1" class="sum">
                                    <a href="javascript:;" class="plus">+</a>
                                </div>
                            </li>
                            <li class="list_sum">
                                <p class="sum_price">${val.price}</p>
                            </li>
                            <li class="list_op">
                                <p class="del"><a href="javascript:;" class="delBtn">移除商品</a></p>
                            </li>
                        </ul>`
						}
					});
				});
				$('.order_content').html(results);
			}
		});
		//删除购物车商品
		 $('.order_content').on('click', '.order_lists .list_op .del a', function () {
            var code = $(this).parent().parent().parent().attr('code');//要删除的商品编码
            $.each(codeArr, function (index, val) {
                if (code === val) {
                    codeArr.splice(index, 1);
                }
            });
            //更新本地的购物车商品数据
            var jsonStr = JSON.stringify({ "code": codeArr });
            localStorage.setItem('product_tips', jsonStr);
            $(this).parent().parent().parent().remove();//删除商品
            alert('商品成功移出购物车');
		});
	}

	//全选按钮
	$('.order_lists .list_chk input[type=checkbox]').click(function(){
		if ($(this).is(':checked')) {
			$(this).next('label').addClass('mark');
		} else {
			$(this).next('label').removeClass('mark')
		}
	})
		

	//单选按钮

	$('.order_content').on('click','.order_lists .list_chk input[type=checkbox]',function(){
			if ($(this).is(':checked')) {
				$(this).next('label').addClass('mark');
			} else {
				$(this).next('label').removeClass('mark')
			}
	})
    $('.order_content').on('click', '.order_lists .list_amount .amount_box .plus', function () {//加号点击
        var $inputVal = $(this).prev('input'),//获取input的值
            $count = parseInt($inputVal.val()) + 1,
            $priceTotalObj = $(this).parents('.order_lists').find('.sum_price'), //找到价格
            $price = $(this).parents('.order_lists').find('.price').html(),//找到商品的价格
            $priceTotal = $count * parseInt($price.substring(1));//截取到内容
        $inputVal.val($count);//显示的数量
        $priceTotalObj.html('￥' + $priceTotal);//显示的价格
        if ($inputVal.val() >= 5) {
            alert('商品价格不能超过5件')
            return false;
        }
        totalMoney()
    })
    $('.order_content').on('click', '.order_lists .list_amount .amount_box .reduce', function () {//减号点击
        var $inputVal = $(this).next('input'),
            $count = parseInt($inputVal.val()) - 1,
            $priceTotalObj = $(this).parents('.order_lists').find('.sum_price'),
            $price = $(this).parents('.order_lists').find('.price').html(),
            $priceTotal = $count * parseInt($price.substring(1));
        if ($inputVal.val() > 1) {
            $inputVal.val($count);
            $priceTotalObj.html('￥' + $priceTotal);
        }
        totalMoney()
    })
    $('.order_content').on('keyup', '.order_lists .list_amount .amount_box .sum', function () { //键盘按下
        var $count = 0,
            $priceTotalObj = $(this).parents('.order_lists').find('.sum_price'),//找到商品显示的价格
            $price = $(this).parents('.order_lists').find('.price').html(),   //找到商品的价格
            $priceTotal = 0;
        if ($(this).val() == '') { //如果值为空则他的值为空
            $(this).val('0');
        }
        $(this).val($(this).val().replace(/\D|^0/g, ''));
        $count = $(this).val();
        $priceTotal = $count * parseInt($price.substring(1));
        $(this).attr('value', $count);
        $priceTotalObj.html('￥' + $priceTotal);
        totalMoney()
    })
    $sonCheckBox = $('.son_check');
    function totalMoney() {
        var total_money = 0; //设置商品价格初始值
        var total_count = 0;//设置商品数量初始值
        var calBtn = $('.calBtn a');  //找到结算
        $sonCheckBox.each(function () { //遍历循环所有的商品
            if ($(this).is(':checked')) {  //判断如果有这个类名 
                var goods = parseInt($(this).parents('.order_lists').find('.sum_price').html().substring(1)); //获取商品价格
                var num = parseInt($(this).parents('.order_lists').find('.sum').val()); //获取商品数量
                total_money += goods; //递加价格
                total_count += num;//递加商品数量
            }
        });
        $('.total_text').html('￥' + total_money);//总价
        $('.piece_num').html(total_count);  //件数
        if (total_money != 0 && total_count != 0) {
            if (!calBtn.hasClass('btn_sty')) {
                calBtn.addClass('btn_sty');
            }
        } else {
            if (calBtn.hasClass('btn_sty')) {
                calBtn.removeClass('btn_sty');
            }
        }
    }
})