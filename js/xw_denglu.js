
// 封装一个点击隐藏提示函数
function noneTs() {
    $('.xw_ipt').focus(function () {//当鼠标点击表单时 提示就隐藏
        $('.xw_ts').css('display', 'none');
    })
    $('.xw_pas').focus(function () {
        $('.xw_ts').css('display', 'none');
    })
}

// 点击登录事件

$(function () {
    $('#xw_sub').click(function () {
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
             //登录加载。。。
            var index = layer.load(0, {shade: false});
            
            
            $.ajax({
                type: 'post',
                url: './data/xw_denglu.php',
                data: 'username=' + username + '&password=' + password,
                dataType: 'json',
                success: function (res) {
                    layer.closeAll();//关闭加载。。
                    if (res.code == 200) {
                        window.location.href = './commonality.html';
                        window.localStorage.setItem('user',username);//成功后保存数据
                       // alert('登录成功');
                    //    console.log(localStorage.getItem('user',username));
                    
                    } else {
                        $('.xw_ts').css('display', 'block');
                        $('.xw_ts').html('您输入的账号或密码输入错误 !');
                        noneTs();
                    }

                }
            })
        }
    })

})

