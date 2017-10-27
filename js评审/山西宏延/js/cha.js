/*
* @Author: HP
* @Date:   2017-09-19 11:30:34
* @Last Modified by:   HP
* @Last Modified time: 2017-10-27 11:50:50
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
				$('.wu ~ li').css({color:'#A33E11',borderBottom:0});
				$('.yi1').css({display:'block'});
				$('.wu').css({color:'red',borderBottom:'2px solid #A33E11'});
			})
			$('.hong').on('click',function(){
				$('.yi1 , .san3').css({display:'none'});
				$('.wu , .lv').css({color:'#A33E11',borderBottom:0});
				$('.er2').css({display:'block',color:'red'});
				$('.hong').css({color:'red',borderBottom:'2px solid #A33E11'});
			})
			$('.lv').on('click',function(){
				$('.yi1 , .er2').css({display:'none'});
				$('.wu , .hong').css({color:'#A33E11',borderBottom:0});
				$('.san3').css({display:'block',color:'red'});
				$('.lv').css({color:'red',borderBottom:'2px solid #A33E11'});
			})		
	})
}