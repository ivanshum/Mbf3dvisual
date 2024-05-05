<?php
header("Content-type: application/json; charset=utf-8");
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if(isset($_POST['phone'])){
  $mail = new PHPMailer(true);
  $mail->SMTPDebug = 0;
  $mail->isSMTP();
  $mail->SMTPAuth = true;
  $mail->SMTPSecure = "tls";
  $mail->Host = 'ssl://smtp.yandex.ru';
  $mail->Port = 465;
  $mail->Username = 'we@mustbefamily.com';
  $mail->Password = 'q2a4jdVcY697guW';
  $mail->From = "we@mustbefamily.com";
  $mail->FromName = "Must Be Family";
  $mail->addAddress("we@mustbefamily.com", "Must Be Family");
  $mail->isHTML(true);
  $phone = htmlspecialchars(stripslashes(trim($_POST['phone'])));
  $email = htmlspecialchars(stripslashes(trim($_POST['email'])));
  $name = htmlspecialchars(stripslashes(trim($_POST['name'])));
  if(!preg_match("/^\d{10,11}$/", $phone)){
	  $return = array("status"=>"error","msg"=>"Номер телефона заполнен неверно");
  }
  if(!preg_match("/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i", $email)){
	  $return = array("status"=>"error","msg"=>"Поле email указано не верно");
  }
  if(!$name){
	  $return = array("status"=>"error","msg"=>"Имя не указано или содержит недопустимые символы");
  }
  if (!isset($phone_error)) {
    $mail->Subject = "Обращение на mustbefamily.com";
    $body = " Телефон: $phone\r\n Email: $email\r\n Имя: $name";
    $mail->Body = $body;
    if($mail->send()){
      $return = array("status"=>"ok","msg"=>"Спасибо, мы перезвоним вам в течении 5 минут!");
    }else{
      $return = array("status"=>"error","msg"=>"Упс! Что-то пошло не так. Попробуйте обновить страницу и попробовать ещё раз. Или воспользуйтесь кнопкой выше и позвоните нам!");
    }
  }
  $json = json_encode($return);
  echo $json;
}
?>
