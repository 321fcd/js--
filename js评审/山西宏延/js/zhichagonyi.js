/*
* @Author: HP
* @Date:   2017-10-07 15:57:55
* @Last Modified by:   HP
* @Last Modified time: 2017-10-08 21:33:14
*/
window.onload=function(){
	let bao=document.getElementsByClassName('bao')[0];
	//顶层功能
	window.onscroll=function(){
		let scrolltop=document.documentElement.scrollTop; 
		if(scrolltop>=160){
			bao.style.top=0;
		}else if(scrolltop<160){
			bao.style.top=-75+'px';
		}	
	}
}