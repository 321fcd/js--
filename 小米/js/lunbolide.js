/*
* @Author: HP
* @Date:   2017-09-18 18:43:10
* @Last Modified by:   HP
* @Last Modified time: 2017-09-22 22:55:00
*/
window.onload=function(){
	//nav
	let nav=document.getElementsByClassName('nav')[0];
	let zhong=nav.getElementsByClassName('zhong')[0];
	let li2=zhong.getElementsByTagName('li');
	let tan=document.getElementsByClassName('tan');
	//banner
	let banner=document.getElementsByClassName('banner')[0];
	let lunbo=banner.getElementsByClassName('lunbo')[0]
	let img1=document.getElementsByClassName('img1')[0];
	let imgtu=img1.getElementsByTagName('li');
	let yuan1=document.getElementsByClassName('lunbo-yuan')[0];
	let yuan=yuan1.getElementsByTagName('li');
	let lunbozuo=lunbo.getElementsByClassName('lunbo-zuo')[0];	
	let lunboyou=lunbo.getElementsByClassName('lunbo-you')[0];	
	let num=0;
	let now=0//记录窗口显示的下标
	let next=0;//下一张
	let flag=true;
	let imgtuw=parseInt(getComputedStyle(img1,null).width);
	let t=setInterval(dong, 2000);
	let ce = document.getElementsByClassName('ce')[0];
	let li1=ce.getElementsByTagName('li');
	let item=document.getElementsByClassName('item');
	let pinzuo=document.getElementById('pinzuo');
	let pinyou=document.getElementById('pinyou');
	let neiron=document.getElementsByClassName('neiron')[0];
	//nav的功能展示
		for(let i=0;i<li2.length;i++){
			li2[i].onmouseover=function(){
				tan[i].style.height=230+'px';
			}
			li2[i].onmouseout=function(){
				tan[i].style.height=0;
			}
		}
	//鼠标移入停止自动轮播
		banner.onmouseover=function(){
			clearInterval(t);
		}
		banner.onmouseout=function(){
			t=setInterval(dong, 2000);
		}
	//轮播图自动播放	
		function dong(){
			next++;
			if(next==imgtu.length){
				next=0;
			}
			for(let j=0;j<imgtu.length;j++){
				// imgtu[j].style.display='none';
				// animate(imgtu[j],{opacity:0});
				yuan[j].style.background='rgba(255,255,255,0)';
			}
			imgtu[next].style.display='block';
			// animate(imgtu[num],{opacity:1});
			yuan[next].style.background='#7c7c81';
			imgtu[next].style.left=`${imgtuw}px`;
			animate(imgtu[now],{left:-imgtuw});
			animate(imgtu[next],{left:0},function(){
				flag=true;
			});
			now=next;
		}
	//轮播图点击圆点切换
		for(let j=0;j<imgtu.length;j++){
			yuan[j].onclick=function(){
				for(let j=0;j<yuan.length;j++){
				// 	imgtu[j].style.display='none';
				// 	// animate(imgtu[j],{opacity:0});
					yuan[j].style.background='rgba(255,255,255,0)';
				}
					imgtu[j].style.display='block';
				// 	// animate(imgtu[j],{opacity:1});
					yuan[j].style.background='#7c7c81';
				// 	num=j;
				if(now==j){
					return;
				}
				imgtu[j].style.left=`${imgtuw}px`;
				animate(imgtu[now],{left:-imgtuw});
				animate(imgtu[j],{left:0});
				now=next=j;		
			}			
		}
	//点击左右切换
		function botu(){
			next--;
			if(next<0){
			next=imgtu.length-1;
			}
			for(let j=0;j<imgtu.length;j++){
				// imgtu[j].style.display='none';
				// animate(imgtu[j],{opacity:0});
				yuan[j].style.background='rgba(255,255,255,0)';
			}
			imgtu[next].style.display='block';
			// animate(imgtu[num],{opacity:1});
			yuan[next].style.background='#7c7c81';
			imgtu[next].style.left=`${-imgtuw}px`;
			animate(imgtu[now],{left:imgtuw});
			animate(imgtu[next],{left:0},function(){
				flag=true;
			});
			now=next;
			// if(num<0){
			// 	num=imgtu.length-1;
			// }
			// for(let j=0;j<yuan.length;j++){
			// 	// animate(imgtu[j],{opacity:0});
			// 	yuan[j].style.background='rgba(255,255,255,0)';
			// }
			// // animate(imgtu[num],{opacity:1});
			// yuan[num].style.background='#7c7c81';

		}
		lunbozuo.onclick=function(){
			if(!flag){
				return;
			}
			botu();
			flag=false;

		}

		lunboyou.onclick=function(){
			if(!flag){
				return;
			}
			dong();
			flag=false;
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
	//单品滑动
		pinyou.onclick=function(){
			neiron.style.left= -1240+'px';
			pinzuo.style.color='#c2b4b0';
			pinyou.style.color='#e0e0e0';
		}
		pinzuo.onclick=function(){
			neiron.style.left=0;
			pinzuo.style.color='#e0e0e0';
			pinyou.style.color='#c2b4b0';
		}	
}