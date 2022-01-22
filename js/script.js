function ibg(){
	let ibg = document.querySelectorAll('.ibg');
	for(var i=0;i<ibg.length;i++){
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}

}
ibg();

$(document).ready(function(){
	$('.sliderFirst').slick({
		asNavFor:'.sliderSecond',
		rtl:true,
		variableWidth:true,
		arrows:false,
		touchThreshold:10,
		infinite:true
	});
	$('.sliderSecond').slick({
		asNavFor:'.sliderFirst',
		infinite:true,
		variableWidth:true,
		arrows:false,
		touchThreshold:10
	});

	let faqP = $('.faq-body__p');
	faqP.hide();
	let faqItem = $('.faq-body__item');
	faqItem.each(function(){
		$(this).click(function(){
			if($(this).find($('.faq-body__p')).css('display') == 'none'){
			faqP.hide(500);
			faqItem.each(function(){
				$(this).removeClass('active');
			})
			$(this).find($(".faq-body__p")).show(500);
			$(this).addClass('active');
		}else{
			faqP.hide(500);
			$(this).removeClass('active');
		}
		})
	})
})

