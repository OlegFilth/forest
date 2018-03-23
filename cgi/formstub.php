<?php

mb_internal_encoding("UTF-8");

$cfg = array(
    'from' => 'noreply@rigales.ru',
    'fromName' => 'КП Новорижский Лес',
    'salesMail' => 'sales@iresidence.ru',
    'amoCaption' => 'заказ генплана КП Новорижский Лес',
    'amoResponsibleId' => 908826,
    'amoPipeline' => 'Новорижский Лес',
    'amoStatus' => 'Лид',
    'amoQueueUrl' => 'http://iresidence.ru/amo_integration/amo_request_add.php',
    'subject' => 'Генплан КП Новорижский Лес',
    'body' => 'Здравствуйте!<br> Высылаем Вам генеральный план КП Новорижский Лес',
    'reportSubject' => 'Заполнена заявка на получение генплана'
);

require 'vendor/PHPMailer/src/PHPMailer.php';
use PHPMailer\PHPMailer\PHPMailer;


// Валидация
if(!(mb_strlen(trim($_POST['email'])) > 0 &&  mb_strlen(mb_ereg_replace('/\D/', '', $_POST['phone'])) > 7)) {
    http_response_code(400);
    exit;
}

//var_dump($_POST);
//echo $_SERVER['DOCUMENT_ROOT'];
//echo $_SERVER['HTTP_REFERER'];

if (trim($_POST['name']) == '' && trim($_POST['email'])!= '')
    $_POST['name'] = $_POST['email'];

// FIXME: Убрать, как будет нормально работающий AJAX
header('Location: /#success-form-send', true, 303);

// Письмо на почту клиента
$mail = new PHPMailer();
$mail->isHTML(true);
$mail->CharSet = 'UTF-8';
$mail->setFrom($cfg['from'], $cfg['fromName']);
$mail->addAddress($_POST['email']);
$mail->Subject = $cfg['subject'];
$mail->Body = $cfg['body'];
$mail->addAttachment($_SERVER['DOCUMENT_ROOT'] . $_POST['attach_file']);
$mail->send();

// Письмо в отдел продаж
$report = new PHPMailer();
$report->isHTML(true);
$report->CharSet = 'UTF-8';
$report->setFrom($cfg['from'], $cfg['fromName']);
$report->addAddress($cfg['salesMail']);
$report->Subject = $cfg['reportSubject'];
$report->Body = <<<EOTPL
<b>Имя:</b> {$_POST['name']}<br>
<b>Телефон:</b> {$_POST['phone']}<br>
<b>E-mail:</b> {$_POST['email']}
EOTPL;

$report->send();

// Заявка в AMO CRM
$_POST['responsible_id'] = $cfg['amoResponsibleId'];
$_POST['caption'] = $_POST['name'] . ' - ' . $cfg['amoCaption'];
$_POST['pipeline'] = $cfg['amoPipeline'];
$_POST['status'] = $cfg['amoStatus'];

$curl_obj = curl_init($cfg['amoQueueUrl']);
curl_setopt($curl_obj, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl_obj, CURLOPT_HEADER, false);
curl_setopt($curl_obj, CURLOPT_CUSTOMREQUEST, 'POST');
curl_setopt($curl_obj, CURLOPT_POSTFIELDS, $_POST);

curl_exec($curl_obj);
curl_close($curl_obj);
