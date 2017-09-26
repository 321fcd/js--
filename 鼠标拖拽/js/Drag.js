/*
* @Author: HP
* @Date:   2017-09-25 08:47:57
* @Last Modified by:   HP
* @Last Modified time: 2017-09-25 15:21:29
*/
//实现鼠标拖拽
//面向对象
	class Drag{
		constructor(obj){   //返回结构构造
			this.obj=obj;    
		}
		move(){
			let that=this;
			//谁调用指谁
			this.obj.addEventListener('mousedown',function(e){  
				let ox=e.offsetX,oy=e.offsetY;
				document.addEventListener('mousemove',fn); 
				that.obj.addEventListener('mouseup',function(){
					document.removeEventListener('mousemove',fn);
				})
				function fn(e){
					let lefts=e.clientX-ox,tops=e.clientY-oy;
					that.obj.style.left=`${lefts}px`;
					that.obj.style.top=`${tops}px`;
				} 
			})
		}
	}