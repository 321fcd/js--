/*
* @Author: HP
* @Date:   2017-09-04 09:05:31
* @Last Modified by:   HP
* @Last Modified time: 2017-09-09 17:08:34
*/
// alert('这是js文件');
// 映射  map  filter
		
function map(arr,fn){
	var newarr=[];
	for(var i=0;i<arr.length;i++){
		newarr[newarr.length]=fn(arr[i]);
	}
	return newarr;
}
// 回调函数 
function filter(arr,fn){
	var newarr=[];
	for(var i=0;i<arr.length;i++){
		if(fn(arr[i])==true){
			newarr[newarr.length]=arr[i];
		}
	}
	return newarr;
}
		
//万能的删除			
function splicedelete(arr,pos,num){
	var newarr=[];
	for(var i = 0; i<arr.length; i++){
		if(i>=pos && i<pos+num){
			continue;
		}
		newarr[newarr.length]=arr[i];
	}
	return newarr;
}
//万能的添加			
function spliceAdd(arr,pos,...rest){
	var newarr=[];
	for(var i=0;i<pos;i++){
		newarr[newarr.length]=arr[i];
	}
	for(var i=0;i<rest.length;i++){
		newarr[newarr.length]=rest[i];
	}
	for(var i=pos;i<arr.length;i++){
		newarr[newarr.length]=arr[i];
	}
	return newarr;
}		
//万能的添加和删除
	//方法1	
	function spliceadd(arr,pos,...rest){
		var newarr=[];
		for(var i=0;i<pos;i++){
			newarr[newarr.length]=arr[i];
		}
		for(var i=0;i<rest.length;i++){
			newarr[newarr.length]=rest[i];
		}
		for(var i=pos;i<arr.length;i++){
			newarr[newarr.length]=arr[i];
		}
		return newarr;
	}			
	//方法2				
	function spliceadd(arr,pos,num,...rest){
		var newarr = splicedelete(arr,pos,num);
		if(rest.length>0){
			newarr = spliceAdd(newarr,pos,...rest);
		}
		return newarr;
	}
//some every
//符合一个就对
function some(arr,fn){
	for (var i = 0; i <arr.length; i++) {
		if(fn(arr[i])){
			return true;
		}
	}
	return false;	
}
//全符合才对
function every(arr,fn){
	for (var i = 0; i <arr.length; i++) {
		if(!fn(arr[i])){
			return false;
		}		
	}
	return true;	
}
//递归i函数
fn(1)
function fn(num){
	if(num<5){
		fn(++num)
	}
	alert(num);
}
// fn1->fn2
// fn2->fn3
// fn3->fn4
// fn4->fn5
// fn1( fn2( fn3( fn4( fn5 ) ) ) )
// fn5->5
// fn4->4
// fn3->3
// fn2->2
//拷贝
function copy(arr){
	var newarr=[];
	for(var i=0;i<arr.length;i++){
		if(typeof arr[i]=='object'){
			newarr[i]=copy(arr[i]);
		}else{
			newarr[i]=arr[i];
		}
	}
	return newarr;
}