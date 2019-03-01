<?php
//1. POSTデータ取得
$LawName   = filter_input( INPUT_POST, "LawName" );
$SoCalledName  = filter_input( INPUT_POST, "SoCalledName" );
$LawNo = filter_input( INPUT_POST, "LawNo" );
$Category    = filter_input( INPUT_POST, "Category" );
$ExecutionDate    = filter_input( INPUT_POST, "ExecutionDate" );
$API    = filter_input( INPUT_POST, "API" );

//2. DB接続します
include "../../includes/funcs.php";
$pdo = db_con();

//３．データ登録SQL作成
$sql = "INSERT INTO law_list_table(法令名,略称,法令番号,種別,施行日,条文取得API)VALUES(:LawName,:SoCalledName,:LawNo,:Category,:ExecutionDate,:API)";
$stmt = $pdo->prepare($sql);
$stmt->bindValue(':LawName', $LawName, PDO::PARAM_STR);
$stmt->bindValue(':SoCalledName', $SoCalledName, PDO::PARAM_STR);
$stmt->bindValue(':LawNo', $LawNo, PDO::PARAM_STR);
$stmt->bindValue(':Category', $Category, PDO::PARAM_STR);
$stmt->bindValue(':ExecutionDate', $ExecutionDate, PDO::PARAM_STR); 
$stmt->bindValue(':API', $API, PDO::PARAM_STR); 

$status = $stmt->execute();

//４．データ登録処理後
if ($status == false) {
    sqlError($stmt);
} else {
    //５．index.phpへリダイレクト
    header("Location: index.php");
    exit;
}
