/*
* @Author: HP
* @Date:   2017-09-21 16:15:41
* @Last Modified by:   HP
* @Last Modified time: 2017-09-21 22:04:52
*/
//children  获取某一个元素的元素节点
	function children(parent){
		let newarr=[];
		let childs=parent.childNodes;
		childs.forEach(element=>{
			if(element.nodeType==1){
				newarr.push(element);
			}
		})
		return newarr;
	}
//filter 
	// function children(parent){
	// 	let newarr=[];
	// 	let childs=parent.childNodes;
	// 	let arr=Array.from(childs);
	// 	let newarr=arr.filter(element=>element.nodeType==1);
	// 	return newarr;
	// }
//获取div元素后变下一个div元素
	//方法一
		// function next(element,tagname){
		// 	let parent=element.parentNode;  //获取父元素节点
		// 	let child=parent.children;   //获取父元素的所有子元素节点
		// 	let index=0;
		// 	for(let i=0;i<child.length;i++){
		// 		if(child[i]==tagname){
		// 			index=i;
		// 			break;
		// 		}
		// 	}
		// 	let nextall=Array.from(child).slice(index+1);  //数组
		// 	for(let i=0;i<nextall.length;i++){
		// 		if(nextall[i].nodeName==tagname.toUpperCase()){
		// 			return nextall[i];
		// 		}
		// 	}
		// 	return null;
		// }
	//方法二
		function next(element,tagname){
			let nextaaa=element.nextElementSibling;   //下一个兄弟元素节点
			let nextaaaa=nextaaa.nodeName.toLowerCase();  //该元素节点组成的字符串
			while(nextaaaa!==tagname){
				nextaaa=nextaaa.nextElementSibling;   //下一个兄弟元素的下一个兄弟元素节点
				if(nextaaa==null){
					return null;
				}
				nextaaaa=nextaaa.nodeName.toLowerCase();  ////该元素节点组成的字符串
			}
			return nextaaa;
		}