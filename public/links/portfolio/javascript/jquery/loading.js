$(".loading").height($(window).height());
$(".loading").width($(window).width());

    
$(".loading img").css({
    paddingTop: ($(".loading").height() - $(".loading img").height()) / 2,
    paddingLeft: ($(".loading").width() - $(".loading img").width()) / 2
});

$(window).resize(function () {
   
    "use strict";
    
    $(".loading").height($(window).height());
    $(".loading").width($(window).width());


    $(".loading img").css({
        paddingTop: ($(".loading").height() - $(".loading img").height()) / 2,
        paddingLeft: ($(".loading").width() - $(".loading img").width()) / 2
    });
    
});

// Mouvement de la souris
$(window).mousemove(function (e) {
   
    "use strict";
    
    $(".original").css({
        left: e.pageX - 16,
        top: e.pageY - 16
    });
    
});

// Cloner la couleur de la souris et la forme à l'instant T
$("body").on("click", function (e) {
   
    "use strict";
    
    $(".original").clone(true).appendTo("body").css({
        left: e.pageX - 16,
        top: e.pageY - 16
    }).removeClass("original");
    
});

/**/
function loadBar() {
    var bucket = $('#percent');
    var bar = $('#bar');
    var i = 0;
    $('#reset-load').hide();
    $('#site').hide();
    $("*").css("cursor","none");
    $(".souris").show();
    setInterval(function(){
        if(i === 101)  {
            clearInterval(this);
            $('#reset-load').show();
            $('#site').show();
            $(".souris").hide();
            $("*").css("cursor","default");
            $("li:hover, a:hover, #scroll_top, img:hover, input:hover, button:hover, textarea, .box").css("cursor","pointer");
        } else {
            bucket.text( i + '%' );
            bar.css('width', i + '%');
            i++;
        }
    }, 100);
}

$(document).ready(function(){
    loadBar();
    $('#reset-load').on('click', function(){
        loadBar();
    });
    $('#site').on('click', function(){
        $(".load").fadeOut("smooth");
        $("body").css("overflow","scroll !important");
        $("body").css("overflow-x","scroll");
        $("body").css("overflow-y","scroll");
        $(".souris").remove();
        $(".outer-horizontal").fadeIn(1000);
    });
});