<?php
session_start();

//表示する"No"を取得
$No = filter_input( INPUT_GET, "No" );

//外部ファイル読み込み
include "../../includes/funcs.php"; // includeフォルダからfuncsを持ってくる（ブラウザからアクセスできないように）

//認証チェック
sessChk();

//DB接続
$pdo = db_con();

//データ登録SQL作成
$stmt = $pdo->prepare("SELECT * FROM law_list_table WHERE No=:No");
$stmt->bindValue(":No", $No, PDO::PARAM_INT);
$status = $stmt->execute();

//データ表示
$view = "";
if ($status == false) {
    sqlError($stmt);
} else {
    $row = $stmt->fetch();
}
?>



<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>更新</title>
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <style>div{padding: 10px;font-size:16px;}</style>
</head>
<body>

<!-- Head[Start] -->
<header>
    <?php echo $_SESSION["name"]; ?>さん　
    <?php include("menu.php"); ?>
</header>
<!-- Head[End] -->

<!-- Main[Start] -->
<form method="post" action="update.php">
  <div class="jumbotron">
   <fieldset>
    <legend>更新：登録法令一覧</legend>
     <label>法令名：<input type="text" name="LawName" value="<?php echo $row["法令名"]; ?>"></label><br>
     <label>略称：<input type="text" name="SoCalledName" value="<?php echo $row["略称"]; ?>"></label><br>
     <label>法令番号：<input type="text" name="LawNo" value="<?php echo $row["法令番号"]; ?>"></label><br>
     <label>種別：<input type="text" name="Category" value="<?php echo $row["種別"]; ?>"></label><br>
     <label>施行日：<input type="text" name="ExecutionDate" value="<?php echo $row["施行日"]; ?>"></label><br>
     <label>API：<input type="text" name="API" value="<?php echo $row["条文取得API"]; ?>"></label><br>
     <input type="hidden" name="No" value="<?php echo $row["No"]; ?>">
     <input type="submit" value="送信">
    </fieldset>
  </div>
</form>
<!-- Main[End] -->


</body>
</html>
