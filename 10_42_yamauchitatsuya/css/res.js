var config = {
    apiKey: "AIzaSyChUIhiRxGwUCB37GYeYdqUtHOd4l6nE08",
    authDomain: "smartroppo-4765d.firebaseapp.com",
    databaseURL: "https://smartroppo-4765d.firebaseio.com",
    projectId: "smartroppo-4765d",
    storageBucket: "smartroppo-4765d.appspot.com",
    messagingSenderId: "1084525545420"
};
firebase.initializeApp(config);

function Rodn() {
     //URLから検索されたobjectIDを確認します。
    de = location.search;
    idd = de.split("=");
    var url1 = 'root/' + idd[1] + '/LawName'
    var url2 = 'root/' + idd[1] + '/LawNo'

   //Firebaseから「name」データを取得してきます
    firebase.database();
    var commentsRef = firebase.database().ref(url1)
    commentsRef.on('value', function (snapshot) {
        names = snapshot.val();
        //「name」データを出力
        document.getElementById('LawName').textContent = names;

    });
    //Firebaseから「memo」データを取得してきます
    var commentsRef = firebase.database().ref(url2)
    commentsRef.on('value', function (snapshot) {
        memos = snapshot.val();
        //「name」データを出力
        document.getElementById('LawNo').textContent = memos;

    });

}
Rodn();

console.log('OK');