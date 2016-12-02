window.onload = function(){
	var main = document.getElementById("main");
	var topNav = document.getElementById("top_wrap");
	var logo = document.getElementsByClassName("logo")[0];
	var divpage = main.children;
	var height = window.innerHeight;
	var page = 0;
	var isscroll = true;
	var currentTop = 0;
	var scrollDirection = 0;
	var clock = null;
	divpage[0].firstElementChild.style.opacity = 1;
	re_top();
	for(var i= 0;i <divpage.length;i++){
		divpage[i].style.height = height + "px";
		divpage[i].style.background = "url(img/BIM-bg"+(i+1)+".png) no-repeat";
		divpage[i].style.backgroundSize = "cover";
	}
	if(document.body.scrollTop >= logo.offsetHeight){
		topNav.style.position = "fixed";
		topNav.style.zIndex = 100;
		topNav.style.top = 0;
	}
	window.onwheel = function(e){
//		console.log(page);
		clearInterval(clock);
		var ev = e||event; 
		var scrollTop = document.body.scrollTop;
		var dir = ev.wheelDelta||ev.detail;
		if(isscroll){
			for(var i = 1;i < divpage.length-1;i++){
				divpage[1].firstElementChild.style.opacity = 0;
			}
			isscroll = false;
			if(dir < 0){
				page++;
				scrollDirection = 1;
			}else{
				page--;
				scrollDirection = -1;
			}
			if(page < 0){
				page = 0;
			}
			else if(page > 6){
				page = 6;
			}
		}
		console.log(page,isscroll,scrollDirection);
		if(page === 0){
			topNav.style.position = "relative";
		}
		if(page > 0 && page < 6){
			for(var i = 0;i < divpage.length-1;i++){
				divpage[i].firstElementChild.style.opacity = 0;
			}
			topNav.style.position = "fixed";
			topNav.style.zIndex = 100;
			topNav.style.top = 0;
			divpage[page-1].firstElementChild.style.opacity = 1;
			if(scrollDirection === 1){
				if(document.body.scrollTop - (logo.offsetHeight+height*(page-1)) > 0){
					clearInterval(clock);
					console.log(1);
					page++;
					isscroll = true;
				}
			}else{
				if(document.body.scrollTop - (logo.offsetHeight+height*(page-1)) < 0){
					clearInterval(clock);
					
					page--;
					isscroll = true;
				}
			}
			clock = setInterval(function(){
				document.body.scrollTop += 30*scrollDirection;
				if(Math.abs(document.body.scrollTop - (logo.offsetHeight+height*(page-1))) < 30){
					document.body.scrollTop = logo.offsetHeight+height*(page-1);
					clearInterval(clock);
					isscroll = true;
				}
			},20);
		}else{
			clearInterval(clock);
			isscroll = true;
		}
	};
};
