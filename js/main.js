$(document).ready(function(){
	

	$('.arrow-to-top').click(function() {
		$('body,html').animate({scrollTop:0},800);
		 
		});

$('.arrow-to-top').fadeOut();
$('.lang').on('click',function(){
		$('.lang').animate({'height':'50px'},200)


	})


	var lengthLi = $('.menu-pop-up li').length
	var heightLi = $('.menu-pop-up li:eq(2)').height();
	var heightMenu = (lengthLi+3) * heightLi;
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

