var config = {
    apiKey: "***************",
    authDomain: "***************",
    databaseURL: "***************",
    projectId: "***************",
    storageBucket: "***************",
    messagingSenderId: "***************"
};
firebase.initializeApp(config);

//URLから検索されたobjectIDを確認します。
de = location.search;
idd = de.split("=");
var url1 = 'root/' + idd[1] + '/LawName'
var url2 = 'root/' + idd[1] + '/LawNo'

function Rodn() {

   //Firebaseから「LawName」データを取得してきます
    firebase.database();
    var commentsRef = firebase.database().ref(url1)
    commentsRef.on('value', function (snapshot) {
        names = snapshot.val();
        //「LawName」データを出力
        document.getElementById('LawName').textContent = names;

    });
    //Firebaseから「LawNo」データを取得してきます
    var commentsRef = firebase.database().ref(url2)
    commentsRef.on('value', function (snapshot) {
        memos = snapshot.val();
        //「LawNo」データを出力
        document.getElementById('LawNo').textContent = memos;
    });
}
Rodn();

// LawNoの値をconnector.phpに送る
var commentsRef = firebase.database().ref(url2)
commentsRef.on('value', function (snapshot) {
     var LawNo = snapshot.val();
     console.log(LawNo);

// 法令APIの対象外法令については、個別にxmlファイルを用意して表示
if(LawNo == "明治四十三年法律第五十四号" ||
    LawNo == "昭和二十二年司法省令第九十四号" ||
    LawNo == "昭和二十五年法律第九十五号" ||
    LawNo == "昭和二十五年法律第二百二十六号" ||
    LawNo == "昭和二十五年総理府令第十三号" ||
    LawNo == "昭和二十五年電波監理委員会規則第十号" ||
    LawNo == "昭和二十九年総理府令第二十三号" ||
    LawNo == "昭和二十九年総理府令第四十号" ||
    LawNo == "昭和三十二年法律第二十六号" ||
    LawNo == "昭和三十二年政令第四十三号" ||
    LawNo == "昭和三十五年総理府令第六十号" ||
    LawNo == "昭和三十五年通商産業省令第十号" ||
    LawNo == "昭和三十六年自治省令第六号" ||
    LawNo == "昭和三十六年厚生省令第一号" ||
    LawNo == "昭和三十六年通商産業省令第九十五号" ||
    LawNo == "昭和四十年法律第三十三号" ||
    LawNo == "昭和四十五年通商産業省令第九十七号" ||
    LawNo == "昭和五十年労働省令第三号" ||
    LawNo == "昭和五十六年法務省令第五十四号" ||
    LawNo == "昭和五十七年大蔵省令第十号" ||
    LawNo == "昭和六十年郵政省令第二十五号" ||
    LawNo == "昭和六十三年政令第五十号" ||
    LawNo == "平成七年通商産業省令第七十七号" ||
    LawNo == "平成八年大蔵省令第五号" ||
    LawNo == "平成十年大蔵省令第二十九号" ||
    LawNo == "平成十年厚生省令第九十九号" ||
    LawNo == "平成十二年建設省令第二十号" ||
    LawNo == "平成十六年農林水産省令第百七号" ||
    LawNo == "平成十九年内閣府令第五十二号" ||
    LawNo == "平成二十二年総務省令第六十一号" ||
    LawNo == "平成二十六年内閣府・総務省・財務省・厚生労働省・農林水産省・経済産業省・国土交通省・環境省令第一号" ||
    LawNo == "平成二十八年国土交通省令第五号"
    ){
    $.ajax({
        type: 'GET',
        url: '../../SmartRoppo/excluded_laws/' + encodeURI(LawNo) +'.xml',
        dataType: 'xml',
    }).done(function(data){
        // ここに処理が完了したときのアクションを書く
        alert("取得完了！");
        console.log(LawNo);
        var LawData = $(data).find("LawBody");
        $("#result").append(LawData);
    });

    // // 法令番号が重複している法令については、法令名ベースで個別にxmlファイルを用意して表示
    // }else if(LawName==
    // "内閣官房に危機管理審議官を置く規則" ||
    // "内閣広報室に内閣副広報官等を置く規則" ||
    // "内閣総務官室に総理大臣官邸事務所等を置く規則"
    // ){
    // $.ajax({
    //     type: 'GET',
    //     url: '../excluded_laws/' + LawName +'.xml',
    //     dataType: 'xml',
    // }).done(function(data){
    //     // ここに処理が完了したときのアクションを書く
    //     alert("取得完了！");
    //     console.log(LawName);
    //     var LawData = $(data).find("LawBody");
    //     $("#result").append(LawData);
    // });

    // 法令APIで取得可能な法令の所得・表示処理
    } else {
     //ajaxで読み出し
    $.ajax({
        type: 'POST',
        url: '/SmartRoppo/js/connector.php',
        dataType: 'text',
        data: LawNo,
        }).done(function(data){
            // ここに処理が完了したときのアクションを書く
            alert("取得完了！\nレスポンスデータ：" + data);
            console.log(data);
            console.log(LawNo);
            var LawData = $(data).find("LawBody");
            $("#result").append(LawData);
        });
    }
})
