$(document).ready(function(){

// Scroll Top
$("#scroll_top").click(function(){
    var id = $(this).val();
    var elmnt = document.getElementById(id);
    elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});


var add_menu = true;
var Browser_name;

    var module = {
        options: [],
        header: [navigator.platform, navigator.userAgent, navigator.appVersion, navigator.vendor, window.opera],
        dataos: [
            { name: 'Windows Phone', value: 'Windows Phone', version: 'OS' },
            { name: 'Windows', value: 'Win', version: 'NT' },
            { name: 'iPhone', value: 'iPhone', version: 'OS' },
            { name: 'iPad', value: 'iPad', version: 'OS' },
            { name: 'Kindle', value: 'Silk', version: 'Silk' },
            { name: 'Android', value: 'Android', version: 'Android' },
            { name: 'PlayBook', value: 'PlayBook', version: 'OS' },
            { name: 'BlackBerry', value: 'BlackBerry', version: '/' },
            { name: 'Macintosh', value: 'Mac', version: 'OS X' },
            { name: 'Linux', value: 'Linux', version: 'rv' },
            { name: 'Palm', value: 'Palm', version: 'PalmOS' }
        ],
        databrowser: [
            { name: 'Chrome', value: 'Chrome', version: 'Chrome' },
            { name: 'Firefox', value: 'Firefox', version: 'Firefox' },
            { name: 'Safari', value: 'Safari', version: 'Version' },
            { name: 'Internet Explorer', value: 'MSIE', version: 'MSIE' },
            { name: 'Opera', value: 'Opera', version: 'Opera' },
            { name: 'BlackBerry', value: 'CLDC', version: 'CLDC' },
            { name: 'Mozilla', value: 'Mozilla', version: 'Mozilla' }
        ],
        init: function () {
            var agent = this.header.join(' '),
                os = this.matchItem(agent, this.dataos),
                browser = this.matchItem(agent, this.databrowser);
            
            return { os: os, browser: browser };
        },
        matchItem: function (string, data) {
            var i = 0,
                j = 0,
                html = '',
                regex,
                regexv,
                match,
                matches,
                version;
            
            for (i = 0; i < data.length; i += 1) {
                regex = new RegExp(data[i].value, 'i');
                match = regex.test(string);
                if (match) {
                    regexv = new RegExp(data[i].version + '[- /:;]([\\d._]+)', 'i');
                    matches = string.match(regexv);
                    version = '';
                    if (matches) { if (matches[1]) { matches = matches[1]; } }
                    if (matches) {
                        matches = matches.split(/[._]+/);
                        for (j = 0; j < matches.length; j += 1) {
                            if (j === 0) {
                                version += matches[j] + '.';
                            } else {
                                version += matches[j];
                            }
                        }
                    } else {
                        version = '0';
                    }
                    return {
                        name: data[i].name,
                        version: parseFloat(version)
                    };
                }
            }
            return { name: 'unknown', version: 0 };
        }
    };
    
    var e = module.init(),
        debug = '';
        debug += e.browser.name;
        debug += ".e";
 /*   
    debug += 'os.name = ' + e.os.name + '<br/>';
    debug += 'os.version = ' + e.os.version + '<br/>';
    debug += 'browser.name = ' + e.browser.name + '<br/>';
    debug += 'browser.version = ' + e.browser.version + '<br/>';
    
    debug += '<br/>';
    debug += 'navigator.userAgent = ' + navigator.userAgent + '<br/>';
    debug += 'navigator.appVersion = ' + navigator.appVersion + '<br/>';
    debug += 'navigator.platform = ' + navigator.platform + '<br/>';
    debug += 'navigator.vendor = ' + navigator.vendor + '<br/>';
    
    document.getElementById('log').innerHTML = debug;
*/

// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1 - 79
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

// Edge (based on chromium) detection
var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;

/*
var output = 'Detecting browsers by ducktyping:<hr>';
output += 'isFirefox: ' + isFirefox + '<br>';
output += 'isChrome: ' + isChrome + '<br>';
output += 'isSafari: ' + isSafari + '<br>';
output += 'isOpera: ' + isOpera + '<br>';
output += 'isIE: ' + isIE + '<br>';
output += 'isEdge: ' + isEdge + '<br>';
output += 'isEdgeChromium: ' + isEdgeChromium + '<br>';
output += 'isBlink: ' + isBlink + '<br>';
document.body.innerHTML = output;
*/
/*

if (!isChrome) {
  Browser_name = "Chrome";
  navigateur_defaillant();
}
else if(isEdgeChromium){
  Browser_name = "Edge";
  navigateur_defaillant();
}
else if(isOpera){
  Browser_name = "Opera";
  navigateur_scrollable();
}
else if(isFirefox){
  Browser_name = "FireFox";
  navigateur_scrollable();
}
else if(isSafari){
  Browser_name = "Safari";
  navigateur_scrollable();
}
else if(isIE){
  Browser_name = "Internet Explorer";
  navigateur_scrollable();
}
else if(isBlink){
  Browser_name = "Blink";
  navigateur_scrollable();
}
else if(debug == "Firefox") {
  Browser_name = "FireFox Mobile";
  navigateur_scrollable();
}
else if(debug == "Mozilla") {
  Browser_name = "Mozilla Mobile";
  navigateur_scrollable();
}
else if(debug == "Internet Explorer") {
  Browser_name = "Internet Explorer Mobile";
  navigateur_scrollable();
}
else if(debug == "Safari") {
  Browser_name = "Safari Mobile";
  navigateur_scrollable();
}
else if(debug == "BlackBerry") {
  Browser_name = "BlackBerry Mobile";
  navigateur_scrollable();
}
else if(debug == "Opera") {
  Browser_name = "Opera Mobile";
  navigateur_scrollable();
}
else if(debug == "Chrome") {
  Browser_name = "Chrome Mobile";
  navigateur_defaillant();
}
else {
  Browser_name = debug;
  navigateur_scrollable();
  //add_menu = false;
}

*/





/*Début site_defaillant ou non*/
function navigateur_defaillant(){
  alert("Nous avons un soucis avec la version mobile avec votre navigateur "+ Browser_name +". Vous ne pourrez pas effectuer de scroll horizontal, c'est pourquoi nous vous mettons à disposition un menu sur votre gauche.");
  add_menu = true;
  $("#menu").show();
}
function navigateur_scrollable(){
  if (confirm("Vous utilisez le navigateur "+ Browser_name + ".Une nouvelle fonctionnalité est disponible dans le site, Il s'agit d'un menu qui vous aide tout au long de la visite. ^-^")) {
    menu_accueil();
    add_menu = true;
    $("#menu").show();
  }
  else {
    add_menu = false;
    $("#menu").remove();
  }
}


// Slide
function slideTwo(){
    var elmnt = document.getElementById("two");
    elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}
function slideThree(){
    var elmnt = document.getElementById("three");
    elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}
function slideFour(){
    var elmnt = document.getElementById("four");
    elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

// Fonction scroll Vertical ou Horizontal
function vertical_scroll_Mode(){
    $(".outer-vertical").css("overflow-y","scroll");
    $(".outer-horizontal").css("overflow-y","hidden");
}
function horizontal_scroll_Mode(){
    $(".outer-vertical").css("overflow-y","hidden");
    $(".outer-horizontal").css("overflow-y","scroll");
    $("#scroll_top").fadeOut("smooth").val("");
}

// Dans le menu
function menu_accueil(){
  $("#menu").fadeIn(1000);
    $("#rubrique_one").html("Accueil");
    $("#rubrique_one").click(function(){
      var elmnt = document.getElementById("one");
      elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });
    $("#rubrique_two").html("Compétences");
    $("#rubrique_two").click(function(){
      var elmnt = document.getElementById("two");
      elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });
    $("#rubrique_three").html("Réalisations");
    $("#rubrique_three").click(function(){
      var elmnt = document.getElementById("three");
      elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });
    $("#rubrique_four").html("À propos");
    $("#rubrique_four").click(function(){
      var elmnt = document.getElementById("four");
      elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });
}
function menu_competence(){
  $("#menu").fadeIn(1000);
    $("#rubrique_one").html("Top");
    $("#rubrique_one").click(function(){
      var elmnt = document.getElementById("two");
      elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });
    $("#rubrique_two").html("Compétences");
    $("#rubrique_two").click(function(){
      var elmnt = document.getElementById("page_competences");
      elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });
    $("#rubrique_three").html("Parcours scolaire");
    $("#rubrique_three").click(function(){
      var elmnt = document.getElementById("parcours");
      elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });
    $("#rubrique_four").html("Expériences");
    $("#rubrique_four").click(function(){
      var elmnt = document.getElementById("experiences");
      elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });
}
function menu_realisations(){
  $("#menu").fadeIn(1000);
    $("#rubrique_one").html("Top");
    $("#rubrique_one").click(function(){
      var elmnt = document.getElementById("three");
      elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });
    $("#rubrique_two").html("Réalisations");
    $("#rubrique_two").click(function(){
      var elmnt = document.getElementById("page_realisations");
      elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });
    $("#rubrique_three").html("Bottom");
    $("#rubrique_three").click(function(){
      var elmnt = document.getElementById("resultat");
      elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });
    $("#rubrique_four").html("^");
    $("#rubrique_four").click(function(){
      var elmnt = document.getElementById("page_realisations");
      elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });
}
function menu_contact(){
  $("#menu").fadeIn(1000);
    $("#rubrique_one").html("Top");
    $("#rubrique_one").click(function(){
      var elmnt = document.getElementById("four");
      elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });
    $("#rubrique_two").html("Contact");
    $("#rubrique_two").click(function(){
      var elmnt = document.getElementById("contact");
      elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });
    $("#rubrique_three").html("Adresse");
    $("#rubrique_three").click(function(){
      var elmnt = document.getElementById("adresse");
      elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });
    $("#rubrique_four").html("Réseaux sociaux");
    $("#rubrique_four").click(function(){
      var elmnt = document.getElementById("medias");
      elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });
}


if (add_menu == true) {
    menu_accueil();
    /*Compétences*/
    $(".horizontal_skill").click(function() {
      slideTwo();
      $(".horizontal_skill").fadeOut("smooth");
      $(".vertical_skill").fadeIn(1000);
      vertical_scroll_Mode();
      menu_competence();
      $("#scroll_top").fadeIn(1000).val("two");
    });
    $(".vertical_skill").click(function() {
      slideTwo();
      $(".vertical_skill").fadeOut("smooth");
      $(".horizontal_skill").fadeIn(1000);
      horizontal_scroll_Mode();
      menu_accueil();
    });
    /*Realisations*/
    $(".horizontal_realisations").click(function() {
      slideThree();      
      $(".horizontal_realisations").fadeOut("smooth");
      $(".vertical_realisations").fadeIn(1000);
      vertical_scroll_Mode();
      menu_realisations();
      $("#scroll_top").fadeIn(1000).val("three");
    });
    $(".vertical_realisations").click(function() {
      slideThree();
      horizontal_scroll_Mode();
      $(".vertical_realisations").fadeOut("smooth");
      $(".horizontal_realisations").fadeIn(1000);
      menu_accueil();
    });
    /*A propos*/
    $(".horizontal_A_propos").click(function() {
      slideFour();
      $(".horizontal_A_propos").fadeOut("smooth");
      $(".vertical_A_propos").fadeIn(1000);
      vertical_scroll_Mode();
      menu_contact();
      $("#scroll_top").fadeIn(1000).val("four");
    });
    $(".vertical_A_propos").click(function() {
      slideFour();
      $(".vertical_A_propos").fadeOut("smooth");
      $(".horizontal_A_propos").fadeIn(1000);
      horizontal_scroll_Mode();
      menu_accueil();
    });
}
else {
    /*Compétences*/
    $(".horizontal_skill").click(function() {
      slideTwo();
      $(".horizontal_skill").fadeOut("smooth");
      $(".vertical_skill").fadeIn(1000);
      vertical_scroll_Mode();
      $("#scroll_top").fadeIn(1000).val("two");
    });
    $(".vertical_skill").click(function() {
      slideTwo();
      $(".vertical_skill").fadeOut("smooth");
      $(".horizontal_skill").fadeIn(1000);
      horizontal_scroll_Mode();
    });
    /*Realisations*/
    $(".horizontal_realisations").click(function() {
      slideThree();      
      $(".horizontal_realisations").fadeOut("smooth");
      $(".vertical_realisations").fadeIn(1000);
      vertical_scroll_Mode();
    });
    $(".vertical_realisations").click(function() {
      slideThree();
      horizontal_scroll_Mode();
      $(".vertical_realisations").fadeOut("smooth");
      $(".horizontal_realisations").fadeIn(1000);
      $("#scroll_top").fadeIn(1000).val("three");
    });
    /*A propos*/
    $(".horizontal_A_propos").click(function() {
      slideFour();
      $(".horizontal_A_propos").fadeOut("smooth");
      $(".vertical_A_propos").fadeIn(1000);
      vertical_scroll_Mode();
    });
    $(".vertical_A_propos").click(function() {
      slideFour();
      $(".vertical_A_propos").fadeOut("smooth");
      $(".horizontal_A_propos").fadeIn(1000);
      horizontal_scroll_Mode();
      $("#scroll_top").fadeIn(1000).val("four");
    });
}
    
// Button____________________________________________________________
// Button____________________________________________________________






// Menu____________________________________________________________
// Menu____________________________________________________________


  var height = window.innerHeight,
    x = 0,
    y = height / 2,
    curveX = 10,
    curveY = 0,
    targetX = 0,
    xitteration = 0,
    yitteration = 0,
    menuExpanded = false;

  (blob = $("#blob")),
    (blobPath = $("#blob-path")),
    (hamburger = $(".hamburger"));

  $(this).on("mousemove", function (e) {
    x = e.pageX;

    y = e.pageY;
  });

  $(".menu-inner").on("mouseenter", function () {
    $(this).parent().addClass("expanded");
    menuExpanded = true;
  });
  $(".hamburger, #blob").on("mouseenter", function () {
    $(".menu-inner").parent().addClass("expanded");
    menuExpanded = true;
  });

  $(".menu-inner").on("mouseleave", function () {
    menuExpanded = false;
    $(this).parent().removeClass("expanded");
  });
  $(".hamburger, #blob").on("mouseleave", function () {
    $(".menu-inner").parent().removeClass("expanded");
    menuExpanded = false;
  });

  $(".menu-inner").click(function() {
    if(menuExpanded == false){
      $(this).parent().addClass("expanded");
      menuExpanded = true;
      console.log("c'est bon");
    }
    else {
      menuExpanded = false;
      $(this).parent().removeClass("expanded");
      console.log("c'est pas bon");
    }
  });  
  $(".hamburger, #blob").on("click",function() {
    if(menuExpanded == false){
      $(this).parent().addClass("expanded");
      menuExpanded = true;
      console.log("c'est bon2");
    }
    else {
      $(".menu-inner").parent().removeClass("expanded");
      menuExpanded = false;
      console.log("c'est pas bon 2");
    }
  });

  function easeOutExpo(
    currentIteration,
    startValue,
    changeInValue,
    totalIterations
  ) {
    return (
      changeInValue *
        (-Math.pow(2, (-10 * currentIteration) / totalIterations) + 1) +
      startValue
    );
  }

  var hoverZone = 50;
  var expandAmount = 5;

  function svgCurve() {
    if (curveX > x - 1 && curveX < x + 1) {
      xitteration = 0;
    } else {
      if (menuExpanded) {
        targetX = 0;
      } else {
        xitteration = 0;
        if (x > hoverZone) {
          targetX = 0;
        } else {
          targetX = -(((60 + expandAmount) / 100) * (x - hoverZone));
        }
      }
      xitteration++;
    }

    if (curveY > y - 1 && curveY < y + 1) {
      yitteration = 0;
    } else {
      yitteration = 0;
      yitteration++;
    }

    curveX = easeOutExpo(xitteration, curveX, targetX - curveX, 100);
    curveY = easeOutExpo(yitteration, curveY, y - curveY, 100);

    var anchorDistance = 200;
    var curviness = anchorDistance - 40;

    var newCurve2 =
      "M60," +
      height +
      "H0V0h60v" +
      (curveY - anchorDistance) +
      "c0," +
      curviness +
      "," +
      curveX +
      "," +
      curviness +
      "," +
      curveX +
      "," +
      anchorDistance +
      "S60," +
      curveY +
      ",60," +
      (curveY + anchorDistance * 2) +
      "V" +
      height +
      "z";

    blobPath.attr("d", newCurve2);

    blob.width(curveX + 50);

    hamburger.css("transform", "translate(" + curveX + "px, " + curveY + "px)");
    blob.css("transform", "translate(" + curveX + "px, " + curveY + 60 + "px)");

    // $("h2").css("transform", "translateY(" + curveY + "px)");
    window.requestAnimationFrame(svgCurve);
  }

  window.requestAnimationFrame(svgCurve);


// Menu____________________________________________________________
// Menu____________________________________________________________


// Compétences____________________________________________________________
// Compétences____________________________________________________________

var lang = {
  "html": "80%",
  "unity": "80%",
  "javascript": "70%",
  "php": "75%",
  "java": "50%",
  "adobe": "80%",
  "audiovisuel": "75%",
  "blender": "60%"
};

var multiply = 7;

$.each( lang, function( language, pourcent) {

  var delay = 500;
  
  setTimeout(function() {
    $('#'+language+'-pourcent').html(pourcent);
  },delay*multiply);
  
  multiply++;

});

// Compétences____________________________________________________________
// Compétences____________________________________________________________





// Realisations____________________________________________________________
// Realisations____________________________________________________________

$('.button').click(function(){
  var value = $(this).attr("data-filter");
  if (value == "all") {
    $(".filter").show("1000");
  }
  else{
    $(".filter").not("."+value).hide("1000");
    $(".filter").filter("."+value).show("1000");
  }
  //ajouter une classe active
  $("ul .button").click(function(){
    $(this).addClass('active').siblings().removeClass('active'); 
  })

})


$(".box").mouseover(function(){ 
 $(this).css({'transform':'scale(1.05)'}); 
});

$(".box").mouseout(function(){
 $(this).css({'transform':'scale(1)'}); 
});


/*Cacher le résultat*/
$('.resultat').hide();


/*UNITY*/
$("#storyspot").click(function(){ 
   $('.resultat').fadeIn();
  var elmnt = document.getElementById("resultat");
  elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  $('#resultat_titre').html("Application Mobile");
  $('#resultat_s_titre').html("StorySpot");
  $('#resultat_target').attr('href','http://storyspot.iut-velizy.uvsq.fr/StorySpot/');
  $('#resultat_image').attr('src','images/visuel/unity.jpg').attr('alt',"Site web réalisait lors de la création de l'application StorySpot pour aider les utlisateurs à comprendre le principe de l'application et les personnes qu'ils l'ont fait.");
  $('#resultat_description').html("C\'est un jeu destiné à un Musée, le principe du jeu est simple, il suffit juste de scanner les fleurs de lys dans un ordres données.<br> L\'ordre est important car elle raconte une des histoires de la France.<br>Et l'application sera disponible au Musée de Meudin.");
  $('#resultat_description_partie2').html("Pour plus de détails, cliquer sur le logo d'Unity.");
});
/*UNITY*/


/**SITES WEB*/
$("#portfolio_web").click(function(){ 
  $('.resultat').fadeIn();
  var elmnt = document.getElementById("resultat");
  elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  $('#resultat_titre').html("Site Web");
  $('#resultat_s_titre').html("Portfolio");
  // Pas encore mis
  $('#resultat_target').attr('href','http://res.iut-velizy.uvsq.fr/~cwang/Portfolio/');
  $('#resultat_image').attr('src','images/visuel/web.jpg').attr('alt','Logo du site web');
  $('#resultat_description').html("Le site web que vous voyez actuellement correspond au site web portfolio.");
  $('#resultat_description_partie2').html("Pour accéder au projet, cliquer sur l'image.");
});

$("#site_storyspot").click(function(){ 
   $('.resultat').fadeIn();
  var elmnt = document.getElementById("resultat");
  elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  $('#resultat_titre').html("Site Web");
  $('#resultat_s_titre').html("StorySpot");
  $('#resultat_target').attr('href','http://storyspot.iut-velizy.uvsq.fr/StorySpot/');
  $('#resultat_image').attr('src','images/visuel/web.jpg').attr('alt',"Site web StorySpot.");
  $('#resultat_description').html("Site web réalisait lors de la création de l'application StorySpot pour aider les utlisateurs à comprendre le principe de l'application et les personnes qu'ils l'ont fait.");
  $('#resultat_description_partie2').html("Pour accéder au projet, cliquer sur l'image.");
});
/**SITES WEB*/


/*GRAPHISMES*/
$("#bateau_3D").click(function(){ 
  $('.resultat').fadeIn();
  var elmnt = document.getElementById("resultat");
  elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  $('#resultat_titre').html("Graphisme");
  $('#resultat_s_titre').html("Bateau de pirate en 3D");
  $('#resultat_target').attr('href','liens/graphismes/modelisations/bateau.stl');
  $('#resultat_image').attr('src','images/visuel/modelisation.jpg').attr('alt',"Bateau en 3 dimensions");
  $('#resultat_description').html("Le bateau a été modélisé sur le logiciel Blender. Il a été fait pour un projet de conception de jeu de société.");
  $('#resultat_description_partie2').html("Pour accéder au projet, cliquer sur l'image.");
});

$("#coffre_3D").click(function(){ 
  $('.resultat').fadeIn();
  var elmnt = document.getElementById("resultat");
  elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  $('#resultat_titre').html("Graphisme");
  $('#resultat_s_titre').html("Coffre en 3D");
  $('#resultat_target').attr('href','liens/graphismes/modelisations/coffre.stl');
  $('#resultat_image').attr('src','images/visuel/modelisation.jpg').attr('alt',"Coffre en 3 dimensions");
  $('#resultat_description').html("Le coffre a été modélisé sur le logiciel Blender. Il a été fait pour un projet de conception de jeu de société.");
  $('#resultat_description_partie2').html("Pour accéder au projet, cliquer sur l'image.");
});

$("#gif_anime").click(function(){ 
  $('.resultat').fadeIn();
  var elmnt = document.getElementById("resultat");
  elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  $('#resultat_titre').html("Graphisme");
  $('#resultat_s_titre').html("Gif animé");
  $('#resultat_target').attr('href','liens/graphismes/gif/wang_christophe.gif');
  $('#resultat_image').attr('src','liens/graphismes/gif/wang_christophe.gif').attr('alt',"GIF d'un personnage de BD qui s'appelle WAKFU");
  $('#resultat_description').html("Le GIF est fait sur Photoshop, grâce à l'outil vidéo de Photoshop. L'image est inspiré d'une série et d'une BD appelé WAKFU.<br>Ce dessin a été entièrement dessiné par moi-même. J'ai pris beaucoup d'attention sur les ombrages du personnage.");
  $('#resultat_description_partie2').html("Pour accéder au projet, cliquer sur l'image.");
});

$("#logo_iut_vichy").click(function(){ 
  $('.resultat').fadeIn();
  var elmnt = document.getElementById("resultat");
  elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  $('#resultat_titre').html("Graphisme");
  $('#resultat_s_titre').html("Logo IUT de Vichy");
  $('#resultat_target').attr('href','liens/graphismes/logo/logo.png');
  $('#resultat_image').attr('src','liens/graphismes/logo/logo.png').attr('alt',"Logo contenant un cercle de carré avec un dégradé de couleur, un haut parleur, un micro. Une onde a l'intérieur et le mot Aventure");
  $('#resultat_description').html("Le logo a été fait sur Illustrator + une charte graphique assemblait sur Indesign. Il y a d'autres variantes du logos qui sont visibles sur la charte graphique.<br>L'IUT de Vichy a voulu modifier leur ancien logo, ils ont alors proposés aux étudiants de créer un logo représentant l'IUT mais aussi d'autres établissement.");
  $('#resultat_description_partie2').html("Pour accéder au projet, cliquer sur l'image.<br>Vous pouvez avoir accès aussi à la charte graphique en cliquant juste sur ce button.  <a href='liens/graphismes/logo/charte_graphique.pdf' target='_blank'><button>Charte graphique en pdf</button></a>");
});

$("#blason").click(function(){ 
  $('.resultat').fadeIn();
  var elmnt = document.getElementById("resultat");
  elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  $('#resultat_titre').html("Graphisme");
  $('#resultat_s_titre').html("Blason de personnalité");
  $('#resultat_target').attr('href','liens/graphismes/blason/suite.png');
  $('#resultat_image').attr('src','liens/graphismes/blason/suite.png').attr('alt',"Dessin d'une goutte d'eau ayant des ailes sur son dos, entouré de 4 couleurs différentes autour d'elle et au dessus il y a mon nom en chinois.");
  $('#resultat_description').html("Un dessin réalisait sur Photoshop et avec une tablette graphique sur un excercice où on doit s'illustrer soi-même.");
  $('#resultat_description_partie2').html("Pour accéder au projet, cliquer sur l'image.");
});
/*GRAPHISMES*/


/*AUDIOVISUEL*/
$("#la_mort").click(function(){ 
  $('.resultat').fadeIn();
  var elmnt = document.getElementById("resultat");
  elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  $('#resultat_titre').html("Audiovisuel");
  $('#resultat_s_titre').html("Court métrage en 1er année DUT MMI");
  $('#resultat_target').attr('href','liens/audiovisuel/scenario.pdf');
  $('#resultat_image').attr('src','images/visuel/audiovisuel.jpg').attr('alt','Scénario du court métrage en pdf.');
  $('#resultat_description').html("Court métrage fait en première année. C'est l'histoire d'un personnage représentant la MORT qui effectue sa mission de prendre l'âme d'une personne, mais comme un employé labda qu'on voit tout les jours. C'est un scénario tragique avec une fin comique.");
  $('#resultat_description_partie2').html("Je ne peux pas fournir librement une vidéo, où on peut voir des personnes mais je peux montrer le court métrage me demander par mail. <span onclick='copyToClipboard_email()'>(christophe.wang.pro@gmail.com)</span><br>Par contre en cliquant sur l'image, vous pouvez voir le scénario du court métrage.");
});
/*AUDIOVISUEL*/




// Realisations____________________________________________________________
// Realisations____________________________________________________________




});


