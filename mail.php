<?php

$post = (!empty($_POST)) ? true : false;

if($post)
{
$email = trim($_POST['email']);
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$message = htmlspecialchars($_POST['message']);


$name_tema = "=?utf-8?b?". base64_encode($name) ."?=";

$subject ="Заявка С Моего Сайта";
$subject1 = "=?utf-8?b?". base64_encode($subject) ."?=";

$message1 ="\n\nИмя: ".$name."\n\nE-mail: " .$email."\n\nСообщение: ".$message."\n\n";	


$header = "Content-Type: text/plain; charset=utf-8\n";

$header .= "From: Новая заявка <example@gmail.com>\n\n";	
$mail = mail("makster559553@gmail.com", $subject1, iconv ('utf-8', 'windows-1251', $message1), iconv ('utf-8', 'windows-1251', $header));
}
?>
