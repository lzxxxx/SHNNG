window.onload = function(){
	console.log(document.body.scrollTop);
	var main = document.getElementById("main");
	var div = main.children;
	var img = document.querySelectorAll("#main div img");
	var fontColor = document.querySelectorAll("#main div div");
	var title = document.querySelector("#main div div");
	for(var i = 0;i < div.length;i++){
		div[i].i = i;
		div[i].onmouseover = function(){
			img[this.i].src= "img/en_d"+(this.i+1)+".jpg";
			if(this.i%2 ===0){
				img[this.i].style.borderRight = "20px solid #cfdb00";
			}else{
				img[this.i].style.borderLeft = "20px solid #cfdb00";
			}
			fontColor[this.i].style.color = "black";
			fontColor[this.i].firstElementChild.style.color = "black";
		};
		div[i].onmouseout = function(){
			img[this.i].src = "img/en_a"+(this.i+1)+".jpg";
			if(this.i % 2 === 0){
				img[this.i].style.borderRight = "20px solid #e1e1e1";
			}else{
				img[this.i].style.borderLeft = "20px solid #e1e1e1";
			}
			fontColor[this.i].style.color = "#E1E1E1";
			fontColor[this.i].firstElementChild.style.color = "#b4b4b4";
		};
	}
}
