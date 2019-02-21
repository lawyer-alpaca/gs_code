// 元のHTMLソースを保持しておく変数
var backupOriginal = "";

// 条文データの読み込みが終わってから実行
window.onload = function(){
    
    // ハイライトを加える処理（通常のカッコ書きに対して）
    function addhighlight_brackets(){
        var backupOriginal = document.getElementById("result").innerHTML;
        var splited = backupOriginal.split(/([「（）」])/); // ()だけでなく「」でもスプリットする
        nest=0;
        output="";
        console.log(splited);
        for(var i=0; i<splited.length; i++){

            if(i<6 && splited[i]=="（" && splited[i-1].indexOf("<articlecaption>")==-1){
                nest++;
                output += '<span class="nest'+nest+'">（';
                console.log('i:'+i+'/condition:1/nest:'+nest+'/'+splited[i]);

            }else if(
                i>=6 && splited[i]=="（" && splited[i-1].indexOf("<articlecaption>")==-1 
                &&
                ((splited[i-2].indexOf("「")==-1) || (splited[i+2].indexOf("」")==-1))
                &&
                ((splited[i-4].indexOf("「")==-1) || (splited[i+2].indexOf("」")==-1))
                &&
                ((splited[i-6].indexOf("「")==-1) || (splited[i+2].indexOf("」")==-1))
                &&
                ((splited[i-2].indexOf("「")==-1) || (splited[i+4].indexOf("」")==-1))
                &&
                ((splited[i-2].indexOf("「")==-1) || (splited[i+6].indexOf("」")==-1))
                // &&
                // ((splited[i-4].indexOf("「")==-1) || (splited[i+4].indexOf("」")==-1))
                ){
                nest++;
                output += '<span class="nest'+nest+'">（';
                console.log('i:'+i+'/condition:2/nest:'+nest+'/'+splited[i]);

            }else if(i<6 && splited[i]=="）" && splited[i+1].indexOf("</articlecaption>")==-1){
                output += '）</span>';
                nest--;
                console.log('i:'+i+'/condition:3/nest:'+nest+'/'+splited[i]);

            }else if(
                i>=6 && splited[i]=="）" && splited[i+1].indexOf("</articlecaption>")==-1 
                && 
                ((splited[i-2].indexOf("「")==-1) || (splited[i+2].indexOf("」")==-1))
                &&
                ((splited[i-4].indexOf("「")==-1) || (splited[i+2].indexOf("」")==-1))
                &&
                ((splited[i-6].indexOf("「")==-1) || (splited[i+2].indexOf("」")==-1))
                &&
                ((splited[i-2].indexOf("「")==-1) || (splited[i+4].indexOf("」")==-1))
                &&
                ((splited[i-2].indexOf("「")==-1) || (splited[i+6].indexOf("」")==-1))
                // &&
                // ((splited[i-4].indexOf("「")==-1) || (splited[i+4].indexOf("」")==-1))
                ){
                output += '）</span>';
                nest--;
                console.log('i:'+i+'/condition:4/nest:'+nest+'/'+splited[i]);

            }else{
                output += splited[i];
                console.log('i:'+i+'/condition:5/nest:'+nest+'/'+splited[i]);
            }
        }

        // for(var i=0; i<splited.length; i++){
        //     if(
        //         (i>2 && splited[i]=="（" && splited[i-2].indexOf("「")==1 && splited[i+2].indexOf("」")==1)
        //         ||(i>4 && splited[i]=="（" && splited[i-4].indexOf("「")==1 && splited[i+2].indexOf("」")==1)
        //         ||(i>6 && splited[i]=="（" && splited[i-6].indexOf("「")==1 && splited[i+2].indexOf("」")==1)
        //     ){
        //         nest--;
        //         output -= '<span class="nest'+nest+'">（';
        //     } else if(
        //         (i>2 && splited[i]=="）" && splited[i-2].indexOf("「")==1 && splited[i+2].indexOf("」")==1)
        //         ||(i>4 && splited[i]=="）" && splited[i-4].indexOf("「")==1 && splited[i+2].indexOf("」")==1)
        //         ||(i>6 && splited[i]=="）" && splited[i-6].indexOf("「")==1 && splited[i+2].indexOf("」")==1)
        //     ){
        //         output -= '）</span>';
        //         nest++;
        //     }
        // }

        $('#result').html(output);
        console.log(backupOriginal);
    }
    // // ハイライトを加える処理（定義文言に対して）
    // function addhighlight_definition(){
    //     backupOriginal = document.getElementById("result").innerHTML;
    //     function replacer( str, word , att  ) {
    //         var SearchString = '(' + word + ')';
    //         var RegularExp = new RegExp( SearchString, "g" );
    //         var ReplaceString = '<span class="' + att + '">$1</span>';
    //         var ResString = str.replace( RegularExp , ReplaceString );
    //         return ResString;
    //     }
    //     backupOriginal = document.getElementById("result").innerHTML;
    //     var forShow = backupOriginal;
    //     forShow = replacer( forShow, "（.*以下.*という.*）", "mark1" );
    //     forShow = replacer( forShow, "（.*をいう.*）", "mark1" );
    // }


    // ハイライトを消す処理
    function clearhighlight() {
        $('.nest1').contents().unwrap();
        $('.nest2').contents().unwrap();
        $('.nest3').contents().unwrap();
        $('.nest4').contents().unwrap();
        $('.nest5').contents().unwrap();
        // $('.mark1').contents().unwrap();

        // document.getElementById("result").innerHTML = backupOriginal;  // バックアップから書き戻す
        // backupOriginal = "";    // バックアップを消す
        // console.log(backupOriginal);

    }

    // ハイライトを加えるか消すかを判断
    $('#btn-onoff').on ('change', function() {
        if($(this).prop('checked')){
            addhighlight_brackets();
            // addhighlight_definition();
          }else{
            clearhighlight();
          }

        // if( backupOriginal.length == 0 ) {
        //     // 何もバックアップされていなければ（未ハイライトなので）ハイライトを加える
        //     addhighlight();
        //     console.log(backupOriginal);
        // }
        // else {
        //     // 何かバックアップされていれば（ハイライト済みなので）ハイライトを消す
        //     clearhighlight();
        //     console.log(backupOriginal);
        // }
    });
};

