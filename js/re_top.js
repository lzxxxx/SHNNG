function re_top(){
	var re_top = document.getElementsByClassName("re_top")[0];
			re_top.onclick = function(){
				console.log(1);
				timer = setInterval(function(){
					var scroll_top = document.documentElement.scrollTop || document.body.scrollTop;
					var speed = Math.floor((-scroll_top)/8);
					 document.body.scrollTop=document.documentElement.scrollTop = scroll_top + speed;
					 if(document.body.scrollTop ===0){
					 	clearInterval(timer);
					 }
				},30)
				page = 0;
			};
}
