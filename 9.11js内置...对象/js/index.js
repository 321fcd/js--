/*
* @Author: HP
* @Date:   2017-09-11 08:51:32
* @Last Modified by:   HP
* @Last Modified time: 2017-09-11 16:48:27
*/
//闭包函数  
		// function fn(){
		// 	var num = 10;
		// 	return fn1;
		// 	function fn1(){
		// 		num++;
		// 		return num;
		// 	}
		// }
		// var result=fn();
		// alert(result());
//箭头函数
	//var fn =function(a){
	//		return a;
	//	}
	// var fn2 = a => a;  
	// alert(fn2(1));
	// var fn1 = () => a;  //没有形参，加一个小括号
	// fn1(1);  //undefined
	// var fn = (a,b) => a+b;  //参数多了也用小括号括起来
	// alert(fn(1,2));	
	// var fn = (a,b) => {
	// 	//console.log(arguments);  //箭头函数没有arguments对象
	// 	alert(a+b)  
	// 	alert(a-b)  
	// 	alert(a*b)}  
	// fn(1,2);
//回调函数
	// function map(arr,fn){
	// 	var newarr=[];
	// 	for(var i=0;i<arr.length;i++){
	// 		newarr[newarr.length]=fn(arr[i]);
	// 	}
	// 	return newarr;
	// }
	// // 回调函数   把一个函数当作实参来进行传递
	// function filter(arr,fn){
	// 	var newarr=[];
	// 	for(var i=0;i<arr.length;i++){
	// 		if(fn(arr[i])==true){
	// 			newarr[newarr.length]=arr[i];
	// 		}
	// 	}
	// 	return newarr;
	// }
