$(function(){
    /************************************
    コピー禁止
    ************************************/
    /*
    $(document).bind("copy selectstart",function(e){
        return false;
    });
    */

    /************************************
    ページ内スクロール
    ************************************/
    $('a[href^="#"]').on('click', function () {
        var tgtLink = $(this).attr('href');
        var scrollY = $(tgtLink).offset().top;
        $('html,body').animate({
            scrollTop: scrollY
        }, 500, 'swing');
        return false;
    });
   
    /************************************
    toggleの挙動
    ************************************/
    var slideBtn = $('.slideBtn');
    var hideCts = $('.hideCts');
    hideCts.hide();
    slideBtn.on('click',  function() {
        $(this).next().slideToggle(200);
        $(this).toggleClass('active');
    });

    /************************************
    ハンバーガーメニューの挙動
    ************************************/
    var hbMenuBtn = $('.menuTrigger');
    var menuBox = $('.menuBox');
    hbMenuBtn.on('click',  function() {
        $(this).toggleClass('active');
        menuBox.toggleClass('active');
        return false;
    });

    /************************************
    フォントサイズ調整ボタン
    ************************************/
    var fontBtn = $('.fontBtn');
    fontBtn.on('click', function(){
        if( $(this).attr("class")==="active") {
        } else{
            $('.active').removeClass('active');
            $(this).addClass("active");
        }
    });
    
    /************************************
    slick.jsオプション
    ************************************/
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 3,
    });
    $('.thumb').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 8,
        responsive: [
         {
          breakpoint: 768,
          settings: {
            slidesToShow: 5
          }
         }
       ]
    });
});

/************************************
フォントサイズ変更関数
************************************/
function fontSize(size) {
    var size = size;
    $('body .wrap-body').css({
        "font-size": size + "px"
    });
}

/************************************
コンテンツフェードイン 要素にclass="fade-in"を設定
************************************/
$(window).on('load', function() {
    $(window).scroll(function() {
        $('.fade-in').each(function() {
            var ctsPosition = $(this).offset().top;
            var winHeight = $(window).height();
            if ($(window).scrollTop() > ctsPosition - winHeight + winHeight/4) {
                $(this).css("opacity", "1" );
            } else {
                $(this).css("opacity", "0" );
            }
        });
    });
});
