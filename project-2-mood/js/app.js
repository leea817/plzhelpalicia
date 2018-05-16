$(document).ready(function(){

   $('.box').mouseover(function(){
      $(this).addClass('hover');
   });
   $('.box').mouseout(function(){
      $(this).removeClass('hover');
   });

   var allNavItems = $('.nav-item');

   var randomIndex = getRandomInt(allNavItems.length-1);
   //console.log(randomIndex); see if variables have
   //any data in them

   allNavItems[randomIndex].click();
});

function getRandomInt(max) {
 return Math.floor(Math.random() * Math.floor(max));
 // before you werent returning anything
 //make sure you return something on every function.
}


$( "#nav-toggle" ).click(function() {
  $( "#mobile-nav" ).toggleClass( "show-nav" );
  $( this ).toggleClass( "close-menu" );
});


$('.nav-item').click(function() {
	var button_name = $(this).data('button');
	$('.content').attr('class', 'content');
	// you do this to go in any order and get the color the buttons are assigned. it means, find content div, find class, you're trying to remove unnecessary classes after you click on one. column content changes to 
	$('.content').addClass(button_name);

	$('.nav-item').removeClass('active'); //so that it doesnt stay black once you click it aka active, this is looking at all items on the page. in fact, it is making an array. 
	$(this).addClass('active');

	//$('.youtube').click(function() {
	//	$('.audio').pause();
	//});
  	

  // $('.hide').removeClass('show');
  // $('#' + button_name).addClass('show');
  // $(window).scrollTop(0);

	if (button_name== 'lone') {
		$('.lonely-abyss').show();
		$('.im-tripping').hide();
		$('.serenity').hide();
		$('.hahaha').hide();
		$('.silent-night').hide();
		$('.comfortable').hide();
		$('.dark').hide();
		$('.lively').hide();
		$('.photography').hide();
		$('.video').hide();
		$('.writingtext').hide();
		$('.illustration').hide();
		$('.graphics').hide();
		$('.viewallcontent').hide();
		$('.audio1 audio')[0].play();
		$('.audio2 audio')[0].pause(); 
		$('.audio3 audio')[0].pause(); 
		$('.audio4 audio')[0].pause(); 
		$('.audio5 audio')[0].pause(); 
		$('.audio6 audio')[0].pause(); 
		$('.audio7 audio')[0].pause(); 
		$('.audio8 audio')[0].pause(); 
		$('.audio9 audio')[0].pause(); 
		$('.audio10 audio')[0].pause(); 
		$('.audio11 audio')[0].pause(); 
		$('.audio12 audio')[0].pause(); 
		$('.audio13 audio')[0].pause(); 
		$(window).scrollTop(0);
	}
	if (button_name== 'trip') {
		$('.im-tripping').show();
		$('.lonely-abyss').hide();
		$('.serenity').hide();
		$('.hahaha').hide();
		$('.silent-night').hide();
		$('.comfortable').hide();
		$('.dark').hide();
		$('.lively').hide();
		$('.photography').hide();
		$('.video').hide();
		$('.writingtext').hide();
		$('.illustration').hide();
		$('.graphics').hide();
		$('.viewallcontent').hide();
		$('.audio2 audio')[0].play();
		$('.audio1 audio')[0].pause(); 
		$('.audio3 audio')[0].pause(); 
		$('.audio4 audio')[0].pause(); 
		$('.audio5 audio')[0].pause(); 
		$('.audio6 audio')[0].pause(); 
		$('.audio7 audio')[0].pause(); 
		$('.audio8 audio')[0].pause(); 
		$('.audio9 audio')[0].pause(); 
		$('.audio10 audio')[0].pause(); 
		$('.audio11 audio')[0].pause(); 
		$('.audio12 audio')[0].pause(); 
		$('.audio13 audio')[0].pause(); 
		$(window).scrollTop(0);
	}
	if (button_name== 'serene') {
		$('.serenity').show();
		$('.lonely-abyss').hide();
		$('.im-tripping').hide();
		$('.hahaha').hide();
		$('.silent-night').hide();
		$('.comfortable').hide();
		$('.dark').hide();
		$('.lively').hide();
		$('.photography').hide();
		$('.video').hide();
		$('.writingtext').hide();
		$('.illustration').hide();
		$('.graphics').hide();
		$('.viewallcontent').hide();
		$('.audio3 audio')[0].play();
		$('.audio1 audio')[0].pause(); 
		$('.audio2 audio')[0].pause(); 
		$('.audio4 audio')[0].pause(); 
		$('.audio5 audio')[0].pause(); 
		$('.audio6 audio')[0].pause(); 
		$('.audio7 audio')[0].pause(); 
		$('.audio8 audio')[0].pause(); 
		$('.audio9 audio')[0].pause(); 
		$('.audio10 audio')[0].pause(); 
		$('.audio11 audio')[0].pause(); 
		$('.audio12 audio')[0].pause(); 
		$('.audio13 audio')[0].pause(); 
		$(window).scrollTop(0);
	}
	if (button_name== 'haha') {
		$('.hahaha').show();
		$('.lonely-abyss').hide();
		$('.im-tripping').hide();
		$('.serenity').hide();
		$('.silent-night').hide();
		$('.comfortable').hide();
		$('.dark').hide();
		$('.lively').hide();
		$('.photography').hide();
		$('.video').hide();
		$('.writingtext').hide();
		$('.illustration').hide();
		$('.graphics').hide();
		$('.viewallcontent').hide();
		$('.audio4 audio')[0].play();
		$('.audio1 audio')[0].pause(); 
		$('.audio2 audio')[0].pause(); 
		$('.audio3 audio')[0].pause(); 
		$('.audio5 audio')[0].pause(); 
		$('.audio6 audio')[0].pause(); 
		$('.audio7 audio')[0].pause(); 
		$('.audio8 audio')[0].pause(); 
		$('.audio9 audio')[0].pause(); 
		$('.audio10 audio')[0].pause(); 
		$('.audio11 audio')[0].pause(); 
		$('.audio12 audio')[0].pause(); 
		$('.audio13 audio')[0].pause(); 
		$(window).scrollTop(0);
	}
	if (button_name== 'night') {
		$('.silent-night').show();
		$('.lonely-abyss').hide();
		$('.im-tripping').hide();
		$('.serenity').hide();
		$('.hahaha').hide();
		$('.comfortable').hide();
		$('.dark').hide();
		$('.lively').hide();
		$('.photography').hide();
		$('.video').hide();
		$('.writingtext').hide();
		$('.illustration').hide();
		$('.graphics').hide();
		$('.viewallcontent').hide();
		$('.audio5 audio')[0].play();
		$('.audio1 audio')[0].pause(); 
		$('.audio2 audio')[0].pause(); 
		$('.audio3 audio')[0].pause(); 
		$('.audio4 audio')[0].pause(); 
		$('.audio6 audio')[0].pause(); 
		$('.audio7 audio')[0].pause(); 
		$('.audio8 audio')[0].pause(); 
		$('.audio9 audio')[0].pause(); 
		$('.audio10 audio')[0].pause(); 
		$('.audio11 audio')[0].pause(); 
		$('.audio12 audio')[0].pause(); 
		$('.audio13 audio')[0].pause(); 
		$(window).scrollTop(0);
	}
	if (button_name== 'comfort') {
		$('.comfortable').show();
		$('.lonely-abyss').hide();
		$('.im-tripping').hide();
		$('.serenity').hide();
		$('.hahaha').hide();
		$('.silent-night').hide();
		$('.dark').hide();
		$('.lively').hide();
		$('.photography').hide();
		$('.video').hide();
		$('.writingtext').hide();
		$('.illustration').hide();
		$('.graphics').hide();
		$('.viewallcontent').hide();
		$('.audio6 audio')[0].play();
		$('.audio1 audio')[0].pause(); 
		$('.audio2 audio')[0].pause(); 
		$('.audio3 audio')[0].pause(); 
		$('.audio4 audio')[0].pause(); 
		$('.audio5 audio')[0].pause(); 
		$('.audio7 audio')[0].pause(); 
		$('.audio8 audio')[0].pause(); 
		$('.audio9 audio')[0].pause(); 
		$('.audio10 audio')[0].pause(); 
		$('.audio11 audio')[0].pause(); 
		$('.audio12 audio')[0].pause(); 
		$('.audio13 audio')[0].pause(); 
		$(window).scrollTop(0);
	}
	if (button_name== 'dark') {
		$('.dark').show();
		$('.lonely-abyss').hide();
		$('.im-tripping').hide();
		$('.serenity').hide();
		$('.hahaha').hide();
		$('.silent-night').hide();
		$('.comfortable').hide();
		$('.lively').hide();
		$('.photography').hide();
		$('.video').hide();
		$('.writingtext').hide();
		$('.illustration').hide();
		$('.graphics').hide();
		$('.viewallcontent').hide();
		$('.audio7 audio')[0].play();
		$('.audio1 audio')[0].pause(); 
		$('.audio2 audio')[0].pause(); 
		$('.audio3 audio')[0].pause(); 
		$('.audio4 audio')[0].pause(); 
		$('.audio5 audio')[0].pause(); 
		$('.audio6 audio')[0].pause(); 
		$('.audio8 audio')[0].pause(); 
		$('.audio9 audio')[0].pause(); 
		$('.audio10 audio')[0].pause(); 
		$('.audio11 audio')[0].pause(); 
		$('.audio12 audio')[0].pause(); 
		$('.audio13 audio')[0].pause(); 
		$(window).scrollTop(0);
	}
	if (button_name== 'live') {
		$('.lively').show();
		$('.lonely-abyss').hide();
		$('.im-tripping').hide();
		$('.serenity').hide();
		$('.hahaha').hide();
		$('.silent-night').hide();
		$('.comfortable').hide();
		$('.dark').hide();
		$('.photography').hide();
		$('.video').hide();
		$('.writingtext').hide();
		$('.illustration').hide();
		$('.graphics').hide();
		$('.viewallcontent').hide();
		$('.audio8 audio')[0].play();
		$('.audio1 audio')[0].pause(); 
		$('.audio2 audio')[0].pause(); 
		$('.audio3 audio')[0].pause(); 
		$('.audio4 audio')[0].pause(); 
		$('.audio5 audio')[0].pause(); 
		$('.audio6 audio')[0].pause(); 
		$('.audio7 audio')[0].pause(); 
		$('.audio9 audio')[0].pause(); 
		$('.audio10 audio')[0].pause(); 
		$('.audio11 audio')[0].pause(); 
		$('.audio12 audio')[0].pause(); 
		$('.audio13 audio')[0].pause(); 
		$(window).scrollTop(0);
	}
	if (button_name== 'photo') {
		$('.photography').show();
		$('.lonely-abyss').hide();
		$('.im-tripping').hide();
		$('.serenity').hide();
		$('.hahaha').hide();
		$('.silent-night').hide();
		$('.comfortable').hide();
		$('.dark').hide();
		$('.lively').hide();
		$('.video').hide();
		$('.writingtext').hide();
		$('.illustration').hide();
		$('.graphics').hide();
		$('.viewallcontent').hide();
		$('.audio10 audio')[0].play();
		$('.audio1 audio')[0].pause(); 
		$('.audio2 audio')[0].pause(); 
		$('.audio3 audio')[0].pause(); 
		$('.audio4 audio')[0].pause(); 
		$('.audio5 audio')[0].pause(); 
		$('.audio6 audio')[0].pause(); 
		$('.audio7 audio')[0].pause(); 
		$('.audio8 audio')[0].pause(); 
		$('.audio9 audio')[0].pause(); 
		$('.audio11 audio')[0].pause(); 
		$('.audio12 audio')[0].pause(); 
		$('.audio13 audio')[0].pause(); 
		$(window).scrollTop(0);
	}
	if (button_name== 'vid') {
		$('.video').show();
		$('.lonely-abyss').hide();
		$('.im-tripping').hide();
		$('.serenity').hide();
		$('.hahaha').hide();
		$('.silent-night').hide();
		$('.comfortable').hide();
		$('.dark').hide();
		$('.lively').hide();
		$('.photography').hide();
		$('.writingtext').hide();
		$('.illustration').hide();
		$('.graphics').hide();
		$('.viewallcontent').hide();
		$('.audio10 audio')[0].pause();
		$('.audio1 audio')[0].pause(); 
		$('.audio2 audio')[0].pause(); 
		$('.audio3 audio')[0].pause(); 
		$('.audio4 audio')[0].pause(); 
		$('.audio5 audio')[0].pause(); 
		$('.audio6 audio')[0].pause(); 
		$('.audio7 audio')[0].pause(); 
		$('.audio8 audio')[0].pause(); 
		$('.audio9 audio')[0].pause(); 
		$('.audio11 audio')[0].pause(); 
		$('.audio12 audio')[0].pause(); 
		$('.audio13 audio')[0].pause(); 
		$(window).scrollTop(0);
	}
	if (button_name== 'writing') {
		$('.writingtext').show();
		$('.lonely-abyss').hide();
		$('.im-tripping').hide();
		$('.serenity').hide();
		$('.hahaha').hide();
		$('.silent-night').hide();
		$('.comfortable').hide();
		$('.dark').hide();
		$('.lively').hide();
		$('.photography').hide();
		$('.video').hide();
		$('.illustration').hide();
		$('.graphics').hide();
		$('.viewallcontent').hide();
		$('.audio11 audio')[0].play();
		$('.audio1 audio')[0].pause(); 
		$('.audio2 audio')[0].pause(); 
		$('.audio3 audio')[0].pause(); 
		$('.audio4 audio')[0].pause(); 
		$('.audio5 audio')[0].pause(); 
		$('.audio6 audio')[0].pause(); 
		$('.audio7 audio')[0].pause(); 
		$('.audio8 audio')[0].pause(); 
		$('.audio9 audio')[0].pause(); 
		$('.audio10 audio')[0].pause(); 
		$('.audio12 audio')[0].pause(); 
		$('.audio13 audio')[0].pause(); 
		$(window).scrollTop(0);
	}
	if (button_name== 'illust') {
		$('.illustration').show();
		$('.lonely-abyss').hide();
		$('.im-tripping').hide();
		$('.serenity').hide();
		$('.hahaha').hide();
		$('.silent-night').hide();
		$('.comfortable').hide();
		$('.dark').hide();
		$('.lively').hide();
		$('.photography').hide();
		$('.video').hide();
		$('.writingtext').hide();
		$('.graphics').hide();
		$('.viewallcontent').hide();
		$('.audio13 audio')[0].play();
		$('.audio1 audio')[0].pause(); 
		$('.audio2 audio')[0].pause(); 
		$('.audio3 audio')[0].pause(); 
		$('.audio4 audio')[0].pause(); 
		$('.audio5 audio')[0].pause(); 
		$('.audio6 audio')[0].pause(); 
		$('.audio7 audio')[0].pause(); 
		$('.audio8 audio')[0].pause(); 
		$('.audio9 audio')[0].pause(); 
		$('.audio10 audio')[0].pause(); 
		$('.audio11 audio')[0].pause(); 
		$('.audio12 audio')[0].pause(); 
		$(window).scrollTop(0);
	}
	if (button_name== 'graph') {
		$('.graphics').show();
		$('.lonely-abyss').hide();
		$('.im-tripping').hide();
		$('.serenity').hide();
		$('.hahaha').hide();
		$('.silent-night').hide();
		$('.comfortable').hide();
		$('.dark').hide();
		$('.lively').hide();
		$('.photography').hide();
		$('.video').hide();
		$('.writingtext').hide();
		$('.illustration').hide();
		$('.audio12 audio')[0].play();
		$('.audio1 audio')[0].pause(); 
		$('.audio2 audio')[0].pause(); 
		$('.audio3 audio')[0].pause(); 
		$('.audio4 audio')[0].pause(); 
		$('.audio5 audio')[0].pause(); 
		$('.audio6 audio')[0].pause(); 
		$('.audio7 audio')[0].pause(); 
		$('.audio8 audio')[0].pause(); 
		$('.audio9 audio')[0].pause(); 
		$('.audio10 audio')[0].pause(); 
		$('.audio11 audio')[0].pause(); 
		$('.audio13 audio')[0].pause();
		$(window).scrollTop(0); 
	}
	if (button_name== 'all') {
		$('.viewallcontent').show();
		$('.lonely-abyss').hide();
		$('.im-tripping').hide();
		$('.serenity').hide();
		$('.hahaha').hide();
		$('.silent-night').hide();
		$('.comfortable').hide();
		$('.dark').hide();
		$('.lively').hide();
		$('.photography').hide();
		$('.video').hide();
		$('.writingtext').hide();
		$('.illustration').hide();
		$('.graphics').hide();
		$('.audio9 audio')[0].play();
		$('.audio1 audio')[0].pause(); 
		$('.audio2 audio')[0].pause(); 
		$('.audio3 audio')[0].pause(); 
		$('.audio4 audio')[0].pause(); 
		$('.audio5 audio')[0].pause(); 
		$('.audio6 audio')[0].pause(); 
		$('.audio7 audio')[0].pause(); 
		$('.audio8 audio')[0].pause(); 
		$('.audio13 audio')[0].pause(); 
		$('.audio10 audio')[0].pause(); 
		$('.audio11 audio')[0].pause(); 
		$('.audio12 audio')[0].pause();
		$(window).scrollTop(0); 
	}
      
});
