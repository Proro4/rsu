$(document).ready(function(){

	//gallery light-box	
	$('.gallery-block img').on('click',function(){
		$('.gallery-lightbox').css('top','180px');
	})
	$('.content i').on('click',function(){
		$('.gallery-lightbox').css('top','-10000px');
	})




	//calendars-day
	var b =-1;
	for(i = 0; i <= $('.day-event').length;i++){
		b = b+1;
		var day = $('.day-event:eq('+b+')').attr('date-day')-1
		var month = $('.day-event:eq('+b+')').attr('date-month')
		var month = $('.day-event:eq('+b+')').attr('date-year')

		var yearC = $('.calentdar-days td').attr('date-month')	
		var monthС = $('.calentdar-days td').attr('date-year')	
		if($('.day-event:eq('+b+')').attr('date-year') == yearC)
			if($('.day-event:eq('+b+')').attr('date-month') == monthС){
				$(".calentdar-days td:eq("+day+")").addClass('event')
			}
		}

	$('.btn-prev,.btn-next').on('click',function(){
		// if($('.day-event').attr('date-month') = month)
		var b =-1;
		for(i = 0; i <= $('.day-event').length;i++){
			b = b+1;
			var day = $('.day-event:eq('+b+')').attr('date-day')-1
			var month = $('.day-event:eq('+b+')').attr('date-month')
			var monthС = $('.calentdar-days td').attr('date-month')	
			if($('.day-event:eq('+b+')').attr('date-year') == yearC)
				if($('.day-event:eq('+b+')').attr('date-month') == monthС){
					$(".calentdar-days td:eq("+day+")").addClass('event')
				}
			}	
		})
	
	//stars
	$('.1').hover(
         function(){ $(this).addClass('ratings');},
         function(){ $(this).removeClass('ratings');
    })
         $('.2').hover( 
         function(){ $(this).parent().find('.1').addClass('ratings'); $(this).parent().find('.2').addClass('ratings');
    },
         function(){ $(this).parent().find('.1').removeClass('ratings'); $(this).parent().find('.2').removeClass('ratings');    
    })
         $('.3').hover(
         function(){ $(this).parent().find('.1').addClass('ratings'); $(this).parent().find('.2').addClass('ratings');
                     $(this).parent().find('.3').addClass('ratings');    
    },
         function(){ $(this).parent().find('.1').removeClass('ratings'); $(this).parent().find('.2').removeClass('ratings');
                     $(this).parent().find('.3').removeClass('ratings');
    })
         $('.4').hover(
         function(){ $(this).parent().find('.1').addClass('ratings'); $(this).parent().find('.2').addClass('ratings');
                     $(this).parent().find('.3').addClass('ratings'); $(this).parent().find('.4').addClass('ratings');    
    },
         function(){ $(this).parent().find('.1').removeClass('ratings'); $(this).parent().find('.2').removeClass('ratings');
                     $(this).parent().find('.3').removeClass('ratings'); $(this).parent().find('.4').removeClass('ratings');
    })
         $('.5').hover(
         function(){ $(this).parent().find('.1').addClass('ratings'); $(this).parent().find('.2').addClass('ratings');
                     $(this).parent().find('.3').addClass('ratings'); $(this).parent().find('.4').addClass('ratings'); 
                     $(this).parent().find('.5').addClass('ratings'); 
    },
         function(){ $(this).parent().find('.1').removeClass('ratings'); $(this).parent().find('.2').removeClass('ratings');
                     $(this).parent().find('.3').removeClass('ratings'); $(this).parent().find('.4').removeClass('ratings');
                     $(this).parent().find('.5').removeClass('ratings');
    })
         $('.gallery-page .1').click(function(){
             
             alert('1'); 
         });
           $('.gallery-page .2').click(function(){            
             alert('2'); 
         })
            $('.gallery-page .3').click(function(){
             alert('3'); 
         }) 
            $('.gallery-page .4').click(function(){
             alert('4'); 
         })
            $('.gallery-page .5').click(function(){
             alert('5'); 
         })
	

	// img news 
	$(".news-content .content-photo").each(function(){
		var contFoto = $(".news-content").find('.content-photo')

	if($(".news-content").find('.content-photo').hasClass('content-photo') == true){
		$(this).find('.a-news').css('margin',' 28px 0 18px 285px')
	}
})
	//pop-Up calendar
	$('.pop-up-time-title').on('click',function(){
		if($(this).parent().height() == 46){
			$(this).parent().animate({'height':'100px'},300);
		}
		else{
			$(this).parent().animate({'height':'46px'},300);	
		}
	})
	// $('.calendar-month select').on('click',function(){
	// 	console.log($(this).val());
	// })

	//hover gallery
	$('.gallery-block').mouseenter(function(){
			$(this).find('p').animate({'bottom':'20px'},300);
	})
	$('.gallery-block').mouseleave(function(){
			$(this).find('p').animate({'bottom':'-100px'},300);
	})



	//first-block calendar text
	// $('.day-event .day-text:eq(0)').css({'margin-top':"25px"})
	
	// $('.review-but').on('click',function(){
	// 	var lightboxId = $(this).parent().attr('doc');
	// 	$('#'+lightboxId+'').css('display','block');
	// 	$('.lightbox').css('display','block');

	// })
	// $('.lightbox').on('click',function(){
	// 	$(this).css('display','none');
	// 	$(this).find('span').css('display','none');
	// })
var html_to_print=$('div#to_print').html()
var iframe=$('<iframe id="print_frame">'); // создаем iframe в переменную
$('body').append(iframe); //добавляем эту переменную с iframe в наш body (в самый конец)

	$('.review-but').on('click',function(){
		var textLightbox = $(this).parent().find('b').html()
		$('.lightbox p').html(textLightbox);
		$('.lightbox').css('display','block');
	})
	$('.lightbox span i').on('click',function(){

		$('.lightbox p').html('');
		$('.lightbox').css('display','none');
	})

	$('.arrow-to-top').click(function() {
		$('body,html').animate({scrollTop:0},800);
		 
		});

$('.arrow-to-top').fadeOut();
$('.lang .lang-but').on('click',function(){
	if($('.lang').height() == 17){ 
		$('.lang').animate({'height':'50px'},200)
		$('.lang-but').css('display','none');
		}
	})
		
	$('.lang').on('click',function(){
	if($('.lang').height() == 50){ 
		$('.lang').animate({'height':'17px'},200)
		$('.lang-but').css('display','block');
		}
	})
	


	var lengthLi = $('.menu-pop-up li').length
	var heightLi = $('.menu-pop-up li:eq(2)').height();
	var heightMenu = (lengthLi) * heightLi;
	$('.menu-pop-up').click(function(){
		if($(this).height() == 48){
		$(this).animate({height:heightMenu},300)
	}else{

		$(this).animate({height:'48px'},300)
	}
	})
	//SLIDER
	var sliderlength = $('.item').length;
	var allWidth = 0;
	var id = 0;
	$('.slide-text-block').css('width',100/sliderlength+'%')
	$('.slide-all-text').css('width',sliderlength+'00%');

	$('.item').css('width',100/sliderlength+'%')
	$('.slider-container').css('width',sliderlength+'00%');

	
	$('.pag-block:eq(0)').addClass('active');

	 slideInterval = setInterval(function (){
		  if(id != sliderlength-1){
		id +=1;
		$('.slider-container').animate({left:'-'+id+'00%'},400);
		$('.slide-all-text').animate({left:'-'+id+'00%'},400);

		$('.pag-block').removeClass('active');
		$('.pag-block:eq('+id+')').addClass('active');
		
		}
		else{
			id = 0;
			$('.slider-container').animate({left:'-'+id+'00%'},400);
			$('.slide-all-text').animate({left:'-'+id+'00%'},400);

			$('.pag-block').removeClass('active');
			$('.pag-block:eq('+id+')').addClass('active');
			}
		},5000)
		 $('.slider').mouseover(function(){
			clearInterval(slideInterval);
		})
		 $('.slider').mouseleave(function(){
		slideInterval = setInterval(function (){
		  if(id != sliderlength-1){
		id +=1;
		$('.slider-container').animate({left:'-'+id+'00%'},400);
		$('.slide-all-text').animate({left:'-'+id+'00%'},400);

		$('.pag-block').removeClass('active');
		$('.pag-block:eq('+id+')').addClass('active');
		
		}
		else{
			id = 0;
			$('.slider-container').animate({left:'-'+id+'00%'},400);
			$('.slide-all-text').animate({left:'-'+id+'00%'},400);

			$('.pag-block').removeClass('active');
			$('.pag-block:eq('+id+')').addClass('active');
			}
		},5000)
		})
	$('.pag-block').click(function(){
		var numbSlide = $(this).index()
		$('.pag-block').removeClass('active');
		$('.pag-block:eq('+numbSlide+')').addClass('active');
		$('.slider-container').animate({left:'-'+numbSlide+'00%'},400);
		$('.slide-all-text').animate({left:'-'+numbSlide+'00%'},400);
		allWidth = numbSlide+'00';
		id = numbSlide;
	})

	$('.arrow-prev').click(function(){
	 if(id != 0){
			id -=1;
			$('.slider-container').animate({left:'-'+id+'00%'},400);
			$('.slide-all-text').animate({left:'-'+id+'00%'},400);

			$('.pag-block').removeClass('active');
			$('.pag-block:eq('+id+')').addClass('active');
		}
	else{
			id = sliderlength-1;
			$('.slider-container').animate({left:'-'+id+'00%'},400);
			$('.slide-all-text').animate({left:'-'+id+'00%'},400);

			$('.pag-block').removeClass('active');
			$('.pag-block:eq('+id+')').addClass('active');
		}
	})
	$('.arrow-next').click(function(){
	 if(id != sliderlength-1){
		id +=1;
		$('.slider-container').animate({left:'-'+id+'00%'},400);
		$('.slide-all-text').animate({left:'-'+id+'00%'},400);

		$('.pag-block').removeClass('active');
		$('.pag-block:eq('+id+')').addClass('active');
		
		}
		else{
			id = 0;
			$('.slider-container').animate({left:'-'+id+'00%'},400);
			$('.slide-all-text').animate({left:'-'+id+'00%'},400);

			$('.pag-block').removeClass('active');
			$('.pag-block:eq('+id+')').addClass('active');
		}
		
	
	})

	//parallax slider
	$(window).scroll(function(){
			if($(this).scrollTop() >= 150) {
			 
			$('.arrow-to-top').fadeIn();
			
		} else {
		 
		$('.arrow-to-top').fadeOut();
		 
		}
		 


		var scroll = $(window).scrollTop()
		$('.item img').css('top',scroll); 
	})
	//SLIDER END




		var slideImgHeight = $('.wrapper .slider .slider-container .item').height()
		$('.slider').css('height',slideImgHeight)//height empty-block
  		  var slideHeight = $('.slider ').height();
  		
		$('.empty-block').css('height',slideHeight+10);
		if($(window).width() <= 1640 ){
			$('.slider').css('height','950px')
			$('.empty-block').css('height','950px');
		} 
		 if($(window).width() <= 1440 ){
			$('.slider').css('height','750px')
			$('.empty-block').css('height','750px');
		} 
  		 if($(window).width() <= 1280 ){
			$('.slider').css('height','700px')
			$('.empty-block').css('height','700px');

		}  
		if($(window).width() <= 1150 ){
			$('.slider').css('height','680px')
			$('.empty-block').css('height','680px');

		} 
		if($(window).width() <= 1024 ){
			$('.slider').css('height','620px')
			$('.empty-block').css('height','620px');

		} 
	if($(window).width() <= 925 ){
		$('.slider').css('height','600px')
		$('.empty-block').css('height','600px');

	}
	if($(window).width() <= 800){
			$('.slider div').removeClass('containers');
		$('.empty-block').css('height','515px');
	}
	// if($(window).width() <= 703){
	// 	$('.slider').css('height','527px');
	// }if($(window).width() <= 460){
	// 	$('.slider').css('height','526px');
	// }if($(window).width() <= 393){
	// 	$('.slider').css('height','514px');
	// }//CARUSEL

	var caruselLength = $('.slider-2 .carusel-block').length;
	$('.slider-2 .all-carusel').css('width',caruselLength+'00%');
	$('.slider-2 .carusel-block').css('width',(100/caruselLength)+'%');
	var carId = 0;
	$('.slider-2 .carusel-arrow-next').click(function(){
		if(carId != caruselLength-1)
		carId += 1;
		$('.slider-2 .all-carusel').animate({left:-carId+'00%'});
	})
	$('.slider-2 .carusel-arrow-prev').click(function(){
		if(carId != 0)
		carId -= 1;
		$('.slider-2 .all-carusel').animate({left:-carId+'00%'});
	})

	var caruselLength = $('.slider-3 .carusel-block').length;
	$('.slider-3 .all-carusel').css('width',caruselLength+'00%');
	$('.slider-3 .carusel-block').css('width',(100/caruselLength)+'%');
	var carId = 0;
	$('.slider-3 .carusel-arrow-next').click(function(){
		if(carId != caruselLength-1)
		carId += 1;
		$('.slider-3 .all-carusel').animate({left:-carId+'00%'});
	})
	$('.slider-3 .carusel-arrow-prev').click(function(){
		if(carId != 0)
		carId -= 1;
		$('.slider-3 .all-carusel').animate({left:-carId+'00%'});
	})
})
$(window).load(function(){
	//paralaks slider
	$(window).scroll(function(){
		var scroll = $(window).scrollTop()
		$('.item img').css('top',scroll);
	})
})
$(window).resize(function(){
	var slideImgHeight = $('.wrapper .slider .slider-container .item').height()
		$('.slider').css('height',slideImgHeight)//height empty-block
  		  var slideHeight = $('.slider ').height();
  		
		$('.empty-block').css('height',slideHeight+10);
		if($(window).width() <= 1640 ){
			$('.slider').css('height','950px')
			$('.empty-block').css('height','950px');
		} 
		if($(window).width() <= 1440 ){
			$('.slider').css('height','750px')
			$('.empty-block').css('height','750px');
		} 
  	 if($(window).width() <= 1280 ){
			$('.slider').css('height','700px')
			$('.empty-block').css('height','700px');
		} 
		if($(window).width() <= 1150 ){
			$('.slider').css('height','680px')
			$('.empty-block').css('height','680px');

		} 
		if($(window).width() <= 1024 ){
			$('.slider').css('height','620px')
			$('.empty-block').css('height','620px');

		} 
	if($(window).width() <= 925 ){
		$('.slider').css('height','600px')
		$('.empty-block').css('height','600px');

	}
	if($(window).width() <= 800){
			$('.slider div').removeClass('containers');
		$('.empty-block').css('height','515px');
	}
	// if($(window).width() <= 703){
	// 	$('.slider').css('height','527px');
	// }if($(window).width() <= 460){
	// 	$('.slider').css('height','526px');
	// }if($(window).width() <= 393){
	// 	$('.slider').css('height','514px');
	// }
	
})

