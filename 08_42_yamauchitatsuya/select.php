<?php
session_start();
//※htdocsと同じ階層に「includes」を作成してfuncs.phpを入れましょう！
include "../../includes/funcs.php"; // includeフォルダからfuncsを持ってくる（ブラウザからアクセスできないように）
sessChk();


$pdo = db_con();

//２．データ登録SQL作成
$stmt = $pdo->prepare("SELECT * FROM law_list_table");
$status = $stmt->execute();

//３．データ表示
$view = "";
if ($status == false) {
    sqlError($stmt);
} else {
    //Selectデータの数だけ自動でループしてくれる
    //FETCH_ASSOC=http://php.net/manual/ja/pdostatement.fetch.php
    while ($result = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $view .= '<p>';
        $API = $result["条文取得API"];

        if($_SESSION["kanri_flg"]=="1"){
            $view .= '<a href="delete.php?No=' . $result["No"] . '">';
            $view .= "【削除】";
            $view .= '</a>';
        }

        if($_SESSION["kanri_flg"]=="1"){
            $view .= '<a href="detail.php?No=' . $result["No"] . '">';
            $view .= $result["法令名"];
            $view .= '</a>';
            $view .= '<a href="'.$API.'">';
            $view .= "【条文を表示】";
            $view .= '</a>';
        }else{
            $view .= $result["法令名"];
            $view .= '<a href="'.$API.'">';
            $view .= "【条文を表示】";
            $view .= '</a>';
        }

        $view .= '</p>';

    }

}
?>


<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>登録法令一覧</title>
<link rel="stylesheet" href="css/range.css">
<link href="css/bootstrap.min.css" rel="stylesheet">
<style>div{padding: 10px;font-size:16px;}</style>
</head>
<body id="main">

<!-- Head[Start] -->
<header>
    <?php echo $_SESSION["name"]; ?>さん　
    <?php include("menu.php"); ?>
</header>
<!-- Head[End] -->

<!-- Main[Start] -->
<div>
    <h1>登録法令一覧</h1>
    <div class="container jumbotron"><?=$view?></div>
</div>
<!-- Main[End] -->

</body>
</html>
