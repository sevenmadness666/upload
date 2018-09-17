// 主要tab
(function($){

	$.fn.rTabs_mob = function(options){

		//默认值
		var defaultVal = {
			btnClass:'.j-tab-nav_mob',	/*按钮的父级Class*/
			conClass:'.j-tab-con_mob',	/*内容的父级Class*/
			bind:'hover',	/*事件参数 click,hover*/
			animation:'0',	/*动画方向 left,up,fadein,0 为无动画*/
			speed:300, 	/*动画运动速度*/
			delay:200,	/*Tab延迟速度*/
			auto:false,	/*是否开启自动运行 true,false*/
			autoSpeed:3000	/*自动运行速度*/
		};

		//全局变量
		var obj = $.extend(defaultVal, options),
			evt = obj.bind,
			btn = $(this).find(obj.btnClass),
			con = $(this).find(obj.conClass),
			anim = obj.animation,
			conWidth = con.width(),
			conHeight = con.height(),
			len = con.children().length,
			sw = len * conWidth,
			sh = len * conHeight,
			i = 0,
			len,t,timer;

		return this.each(function(){

			//判断动画方向
			function judgeAnim(){
				var w = i * conWidth,
					h = i * conHeight;
				btn.children().removeClass('current').eq(i).addClass('current');
				switch(anim){
					case 'fadein':
					con.children().hide().eq(i).fadeIn();
					break;
				}
			}

			//判断事件类型
			if(evt == "hover"){
				btn.children().hover(function(){
					var j = $(this).index();
					function s(){
						i = j;
						judgeAnim();
					}
					timer=setTimeout(s,obj.delay);
				}, function(){
					clearTimeout(timer);
				})
			}else{
				btn.children().bind(evt,function(){
					i = $(this).index();
					judgeAnim();

			      $("img.lazy").lazyload({
			          event : "click"
			      });

				})
			}
		})
	}

})(jQuery);


// tab里的tab
(function($){

	$.fn.rTabs_mob2 = function(options){

		//默认值
		var defaultVal = {
			btnClass:'.j-tab-nav_mob2',	/*按钮的父级Class*/
			conClass:'.j-tab-con_mob2',	/*内容的父级Class*/
			bind:'hover',	/*事件参数 click,hover*/
			animation:'0',	/*动画方向 left,up,fadein,0 为无动画*/
			speed:300, 	/*动画运动速度*/
			delay:200,	/*Tab延迟速度*/
			auto:false,	/*是否开启自动运行 true,false*/
			autoSpeed:3000	/*自动运行速度*/
		};

		//全局变量
		var obj = $.extend(defaultVal, options),
			evt = obj.bind,
			btn = $(this).find(obj.btnClass),
			con = $(this).find(obj.conClass),
			anim = obj.animation,
			conWidth = con.width(),
			conHeight = con.height(),
			len = con.children().length,
			sw = len * conWidth,
			sh = len * conHeight,
			i = 0,
			len,t,timer;

		return this.each(function(){

			//判断动画方向
			function judgeAnim(){
				var w = i * conWidth,
					h = i * conHeight;
				btn.children().removeClass('current').eq(i).addClass('current');
				switch(anim){
					case 'fadein':
					con.children().hide().eq(i).fadeIn();
					break;
				}
			}

			//判断事件类型
			if(evt == "hover"){
				btn.children().hover(function(){
					var j = $(this).index();
					function s(){
						i = j;
						judgeAnim();
					}
					timer=setTimeout(s,obj.delay);
				}, function(){
					clearTimeout(timer);
				})
			}else{
				btn.children().bind(evt,function(){
					i = $(this).index();
					judgeAnim();
				})
			}

		})

	}

})(jQuery);


(function($){

	$.fn.rTabs_egame = function(options){

		//默认值
		var defaultVal = {
			btnClass:'.j-tab-nav_egame',	/*按钮的父级Class*/
			conClass:'.j-tab-con_egame',	/*内容的父级Class*/
			bind:'hover',	/*事件参数 click,hover*/
			animation:'0',	/*动画方向 left,up,fadein,0 为无动画*/
			speed:300, 	/*动画运动速度*/
			delay:200,	/*Tab延迟速度*/
			auto:false,	/*是否开启自动运行 true,false*/
			autoSpeed:3000	/*自动运行速度*/
		};

		//全局变量
		var obj = $.extend(defaultVal, options),
			evt = obj.bind,
			btn = $(this).find(obj.btnClass),
			con = $(this).find(obj.conClass),
			anim = obj.animation,
			conWidth = con.width(),
			conHeight = con.height(),
			len = con.children().length,
			sw = len * conWidth,
			sh = len * conHeight,
			i = 0,
			len,t,timer;

		return this.each(function(){

			//判断动画方向
			function judgeAnim(){
				var w = i * conWidth,
					h = i * conHeight;
				btn.children().removeClass('current').eq(i).addClass('current');
				switch(anim){
					case 'fadein':
					con.children().hide().eq(i).fadeIn();
					break;
				}
			}

			//判断事件类型
			if(evt == "hover"){
				btn.children().hover(function(){
					var j = $(this).index();
					function s(){
						i = j;
						judgeAnim();
					}
					timer=setTimeout(s,obj.delay);
				}, function(){
					clearTimeout(timer);
				})
			}else{
				btn.children().bind(evt,function(){
					i = $(this).index();
					judgeAnim();

			      $("img.lazy").lazyload({
			          event : "click"
			      });

				})
			}
		})
	}

})(jQuery);