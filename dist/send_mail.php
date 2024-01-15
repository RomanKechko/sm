<?php

use PHPMailer\PHPMailer\PHPMailer;

require './vendor/autoload.php';

$msg = '';

if (array_key_exists('email', $_POST)) {
  $mail = new PHPMailer;
  $mail->IsSMTP();
  $mail->Host = 'smtp.yandex.ru';
  $mail->Port = 465;
  $mail->SMTPAuth = true;
  $mail->SMTPSecure = "ssl";
  $mail->Username = "info@smartcompletion.com"; // GMAIL username
  $mail->Password = ""; // GMAIL password
  $mail->CharSet = "UTF-8";

  $mail->AddAddress('info@smartcompletion.com', 'smartcompletion');
  $mail->SetFrom('info@smartcompletion.com', 'smartcompletion');

  $mail->Subject = 'Новое обращение на сайте';
  $mail->isHTML(false);
  $tel = $_POST['phone'] != '' ? $_POST['phone'] : "пользователь не указал телефон";
  $mail->Body = <<<EOT
 Имя: {$_POST['name']}
 E-mail: {$_POST['email']}
 Телефон: {$tel}
 Сообщение: {$_POST['message']}
EOT;
  $mail->send();
}
