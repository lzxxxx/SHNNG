window.onload = function() {
	var count = 0;
	//	1.获取页面上的列数(UL)
	var stream_pic = document.getElementById("stream_pic");
	var UL = stream_pic.getElementsByTagName("ul");
	//分别获取图片、上一张、下一张、编号标签
	var img_wrap = document.getElementById("img_wrap");
	var lis = img_wrap.nextElementSibling.getElementsByTagName("li");
	lis[0].style.background = "white";
	var iCur = 0;
	var imgcount = 0;
	var imgArr = ["img/P_01.jpg","img/P_02.jpg","img/P_03.jpg","img/P_04.jpg","img/P_05.jpg","img/P_06.jpg","img/P_07.jpg","img/P_08.jpg","img/P_09.jpg","img/P_010.jpg","img/P_011.jpg","img/P_012.jpg","img/P_013.jpg","img/P_014.jpg","img/P_015.jpg"];
	for(var i = 0; i < lis.length; i++) {
		//遍历给每个编号一个具体编号
		lis[i].index = i;
		//		编号点击
		lis[i].onclick = function() {
			if(this.index === 0) {
				startMove(img_wrap, {
					left: 0
				});
			} else if(this.index === lis.length - 1) {
				startMove(img_wrap, {
					left: (lis.length - 1) * - 1200
				});
			} else {
				startMove(img_wrap, {
					left: (this.index) * -1200
				});
			}
			iCur = this.index;
			lis_change(lis);
		};
	}

	//	定时器轮播
	setInterval(function() {
		iCur++;
		lis_change(lis);
		if(iCur > lis.length - 1) {
			iCur = 0;
			lis_change(lis);
		}
		startMove(img_wrap, {
			left: iCur * -1200
		});
	}, 3500);
	//	判断大图和编号是否对应
	function lis_change(obj) {
		for(var j = 0; j < obj.length; j++) {
			if(iCur === j) {
				obj[j].style.background = "white";
			} else {
				obj[j].style.background = "gray";
			}
		}
	}
	//	准备一个数组,存放每一列所装内容的高度
	function creatediv(num) {
		for(var j = 1; j <= num; j++) {
			var arrH = [];
			count++;
			//	2.创建元素
			var newLi = document.createElement("li");
			//		newLi.innerHTML = count;
			//	3.给创建的元素设置一个随机高度
			//	newLi.style.height = randomHeight(100, 400) + "px";
			var img = document.createElement("img");
			var div = document.createElement("div");
			div.style.position = "relative";
			var span = document.createElement("span");
//			span.style.cssText = "display:block;width:80%;position: absolute;top: 10%;left:10%;z-index:10;";
//			span.className = '.span';
			span.innerHTML = "<img src='img/magnifier.png'></img>"
			span.innerHTML += "<span style='display:block'>点击查看</span>";
			img.src = imgArr[imgcount+j-1];
			div.appendChild(img);
			div.appendChild(span);
			span.style.height = "80%";
			

//			img.src = "img/p_0" + j + ".jpg";
			newLi.appendChild(div);
			//	4.设置一个索引,存放5列中存放内容最小的那一列
			var index = 0;
			for(var i = 0; i < UL.length; i++) {
				arrH.push(UL[i].offsetHeight);
			}
			//	5.取出每一列高度的最小值
			index = arrH.indexOf(Math.min.apply(null, arrH));
			//	6.向最小高度所在的列追加一个新元素
			UL[index].appendChild(newLi);
//			span.style.lineHeight = img.offsetHeight + "px";
//			console.log(span);
		}
		imgcount += num;
	}
	creatediv(3);
	window.onscroll = function() {
		//	1.获取当前窗口滚动的一个高度(前者标准后者IE支持的方法)
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		//	2.获取可视区域的一个高度(前者标准后者IE支持的方法)
		var height = window.innerHeight || document.documentElement.clientHeight;
		//	开始设置
		//	4.设置一个索引,存放3列中存放内容最小的那一列
		var arrHH = [];
		for(var i = 0; i < UL.length; i++) {
			arrHH.push(UL[i].offsetHeight);
		}
		//	5.取出每一列高度的最小值
		var index = arrHH.indexOf(Math.min.apply(null, arrHH));
		console.log(UL[index].offsetHeight,scrollTop + height);
		if(UL[index].offsetHeight <= (scrollTop + height)){
			console.log(imgcount,imgArr.length-1);
			if(imgcount < imgArr.length-1){
				console.log(UL[index].offsetHeight,scrollTop + height);
				creatediv(1);
			}
			
		}
	};
	//	随机函数
	function randomHeight(min, max) {
		return Math.round(Math.random() * (max - min) + min);
	}
};