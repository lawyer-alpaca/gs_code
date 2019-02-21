<?php
  header("Content-type: application/xml");
  $LawNo = file_get_contents("php://input");
  $url = "http://elaws.e-gov.go.jp/api/1/lawdata/".urlencode($LawNo);
  readfile($url);
?>

