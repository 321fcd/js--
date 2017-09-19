/*
* @Author: HP
* @Date:   2017-09-20 00:02:01
* @Last Modified by:   HP
* @Last Modified time: 2017-09-20 00:03:10
*/
window.onload=function(){
	function $(select){
		var first=select.charAt(0);
		if(first=='.'){
			return document.getElementsByClassName(select.substring(1));
		}else if(first=='#'){
			return document.getElementById(select.substring(1));
		}else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
			return document.getElementsByTagName(select);
		}
	}
}