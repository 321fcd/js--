/*
* @Author: HP
* @Date:   2017-09-18 17:24:18
* @Last Modified by:   HP
* @Last Modified time: 2017-09-19 19:39:16
*/
window.onload=function(){
	let img1=document.getElementsByClassName('img1')[0];
	let imgtu=img1.getElementsByTagName('li');
	let yuan1=document.getElementsByClassName('lunbo-yuan')[0];
	let yuan=yuan1.getElementsByTagName('li');
	let num=0;
	let banner=document.getElementsByClassName('banner')[0];
	let ce=document.getElementsByClassName('ce')[0];
	let li1=ce.getElementsByTagName('li');
	let item=document.getElementsByClassName('item');
	let t=setInterval(dong, 1000);
	//鼠标移入停止自动轮播
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(dong, 1000);
	}
	//轮播图自动播放	
	function dong(){
		num++;
		if(num==imgtu.length){
			num=0;
		}
		for(let j=0;j<imgtu.length;j++){
			imgtu[j].style.display='none';
			yuan[j].style.background='rgba(255,255,255,0)';
		}
		imgtu[num].style.display='block';
		yuan[num].style.background='#7c7c81';
	}
	
	//轮播图点击圆点切换
	for(let j=0;j<imgtu.length;j++){
		yuan[j].onclick=function(){
			for(let j=0;j<yuan.length;j++){
				imgtu[j].style.display='none';
				yuan[j].style.background='rgba(255,255,255,0)';
			}
				imgtu[j].style.display='block';
				yuan[j].style.background='#7c7c81';
				num=j;			
		}
	}
	//侧导航展开
	for(let i=0;i<li1.length;i++){
		li1[i].onmouseover=function(){
			item[i].style.display='block';
		}
		li1[i].onmouseout=function(){
			item[i].style.display='none';
		}
	}

}
