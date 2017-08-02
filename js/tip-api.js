$(function(){	
	$('.alert-api-list').css('height',$(window).height());
   	$(window).scroll(function(){

   		if($(window).scrollTop() >= 130){
   			$('.alert-api-list').css({
   				'top' : $(window).scrollTop() - 130
   			})
   		}else{
   			$('.alert-api-list').css({
   				'top' : 0
   			})
   		}
   	})

   	$(document).delegate('.alert_list a','click',function(){
   		$('.alert_list a').removeClass('alert-api-hover');
   		$(this).addClass('alert-api-hover');
   	})

	SyntaxHighlighter.all();

	$(".tip-btn1").jqueryTip({
		'horizontal'  : 'left', 
		'vertical'    : 'top',
	})
	$(".tip-btn2").jqueryTip({
		'horizontal'  : 'center', 
		'vertical'    : 'top',
	})
	$(".tip-btn3").jqueryTip({
		'horizontal'  : 'left', 
		'vertical'    : 'top',
	})
	$(".tip-btn4").jqueryTip({
		'horizontal'  : 'left',
		'vertical'    : 'center',
	})
	$(".tip-btn5").jqueryTip({
		'horizontal'  : 'right',
		'vertical'    : 'center',
	})
	$(".tip-btn6").jqueryTip({
		'horizontal'  : 'left', 
		'vertical'    : 'bottom',
	})
	$(".tip-btn7").jqueryTip({
		'horizontal'  : 'center', 
		'vertical'    : 'bottom',
	})
	$(".tip-btn8").jqueryTip({
		'horizontal'  : 'right', 
		'vertical'    : 'bottom',
	})
	$("#tip-api-demo1").jqueryTip({
		'horizontal'  : 'center', 
		'vertical'    : 'top',
	})



	// 第二部分
	$(".tip-btn21").jqueryTip({
		'bgColor' : '#f00',
	})
	$(".tip-btn22").jqueryTip({
		'color' : '#f00',
		'vertical' : 'bottom',
	})
	$(".tip-btn23").jqueryTip({
		'attribute' : 'data-title'
	})
	$(".tip-btn24").jqueryTip({
		'target' : 'mouseover',
		'vertical' : 'bottom',
	})
	$(".tip-btn25").jqueryTip({
		'target' : 'click'
	})
	$("#tip-api-demo2").jqueryTip({
		'bgColor'  : '#f00', 
		'color'    : '#0f0',
		'attribute': 'data-title',
		'target'   : 'click',
	})

	// 第三部分
	$(".tip-btn31").jqueryTip({
		'maxWidth' : '100',
	})
	$(".tip-btn32").jqueryTip({
		'addClass' : 'tipName',
		'vertical' : 'bottom',
	})
	$(".tip-btn33").jqueryTip({
		'padding' : 20,
	})
	$(".tip-btn34").jqueryTip({
		'width' : '250',
		'vertical' : 'bottom',
	})
	$(".tip-btn35").jqueryTip({
		'animateTime' : '1500',
	})
	
	$("#tip-api-demo3").jqueryTip({
		'maxWidth' : '300',
		'addClass'   : 'tipClass',
		'padding'   : '15',
		'animateTime':'700',
	})

	// 第四部分
	$(".tip-btn41").jqueryTip({
		'animateType' : 'fade',
		'vertical' : 'bottom',
	})
	$(".tip-btn42").jqueryTip({
		'animateType' : 'bounce',
		'animateTime' : 600
	})
	$(".tip-btn43").jqueryTip({
		'closeType' : 'auto',
		'vertical' : 'bottom',
	})
	$(".tip-btn44").jqueryTip({
		'closeType' : 'mouseout',
	})
	$(".tip-btn45").jqueryTip({
		'closeType' : 'auto',
		'closeTime' : '5000',
		'vertical' : 'bottom',
	})
	$("#tip-api-demo4").jqueryTip({
		'animateType' : 'bounce',
		'closeType'   : 'auto',
		'closeTime'   : '5000'
	})
	
})