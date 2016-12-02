window.onload = function(){
	var main = document.getElementById("main");
	var topNav = document.getElementById("top"); 
	var divpage = main.children;
	var height = window.innerHeight;
	var count = 0;
	var currentTop = 0;
	var scrollDirection = 0;
	var clock = null;
	console.log(divpage[count].offsetTop);
	re_top();
	for(var i= 0;i <divpage.length;i++){
		divpage[i].style.height = height + "px";
		divpage[i].style.background = "url(img/BIM-bg"+(i+1)+".png) no-repeat";
		divpage[i].style.backgroundSize = "cover";
	}
	window.onscroll = function(e){
		var ev = e||event;
		var scrollTop = document.body.scrollTop;
		console.log(scrollTop,(divpage.length-1) * height+227);
		if(scrollTop >= 227 && scrollTop <= (divpage.length-1) * height+227){
			topNav.style.position = "fixed";
			topNav.style.zIndex = 100;
			topNav.style.top = 0;
			for(var i= 0;i <divpage.length;i++){
				divpage[i].style.height = height+71+"px";
			}
			
			
//		}
			console.log(scrollTop,currentTop);
			if(scrollTop > currentTop){
				scrollDirection=1; 
	        }else if(scrollTop < currentTop){  
	            scrollDirection=-1;  
	       	}
	        console.log(count);
	        //滑动动画
	        clearInterval(clock);  
	        clock=setInterval(animation,20);           
	
	        //每次滚动完毕将位置存入变量以供比较判断滚动方向  
//	       	currentTop=document.body.scrollTop;
	        console.log(currentTop);
		}
		if(scrollTop < 227){
//			clearInterval(clock);  
			topNav.style.position = "relative";
			for(var i= 0;i <divpage.length;i++){
				divpage[i].style.height = height + "px";
			}
		}
	};
	    //分屏滑动动画效果  
    function animation(){  
        if(scrollDirection==1){  
            //上行  
            console.log("上行:"+count);
            console.log("行前:"+document.body.scrollTop,divpage[count].offsetTop);
            if(document.body.scrollTop-298-divpage[count].offsetTop < -20){  
                document.body.scrollTop+=20;  
            }else if(document.body.scrollTop-298-divpage[count].offsetTop > -20&& (document.body.scrollTop-298-divpage[count].offsetTop)!=0){
            		document.body.scrollTop = divpage[count].offsetTop + 298;
            		console.log("行后:"+document.body.scrollTop,divpage[count].offsetTop);
            	}else{
            		count++;
            		if(count>4){
            			count = 4;
            		}
                clearInterval(clock);         
            }
            	currentTop=document.body.scrollTop;
        }  
          
        if(scrollDirection==-1){  
            //下行            
             console.log("下行:"+count);
            console.log("行前:"+document.body.scrollTop,divpage[count].offsetTop);
            if(document.body.scrollTop-298-divpage[count].offsetTop < -20){  
                document.body.scrollTop-=20;  
            }else if(document.body.scrollTop-298-divpage[count].offsetTop > -20&& (document.body.scrollTop-298-divpage[count].offsetTop)!=0){  
            		document.body.scrollTop = divpage[count].offsetTop + 298;
            		console.log("行后:"+document.body.scrollTop,divpage[count].offsetTop);
            	}else{
            		count--;
            		if(count<0){
            			count = 0;
            		}
                clearInterval(clock);  
            }
            	currentTop=document.body.scrollTop;
        }  

    }  
};
