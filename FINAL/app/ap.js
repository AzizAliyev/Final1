AOS.init();



$('.all-slide').slick({
    dots: true,
    infinite: true,
    autoplay:2000,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });


  $('.slid').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 11,
    slidesToScroll: 1
    
    
  });
  $('.teams').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
  $('.Special').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
    

  
  $('.photo').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1
  });

  function openBtn(evt,Subject) {
    var i,btnlinks,tabText;
    tabText = document.getElementsByClassName("tabText");
    for(i=0; i<tabText.length; i++) {
        tabText[i].style.display = "none";
    }
    document.getElementById(Subject).style.display = "block";
}



$('.counter').each(function(){
    var $this=$(this),
    countTo=$this.attr('data-count');

    $({countNum:$this.text()}).animate({
        countNum:countTo
        
    },
    {
        duration:3000,
        easing:'linear',
        step:function(){
            $this.text(Math.floor(this.countNum));
        },
        complete:function(){
            $this.text(this.countNum);
        }
    }
    
    )
});



$(document).ready(function(){
  $(".pl").click(function(){
    $(".birinci").slideDown();
    $(".pl").css("display","none");
    $(".min").css("display","block");
    
  });
})

$(document).ready(function(){
  $(".min").click(function(){
    $(".birinci").slideUp();
    $(".pl").css("display","block");
    $(".min").css("display","none");
    
  });
})

$(document).ready(function(){
  $(".plu").click(function(){
    $(".ikinci").slideDown();
    $(".plu").css("display","none");
    $(".minu").css("display","block");
    
  });
})

$(document).ready(function(){
  $(".minu").click(function(){
    $(".ikinci").slideUp();
    $(".plu").css("display","block");
    $(".minu").css("display","none");
    
  });
})

$(document).ready(function(){
  $(".plus").click(function(){
    $(".ucuncu").slideDown();
    $(".plus").css("display","none");
    $(".minus").css("display","block");
    
  });
})

$(document).ready(function(){
  $(".minus").click(function(){
    $(".ucuncu").slideUp();
    $(".plus").css("display","block");
    $(".minus").css("display","none");
    
  });
})

$(document).ready(function(){
  $(".pluss").click(function(){
    $(".dorduncu").slideDown();
    $(".pluss").css("display","none");
    $(".minuss").css("display","block");
    
  });
})

$(document).ready(function(){
  $(".minuss").click(function(){
    $(".dorduncu").slideUp();
    $(".pluss").css("display","block");
    $(".minuss").css("display","none");
    
  });
})




$('.galarey').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});