/*
* @Author: HP
* @Date:   2017-09-15 10:04:46
* @Last Modified by:   HP
* @Last Modified time: 2017-09-15 18:11:29
*/
let t1=document.getElementById('text1');
let t2=document.getElementById('text2');
let denglu=document.getElementById('denglu');
denglu.onclick = function(){
	let u=t1.value.trim();
	 p=t2.value.trim();
	if(u=='zhangsan' && p==12345){
		alert('success');
	}else{
		location.replace('shibai.html');
	}
}
