var $ = jQuery.noConflict();
$(document).ready(function() {
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
    $(block).find('[data-toggle="popover"]').popover({
      container: 'body',
      boundary: 'window'
    });
  });

  
});
var nbSlides = $(".step.slide").length;
var showPopover = new URL(window.location).searchParams.get("showPopover");

var rootElement = document.getElementById( "impress" );

rootElement.addEventListener( "impress:stepenter", function(event) {



  var currentStep = event.target;
  if($(currentStep).hasClass("term-1")){
      //Terminal 
      var myTerminal1 = new Terminal("term-1");
      $("#term-1").html("");
      $("#term-1").append(myTerminal1.html);
      myTerminal1.input("Quel est votre nom ?", function (userInput) {
        $("#term1-nom").addClass('text-primary');
        $("#term1-nom2").html('<span class="badge badge-primary">=&gt; \''+userInput+'\'</span>');

        myTerminal1.print("Bonjour " + userInput + " !");
      })
  } else if($(currentStep).hasClass("term-2")){
      //Terminal 
      var myTerminal2 = new Terminal("term-2");
      $("#term-2").html("");
      $("#term-2").append(myTerminal2.html);
      myTerminal2.input("Quel est votre nom ?", function (userInput) {
        $("#term2-nom").addClass('text-primary');
        $("#term2-nom2").html('<span class="badge badge-primary">=&gt; \''+userInput+'\'</span>');

        myTerminal2.print("Bonjour " + userInput + " !");
        myTerminal2.input("Rappelez-moi votre nom ?", function (userInput2) {
          $("#term2-nom3").addClass('text-primary');
          $("#term2-nom4").html('<span class="badge badge-primary">=&gt; \''+userInput2+'\'</span>');

          myTerminal2.print("OK ! Bonjour " + userInput2 + " !");
          myTerminal2.print("Bonjour nom !");
        });
      });
  } else if($(currentStep).hasClass("term-3")){
      //Terminal 
      var myTerminal3 = new Terminal("term-3");
      $("#term-3").html("");
      $("#term-3").append(myTerminal3.html);
      myTerminal3.input("Nombre entre 1 et 10", function (userInput) {
        $("#term3-nombre").addClass('text-primary');
        $("#term3-nombre2").html('<span class="badge badge-primary">=&gt; \''+userInput+'\'</span>');

        myTerminal3.print("Carré : " + userInput*userInput + " !");
        
      });
  } else if($(currentStep).hasClass("term-2-2")){
      //Terminal 
      var myTerminal4 = new Terminal("term-2-2");
      $("#term-2-2").html("");
      $("#term-2-2").append(myTerminal4.html);
      $("#term2-2-msg").addClass('text-primary');      
      $("#term2-2-msg0").html('<span class="badge badge-primary">=&gt; \'Bonjour \'</span>');
      myTerminal4.input("Quel est votre prénom ?", function (prenom) {
        $("#term2-2-msg0").html('');
        $("#term2-2-msglbl1").removeClass('text-primary');
        $(".term2-2-nomprenomlbl1").addClass('text-warning');
        $("#term2-2-nomprenom").addClass('text-warning');
        $("#term2-2-nomprenom").html('<span class="badge badge-warning">=&gt; \''+prenom+'\'</span>');
        $(".term2-2-msglbl2").addClass('text-primary');
        $("#term2-2-msg").addClass('text-primary');
        $("#term2-2-msg").html('<span class="badge badge-primary">=&gt; \'Bonjour '+prenom+' \'</span>');

        myTerminal4.input("Quel est votre nom ?", function (nom) {
          $("#term2-2-msg").html('');
          $("#term2-2-nomprenom").html('');
          $(".term2-2-nomprenomlbl1").removeClass('text-warning');
          $("#term2-2-nomprenom").removeClass('text-warning');
          $(".term2-2-msglbl2").removeClass('text-primary');

          $("#term2-2-nomprenom2").addClass('text-warning');
          $("#term2-2-msglbl2").removeClass('text-primary');
          $(".term2-2-nomprenomlbl2").addClass('text-warning');
          $("#term2-2-nomprenom").addClass('text-warning');
          $("#term2-2-nomprenom2").html('<span class="badge badge-warning">=&gt; \''+nom+'\'</span>');
          $(".term2-2-msglbl3").addClass('text-primary');
          $("#term2-2-msg2").addClass('text-primary');
          $("#term2-2-msg2").html('<span class="badge badge-primary">=&gt; \'Bonjour '+prenom+'\ ' + nom + ' !\'</span>');
          myTerminal4.print('Bonjour '+prenom+'\ ' + nom + ' !');
        });
        
      });
  } else if($(currentStep).hasClass("term-4")){
      //Terminal 
      var myTerminal4 = new Terminal("term-4");
      $("#term-4").html("");
      $("#term-4").append(myTerminal4.html);
      myTerminal4.input("On souhaite calculer x ^ y. Entrer x : ", function (x) {
        x = parseInt(x);
        $("#term4-x").addClass('text-primary');
        $("#term4-xlbl").html('<span class="badge badge-primary">=&gt; '+x+'</span>');

        myTerminal4.input("Entrer y : ", async function (y) {
          y = parseInt(y);
          $("#term4-y").addClass('text-warning');
          $("#term4-ylbl").html('<span class="badge badge-warning">=&gt; '+y+'</span>');

          var i = 1;
          var res = 1;
          while(i <= y) {
            res = res * x;
            await term4(myTerminal4, x, i, res);
            i = i+1;
            $(".term4-i").addClass('text-info');
            $("#term4-ilbl").html('<span class="badge badge-info">=&gt; '+i+'</span>');
          }
          myTerminal4.print(x + ' ^ ' + y + ' = ' + res);
        });
      });
  }
  var numeroSlide = $(currentStep).attr("data-nb");
  $("#numSlide").html(numeroSlide);
  var percentageSlide = Math.round(numeroSlide * 100 / nbSlides);
  $("#progress").attr("style", "width: " + percentageSlide + "%;");
  $("#progress").attr("aria-valuenow", percentageSlide);

  if(showPopover === "true") {
    setTimeout(function(){
      $('#' + currentStep.id + ' [data-toggle="popover"]').popover('show', {
        container: 'body',
        boundary: 'window'
      });
  }, 1000);
  } else {
    $('#' + currentStep.id + ' [data-toggle="popover"]').popover({
      container: 'body',
      boundary: 'window'
    });
  }

  
});

