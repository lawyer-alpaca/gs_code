// Initialize Firebase
var config = {
apiKey: "***************",
authDomain: "***************",
databaseURL: "***************",
projectId: "***************",
storageBucket: "***************",
messagingSenderId: "***************"
};
firebase.initializeApp(config);

var newPostRef = firebase.database().ref();

// 画像の準備
let d=0;
const img =["buke.png", "tuku.jpg", "caram.png"];
$(".imgs").on("click", function(){
    d=$(this).attr("data-img");
})

function msgPush(){
    newPostRef.push({
        text: $("#text").val(),
        icon: d
    });
    $("#text").val("");
    $("#output").scrollTop($("#output")[0].scrollHeight);
}


// 送信用イベント
$("#send").on("click", function(){
    msgPush();
});

//  Enterで送信
$("#text").on("keydown", function(e){
    if(e.keyCode==13){
        msgPush();
    }
})

newPostRef.on("child_added", function(data){
    let v = data.val();  // データ取得
    let k = data.key;  // ユニークキー取得（今日は使わない）
    console.log(v);

    // タイムラインメッセージ作成
    let str = '<p>' + '<img src="imgs/'+img[v.icon]+'" width="50">' + '<br>' + v.text+ '</p>';
    $("#output").append(str);

});