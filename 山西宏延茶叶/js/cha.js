/*
* @Author: HP
* @Date:   2017-09-19 11:30:34
* @Last Modified by:   HP
* @Last Modified time: 2017-10-19 12:23:01
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
	$(function(){
			$('.wu').on('click',function(){
				$('.yi1 ~ ul').css({display:'none'});
				$('.yi1').css({display:'block'});

			})
			$('.hong').on('click',function(){
				$('.yi1 , .san3').css({display:'none'});
				$('.er2').css({display:'block'});
			})
			$('.lv').on('click',function(){
				$('.yi1 , .er2').css({display:'none'});
				$('.san3').css({display:'block'});
			})		
	})
}