
$(function () {//设置一个反转开关 点击添加类名 在点击删除类名
    $('.xw_zfx').click(function () {
        $('.xw_zfx i').toggleClass('icon-dagou')
    })

})

//封装一个点击隐藏提示函数
function noneTs() {
    $('.xw_ipt').focus(function () {//当鼠标点击表单时 提示就隐藏
        $('.xw_ts').css('display', 'none');
    })
    $('.xw_pas').focus(function () {
        $('.xw_ts').css('display', 'none');
    })
}

//点击注册事件
$(function () {
    $('#xw_sub').click(function () {
        if ($('.xw_zfx i').hasClass('icon-dagou')) {
            var username = $('#username').val();//获取html输入的账号值
            var password = $('#password').val();//获取html输入的密码值
            var phone = /^1\d{10}$/;  //判断手机号格式 1开头11位数字
            var pas = /^[\da-zA-z]{6,12}$/;//判断密码格式 6-12位

            if ($.trim(username) == '' || $.trim(password) == '') {//判断表单值是否为空
                //去除空格
                $('.xw_ts').css('display', 'block');//如果为空 弹出提示
                $('.xw_ts').html('账号或者密码不能为空 ！');
                noneTs();//调用点击隐藏提示函数
            }
            else if (!phone.test(username) && !pas.test(password)) {
                $('.xw_ts').css('display', 'block');
                $('.xw_ts').html('您输入的账号或密码格式错误 ！');
                noneTs();

            } else if (phone.test(username) && !pas.test(password)) {
                $('.xw_ts').css('display', 'block');
                $('.xw_ts').html('请输入6~10位包含字母数字的密码 ！');
                noneTs();
            } else if (!phone.test(username) && pas.test(password)) {
                $('.xw_ts').css('display', 'block');
                $('.xw_ts').html('请输入有效的手机号 ！');
                noneTs();
            } else {
                //请求ajax数据
                var index = layer.load(0, { shade: false });
                
                $.ajax({
                    type: 'post',
                    url: './data/xw_zhuce.php',
                    data: "username=" + username + "&password=" + password,
                    dataType: 'json',
                    
                    success: function (res) {
                        // console.log(res);
                        layer.closeAll();        
                        if (res.err == 0) {
                            // alert('恭喜您注册成功');
                          alert('恭喜您注册成功'),         
                        location.href = "./XW_logindl.html";    
                        } else {
                            // $('.xw_ts').css('display','block');
                            // $('.xw_ts').html('此账号已被占用 ！');
                            layer.msg('此账号已被占用', {
                                time: 2000
                            })
                        }





                    }


                })


            }



        } else {
            $('.xw_ts').css('display', 'block');
            $('.xw_ts').html('请您先勾选接受《vivo服务协议》');
            $('.xw_zfx').click(function () {//当鼠标点击时 提示就隐藏
                $('.xw_ts').css('display', 'none');
            })
        }

    })
})