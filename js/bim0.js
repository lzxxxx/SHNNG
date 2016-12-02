window.onload = function(){
	var main = document.getElementById("main");
	var topNav = document.getElementById("top"); 
	var divpage = main.children;
	var height = window.innerHeight;
	var isscroll = true;
	var currentTop = 298;
	var scrollDirection = 0;
	var clock = null;
	for(var i= 0;i <divpage.length;i++){
		divpage[i].style.height = height + "px";
		divpage[i].style.background = "url(img/BIM-bg"+(i+1)+".png) no-repeat";
		divpage[i].style.backgroundSize = "cover";
	}
	console.log(main.parentNode.offsetTop);
	window.onscroll = function(e){
		var ev = e||event;
		var scrollTop = document.body.scrollTop;
		if(scrollTop >= 298){
			topNav.style.position = "fixed";
			topNav.style.zIndex = 100;
			topNav.style.top = 0;
			for(var i= 0;i <divpage.length;i++){
				divpage[i].style.height = height +"px";
			}
			console.log(scrollTop,currentTop);
			if(scrollTop > currentTop){
				scrollDirection=1; 
//				document.body.scrollTop = currentTop + height +71;
            }else if(scrollTop <currentTop){  
                scrollDirection=-1;  
            } 
            //滑动动画
            clearInterval(clock);  
            clock=setInterval(animation,1);           

            //每次滚动完毕将位置存入变量以供比较判断滚动方向  
            currentTop=document.body.scrollTop;     
		}
		if(scrollTop < 298){
			clearInterval(clock);  
			topNav.style.position = "relative";
			for(var i= 0;i <divpage.length;i++){
				divpage[i].style.height = height + "px";
			}
		}
	}
	    //分屏滑动动画效果  
    function animation(){  
        if(scrollDirection==1){  
            //上行  
            console.log(1);
            if((document.body.scrollTop-229)%(height-71)!=0){  
                document.body.scrollTop+=1;  
            }else{  
                clearInterval(clock);         
            }     
        }  
          
        if(scrollDirection==-1){  
            //下行            
             console.log(1);
            if((document.body.scrollTop-229)%(height-71)!=0){  
                document.body.scrollTop-=1;  
            }else{  
                clearInterval(clock);  
            }         
        }  


    }  
};
