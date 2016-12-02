function startMove(obj, json, func) {
	/*	第一个参数:目标值
		第二个参数:运动的物体
		第三个参数:物体的属性如:width,height
		*/
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var isStop = true;
		for(var attr in json) {
			var icur = 0;
			if(attr === "opacity"){
				//     	如果属性是opacity,则先把其转换为浮点数,扩大100倍,再转化为整数
				icur = parseInt(parseFloat(getStyle(obj, attr)) * 100);
			} else {
				//     	如果不是opacity这个属性,则只需要把属性值转化为整数就可以了
				icur = parseInt(getStyle(obj, attr));
			}
			//     		设置速度
			var speed = (json[attr] - icur) / 5;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			//      运动跟停止分开
			if(icur != json[attr]) {
				isStop = false;
			}
				if(attr === "opacity") {
					obj.style[attr] = (icur + speed) / 100;
				} else {
					obj.style[attr] = parseInt(getStyle(obj, attr)) + speed + "px";
				}
		}
		if(isStop){
			clearInterval(obj.timer);
			if(func) {
				func();
			}
		}
	}, 15);
}
function getStyle(obj, attr) {
	//第一个参数:具体的元素
	//	 第二个参数:具体属性 ,例如width等
	if(obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, false)[attr];
	}
}