// 元のHTMLソースを保持しておく変数
var backupOriginal = "";
// 文字列を検索してハイライト用要素を加える処理
function replacer( str, word , att  ) {
    var SearchString = '(' + word + ')';
    var RegularExp = new RegExp( SearchString, "g" );
    var ReplaceString = '<span class="' + att + '">$1</span>';
    var ResString = str.replace( RegularExp , ReplaceString );
    return ResString;
}
// ハイライトを加える処理
window.onload = function(){
    function addhighlight() {
        backupOriginal = document.getElementById("result").innerHTML;
        var forShow = backupOriginal;
        // 単数括弧の場合
        forShow = replacer( forShow, "(（.*?）)", "mark1" ); // 第１括弧の中身をキャプチャ＝黄
        // 二重括弧の場合
        forShow = replacer( forShow, "(（[^）]*（.*?）[^（]*）)", "mark1" ); // 第１括弧の中身をキャプチャ＝黄
        forShow = replacer( forShow, "（[^）]*(（.*?）)[^（]*）", "mark2" ); // 第２括弧の中身をキャプチャ＝黄緑
        // 三重括弧の場合
        forShow = replacer( forShow, "(（[^）]*（[^）]*（.*?）[^（]*）[^（]*）)", "mark1" ); // 第１括弧の中身をキャプチャ＝黄
        forShow = replacer( forShow, "（[^）]*(（[^）]*（.*?）[^（]*）)[^（]*）", "mark2" ); // 第２括弧の中身をキャプチャ＝黄緑
        forShow = replacer( forShow, "（[^）]*（[^）]*(（.*?）)[^（]*）[^（]*）", "mark6" ); // 第３括弧の中身をキャプチャ＝青
        // 四重括弧の場合
        forShow = replacer( forShow, "(（[^）]*（[^）]*（[^）]*（.*?）[^（]*）[^（]*）[^（]*）)", "mark1" ); // 第１括弧の中身をキャプチャ＝黄
        forShow = replacer( forShow, "（[^）]*(（[^）]*（[^）]*（.*?）[^（]*）[^（]*）)[^（]*）", "mark2" ); // 第２括弧の中身をキャプチャ＝黄緑
        forShow = replacer( forShow, "（[^）]*（[^）]*(（[^）]*（.*?）[^（]*）)[^（]*）[^（]*）", "mark6" ); // 第３括弧の中身をキャプチャ＝青
        forShow = replacer( forShow, "（[^）]*（[^）]*（[^）]*(（.*?）)[^（]*）[^（]*）[^（]*）", "mark3" ); // 第４括弧の中身をキャプチャ＝ピンク

        forShow = replacer( forShow, "」という", "mark5" ); // 赤
        forShow = replacer( forShow, "法律", "mark4" ); // 青
        forShow = replacer( forShow, "政令", "mark4" ); // 赤
        forShow = replacer( forShow, "内閣府令", "mark4" ); // 赤
        
        document.getElementById("result").innerHTML = forShow;
    }

    // ハイライトを消す処理
    function clearhighlight() {
        document.getElementById("result").innerHTML = backupOriginal;  // バックアップから書き戻す
        backupOriginal = "";    // バックアップを消す
    }
    // ハイライトを加えるか消すかを判断
    function highlightcheck() {
        if( backupOriginal.length == 0 ) {
            // 何もバックアップされていなければ（未ハイライトなので）ハイライトを加える
            addhighlight();
        }
        else {
            // 何かバックアップされていれば（ハイライト済みなので）ハイライトを消す
            clearhighlight();
        }
    }
// ボタンクリックイベントに、上記の関数を割り当てる
    document.getElementById("btn-onoff").onclick  = highlightcheck;
};
