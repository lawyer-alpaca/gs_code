<?php
session_start();

//表示する"id"を取得
$No = filter_input( INPUT_GET, "No" );

//※htdocsと同じ階層に「includes」を作成してfuncs.phpを入れましょう！
include "../../includes/funcs.php";
sessChk();
$pdo = db_con();
$sql = "DELETE FROM law_list_table WHERE  No=:No";
$stmt = $pdo->prepare($sql);
$stmt->bindValue(':No', $No, PDO::PARAM_INT); //Integer（数値の場合 PDO::PARAM_INT)
$status = $stmt->execute();
if ($status == false) {
    sqlError($stmt);
} else {
    header("Location: select.php");
    exit;
}
