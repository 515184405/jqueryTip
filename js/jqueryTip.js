		var tipNum = 0;
		$.fn.jqueryTip = function(opt){
			opts = {
				'bgColor' : '#000',// 背景颜色
				'color'   : '#fff', // 字体颜色
				'attribute' : 'data-tip', //要显示文字的属性名
				'target'  : 'mouseover',//事件
				'maxWidth': '',//最大的宽度
				'addClass': '', //添加类名
				'padding' : '8' , //弹出框之间的间隙
				'width'   : 'auto', //设置宽度
				'animateTime' : '300', //动画时间
				'animateType' : 'fade',//动画类型
				// 水平和垂直只能一个为center，若两个同时为center，vertical的center将被改为top
				'horizontal'  : 'center',  //水平方向  left center right
				'vertical'    : 'top',  //垂直方向  top center bottom
				'closeType'   : 'mouseout' ,   //关闭类型 auto 自动关闭 或者鼠标移除关闭
				'closeTime'   : '2500',  //关闭时间
			}

			var options = $.extend({},opts,opt);
			
			var M = {

			}

			M.jiaoHeight = 8;
			M.jiaoWidth = 8;

			var $contentDom = $("<div tip-num='"+tipNum+"' class='data-tip-content animated'><div class='tip-content'></div><i class='data-tip-jiao'></i></div>");

			var __self = $(this);

			__self.attr('dom-tip-num',tipNum);

			tipNum++;

			// 计算方法以及设置参数
			function init(_self){

				var $contentTxt = _self.attr(options.attribute);
				$contentDom.children('.tip-content').html($contentTxt);

				$contentDom.css({
					'position' : 'absolute',
				});

				M._selfOffsetLeft = _self.offset().left ;
				M._selfOffsetTop = _self.offset().top ;

				M._selfWidth = parseInt(_self.css('width'));
				M._selfHeight = parseInt(_self.css('height')) ;

				(!!options.addClass) && $contentDom.addClass(options.addClass);
				(!!options.bgColor) && $contentDom.css('background-color',options.bgColor);
				(!!options.color) && $contentDom.css('color',options.color);
				$contentDom.css('padding',options.padding);

				if(!isNaN(parseInt(options.maxWidth))){
					$contentDom.css('width',options.width);
					if((parseInt(options.maxWidth) < parseInt($contentDom.css('width')))){
						$contentDom.css('width',options.maxWidth);
					}
				}else{
					$contentDom.css('width',options.width);
				}

				$contentDom.children("i").css({
					'border-width' :M.jiaoWidth,
					'border-color' :'transparent',
				})

				if(options.vertical == 'top'){
					$contentDom.css({
						'top' : M._selfOffsetTop - parseInt($contentDom.css('height')) - options.padding*2 - M.jiaoHeight,
					})

					$contentDom.children("i").css({
						'border-bottom-width' :'0px',
						'border-top-color' : options.bgColor,
						'bottom' : -M.jiaoWidth,
					})
					
				}
				if(options.vertical == 'bottom'){
					$contentDom.css({
						'top' : M._selfOffsetTop + M._selfHeight + M.jiaoHeight,
					})

					$contentDom.children("i").css({
						'border-top-width' :'0px',
						'border-bottom-color' : options.bgColor,
						'top' : -M.jiaoWidth,
					})
				}

				if(options.horizontal == 'right'){
					$contentDom.css({
						'left' : M._selfOffsetLeft - M.jiaoWidth,
					})

					$contentDom.children("i").css({
						'left' :  M._selfWidth/2,
					})
				}
				if(options.horizontal == 'left'){
					$contentDom.css({
						'left' : M._selfOffsetLeft - parseInt($contentDom.css('width')) + M._selfWidth - options.padding*2,
					})

					$contentDom.children("i").css({
						'left' :  parseInt($contentDom.css('width')) - M._selfWidth/2,
					})
				}
				if(options.horizontal == 'center'){
					$contentDom.css({
						'left' : M._selfOffsetLeft + M._selfWidth/2 - parseInt($contentDom.css('width'))/2 - M.jiaoWidth
					})

					$contentDom.children("i").css({
						'left' :  parseInt($contentDom.css('width'))/2,
					})

					if(options.vertical == 'center'){
						$contentDom.css({
							'top' : M._selfOffsetTop - parseInt($contentDom.css('height')) - options.padding*2 - M.jiaoHeight,
						})

						$contentDom.children("i").css({
							'border-bottom-width' :'0px',
							'border-top-color' : options.bgColor,
							'bottom' : -M.jiaoWidth,
						})

						return ;
					}
				}

				if(options.vertical == 'center'){
					$contentDom.css({
						'top' : M._selfOffsetTop + M._selfHeight/2 - (parseInt($contentDom.css('height'))+options.padding*2)/2,
					})

					if(options.horizontal == 'left'){
						$contentDom.css({
							'left' : M._selfOffsetLeft - parseInt($contentDom.css('width')) - options.padding*2 - M.jiaoWidth,
						})

						$contentDom.children("i").css({
							'border-right-width' :'0px',
							'border-left-color' : options.bgColor,
							'top' : (parseInt($contentDom.css('height')) + options.padding*2)/2 - options.padding,
							'left' :  parseInt($contentDom.css('width')) + options.padding*2
						})

					}
					if(options.horizontal == 'right'){
						$contentDom.css({
							'left' : M._selfOffsetLeft + M.jiaoWidth + M._selfWidth,
						})
						$contentDom.children("i").css({
							'border-left-width' :'0px',
							'border-right-color' : options.bgColor,
							'top' : (parseInt($contentDom.css('height')) + options.padding*2)/2 - options.padding,
							'left' : -M.jiaoWidth
						})

					}
				}
			}

			function bindTarget(){

				var _selfTipNum = __self.attr('dom-tip-num');
				if(!!$('div[tip-num="'+_selfTipNum+'"]').length){

					init($(this));
					tipShow($('div[tip-num="'+_selfTipNum+'"]'))
				}else{
					$('body').append($contentDom);
					tipShow($contentDom);
					init($(this));
				}
				(options.closeType == 'auto') && (setTimeout(function(){
					 tipHide($contentDom)
				},parseInt(options.closeTime)));
				(options.closeType == 'mouseout') && ($(document).delegate(__self,'mouseout',function(){
					 tipHide($contentDom)
				}))
			}

			function tipShow(dom){
				(options.animateType == 'fade') && dom.stop().fadeIn(parseInt(options.animateTime));
				(options.animateType == 'bounce') && dom.show(0).addClass('bounce').css('animation-duration',parseInt(options.animateTime)+'ms');
			}
			function tipHide(dom){
				(options.animateType == 'fade') && dom.stop().fadeOut(parseInt(options.animateTime));
				(options.animateType == 'bounce') && dom.removeClass('bounce').stop().fadeOut(100);
			}

			__self.bind(options.target,bindTarget);

			return __self;
		}