rootElement.addEventListener( "impress:stepleave", function(event) {

  var currentStep = event.target;
  $('#' + currentStep.id + ' [data-toggle="popover"]').popover('dispose');
});

$(window).on('hashchange', function(e){
    //Gérer dropdown-toggle
    var origEvent = e.originalEvent;
    oldHash = origEvent.oldURL.substring(origEvent.oldURL.lastIndexOf("#")).replace("/","");
    newHash = origEvent.newURL.substring(origEvent.newURL.lastIndexOf("#")).replace("/","");
    $('#my-navbar li a').removeClass("active");
    $('#my-navbar li a[href="' + newHash.substring(0,newHash.indexOf("-")) + '"]').addClass("active");
    urls = newHash.split("-");
    if(urls.length > 3){
      $('#my-navbar li a[href="' + urls[0] + "-" + urls[1] + '"]').addClass("active");
    } else {
      $('#my-navbar li a[href="' + newHash.substring(0,newHash.lastIndexOf("-")) + '"]').addClass("active");
    }
    $('#my-navbar li a[href="' + newHash + '"]').addClass("active");
    
});

//-------------------

$("#correctGeneric").click(function(event) {
  $(event.target).toggleClass('btn-primary').toggleClass('btn-success');
  $("#correctGeneric > i").toggleClass('fa-times-circle ');
  $("#correctGeneric > i").toggleClass('fa-check-circle');
  $("#genericCompareTo").toggleClass('text-danger').toggleClass('text-success');
  var html = $("#genericExtends").html();
  $("#genericExtends").html(html === "" ? " extends Comparable" : "");
});

$("#toggleClassIntern").click(function(event) {
  $(event.target).toggleClass('btn-primary').toggleClass('btn-success');
  $("#toggleClassIntern > i").toggleClass('fa-times-circle ');
  $("#toggleClassIntern > i").toggleClass('fa-check-circle');
  $("#interneNew").toggleClass('text-danger').toggleClass('text-success')
  var html = $("#internePrivate").html();
  $("#internePrivate").html(html === '<span class="hljs-keyword">private</span>' ? '<span class="hljs-keyword">public</span>' : '<span class="hljs-keyword">private</span>');
});

$("div.step.slide").each(function(index, el) {
  var id = $(el).attr("id");
  var title = $(el).find("h1.display-3").text();
  $(el).attr("data-nb", index + 1);
  var yOffset = 1100;
  var xOffset = 2000;
  var ybase = 1100;
  var xbase = 0; 
  if(id !== 'accueil'){
    if(id.indexOf("-") > 0){
      if(id.lastIndexOf("-") != id.indexOf("-")){
        if(id.split("-").length == 4){
          $(el).attr("data-rel-x", xOffset);
          $(el).attr("data-rel-y", 0);
          $(el).attr("data-rotate-x", 90);
          $(el).attr("data-z", -2000);
        } else {
          $(el).attr("data-rel-x", 0);
          $(el).attr("data-rel-y", 0);
          $(el).attr("data-z", -2000);
          $(el).attr("data-rotate-x", 90);
        }
      } else {
        var baseId = id.substring(0,id.indexOf("-"));
        console.log(baseId);
        $("div#dropdown-"+baseId).append('<a class="dropdown-item" href="#'+id+'">'+title+'</a>');
        $(el).attr("data-rel-x", xOffset);
        $(el).attr("data-rel-y", 0);
        $(el).attr("data-z", 0);
      }
    } else {
      if($('div[id^="'+id+'-"]').length > 0){
        $("ul.nav.nav-pills.mr-auto").append('<li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" id="navbarDropdown'+id+'" href="#'+id+'" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+title+'</a> <div id="dropdown-'+id+'" class="dropdown-menu" aria-labelledby="navbarDropdown'+id+'"></div></li>');  
        $(el).attr("data-x", 0);
        $(el).attr("data-rel-y", yOffset);
        $(el).attr("data-z", 0);
      } else {
        $("ul.nav.nav-pills.mr-auto").append('<li class="nav-item"><a class="nav-link" href="#'+id+'">'+title+'</a></li>');  
        $(el).attr("data-x", 0);
        $(el).attr("data-rel-y", yOffset);
        $(el).attr("data-z", 0);
      }
    }
  }
});

async function term4(term, x, i, res){
   return new Promise( resolve => {
    term.input("", function (input) {
      $(".term4-x").addClass('text-primary');
      $(".term4-res").addClass('text-danger');
      $("#term4-reslbl").html('<span class="badge badge-danger">=&gt; '+res+'</span>');
      term.print(' Calcul... ' + x + ' ^ ' + i + ' = ' + res);
      
      resolve(term);
    });
  });
}

var imp = impress();
imp.init();