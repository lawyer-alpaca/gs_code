<?php
//$_SESSION使うよ！
session_start();

//※htdocsと同じ階層に「includes」を作成してfuncs.phpを入れましょう！
include "../../includes/funcs.php";
sessChk();

//1. POSTデータ取得
$LawName   = filter_input( INPUT_POST, "LawName" );
$SoCalledName  = filter_input( INPUT_POST, "SoCalledName" );
$LawNo = filter_input( INPUT_POST, "LawNo" );
$Category    = filter_input( INPUT_POST, "Category" );
$ExecutionDate    = filter_input( INPUT_POST, "ExecutionDate" );
$API    = filter_input( INPUT_POST, "API" );
$No     = filter_input( INPUT_POST, "No" );

//2. DB接続します
$pdo = db_con();

//３．データ登録SQL作成
$sql = "UPDATE law_list_table SET 法令名=:LawName,略称=:SoCalledName,法令番号=:LawNo,種別=:Category,施行日=:ExecutionDate,条文取得API=:API WHERE No=:No";
$stmt = $pdo->prepare($sql);
$stmt->bindValue(':LawName', $LawName, PDO::PARAM_STR); //Integer（数値の場合 PDO::PARAM_INT)
$stmt->bindValue(':SoCalledName', $SoCalledName, PDO::PARAM_STR); //Integer（数値の場合 PDO::PARAM_INT)
$stmt->bindValue(':LawNo', $LawNo, PDO::PARAM_STR); //Integer（数値の場合 PDO::PARAM_INT)
$stmt->bindValue(':Category', $Category, PDO::PARAM_INT); //Integer（数値の場合 PDO::PARAM_INT)
$stmt->bindValue(':ExecutionDate', $ExecutionDate, PDO::PARAM_STR); 
$stmt->bindValue(':API', $API, PDO::PARAM_STR); 
$stmt->bindValue(':No', $No, PDO::PARAM_INT); //Integer（数値の場合 PDO::PARAM_INT)
$status = $stmt->execute();

//４．データ登録処理後
if ($status == false) {
    sqlError($stmt);
} else {
    //５．index.phpへリダイレクト
    header("Location: select.php");
    exit;
}
