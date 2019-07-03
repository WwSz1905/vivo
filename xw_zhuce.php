<?php
sleep(1);
header("content-type:text/html;charset=utf-8");//解决中文乱码
error_reporting(0);//解决语法报警
$cfg['DefaultCharset']='utf-8';

//连接数据库
mysql_connect('127.0.0.1','root','123456');
mysql_query("use sz1905");

//接受post参数
$username = $_POST['username'];
$password = $_POST['password'];
//编写入库的sql语句
//查询次数据是否存在
$sql =" select * from vivo where username='$username'";
$results = mysql_query($sql);

$row = mysql_fetch_array($results);

if((int)$row[0]>0){
    echo '{"err":"1","msg":"此用户名已被占用"}';
    exit();
}else{
    $sql = "INSERT INTO vivo (username,password) VALUES('{$username}','{$password}')";
    mysql_query($sql);
    echo '{"err":"0","msg":"注册成功"}';
    
}

 
 





?>
