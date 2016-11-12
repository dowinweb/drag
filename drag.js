function drag(id){
	
	var obj = document.getElementById(id);
	var disX =0;
	var disY =0;
	
	obj.onmousedown = function(ev){
		disX = ev.pageX-obj.offsetLeft;
		disY = ev.pageY - obj.offsetHeight;
	}
	document.onmousemove =function(){
		obj.style.left= ev.clientX-disX;
		obj.style.top = ev.clientY-disY;
	}
}
