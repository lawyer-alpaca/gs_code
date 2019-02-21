
// メニューモーダルの開閉

$(function(){
    $('.menu-btn').click(function(){
      $('nav').toggleClass('open');
      $('button').toggleClass('active');}
    );
})

// チャットウィンドウの表示（背景も暗く）
// $(function(){
//     $('#chat-icon-button').click(function(){
//     $('#chat-wrapper').fadeIn(500);
//     $('body').addClass('modal-bgcolor');
//     });
// })

// チャットウィンドウ以外の場所をクリックしたらチャットウィンドウを閉じる
// $(function(){
//     $(document).click(function(event) {
//         if (!$.contains($('#chat-icon-button')[0], event.target) && !$.contains($('#chat-wrapper')[0], event.target)) {
//             $("#chat-wrapper").fadeOut(500);
//             $('body').removeClass('modal-bgcolor');
//         }
//     });
// })


