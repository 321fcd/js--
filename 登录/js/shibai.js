/*
* @Author: HP
* @Date:   2017-09-15 17:39:02
* @Last Modified by:   HP
* @Last Modified time: 2017-09-15 22:28:57
*/
let daoshu=document.getElementById('daoshu');
let t =window.setInterval(function(){
	daoshu.innerText -=1;
	if(daoshu.innerText<=0){
		clearInterval(t);
		location.replace('login.html');
	}
}, 1000);