<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>データ登録</title>
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <style>div{padding: 10px;font-size:16px;}</style>
</head>
<body>

<!-- Head[Start] -->
<header>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
    お気に入り法令データベース（β版）
    </div>
  </nav>
</header>
<!-- Head[End] -->

<!-- Main[Start] -->
<form method="post" action="insert.php" enctype="multipart/form-data">
  <div class="jumbotron">
   <fieldset>
    <legend>法令の登録</legend>
     <label>法令名：<input type="text" name="LawName"></label><br>
     <label>略称：<input type="text" name="SoCalledName"></label><br>
     <label>法令番号：<input type="text" name="LawNo"></label><br>
     <label>種別：<input type="text" name="Category"></label><br>
     <label>施行日：<input type="text" name="ExecutionDate"></label><br>
     <label>API：<input type="text" name="API"></label><br>
     <input type="submit" value="送信">
    </fieldset>
  </div>
</form>
<!-- Main[End] -->


</body>
</html>
