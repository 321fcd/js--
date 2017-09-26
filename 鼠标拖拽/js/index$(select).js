/*
* @Author: HP
* @Date:   2017-09-20 00:02:01
* @Last Modified by:   HP
* @Last Modified time: 2017-09-25 16:11:46
*/
//(重载)
//
$(function(){
	let small=$('.small')[0];
	let big=$('.big')[0];
	let bImg=$('img',big)[0];
	let bili=bImg.offsetWidth/parseInt(getComputedStyle(bImg,null));
	small
})
window.onload=function(){
	if(typeof select='string'){
		function $(select){
			ranger=ranger||document;
			var first=select.charAt(0);
			if(first=='.'){
				return document.getElementsByClassName(select.substring(1));
			}else if(first=='#'){
				return document.getElementById(select.substring(1));
			}else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
				return document.getElementsByTagName(select);
			}
		}
	}else if(typeof select='function'){
		window.addEventListener('load',)
	}
	
}