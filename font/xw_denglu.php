<?php
header("content-type:text/html;charset=utf-8");//解决中文乱码
error_reporting(0);//解决语法报警
$cfg['DefaultCharset']='utf-8';

//连接数据库
mysql_connect('127.0.0.1','root','123456');
mysql_query("use sz1905");

//接受post参数
$username = $_POST['username'];
$password = $_POST['password'];
//查询数据库是否有次数据
$sql =" select * from vivo where username='$username' and password='$password'";
//返回结果集
$results = mysql_query($sql);
//每次从结果集中取得一行作为关联数组
$row = mysql_fetch_assoc($results);
//判断
if($row){
   $response=['code'=>200,'mes'=>'登录成功'];
}else{
   $response=['code'=>-1,'mes'=>'账号或密码错误'];

}
//输出JSON格式数据
echo json_encode($response);
?>
