/*
* @Author: HP
* @Date:   2017-09-29 15:41:44
* @Last Modified by:   HP
* @Last Modified time: 2017-10-27 10:09:49
*/
function Snake(){
	this.sence=document.querySelector('.sence');
	this.snake=['0_0','0_1','0_2'];
	this.fangxiang=39;
	this.flag={'0_0':true,'0_1':true,'0_2':true};
	this.food='';
}
Snake.prototype = {
	start:function(){
		this.aaaaa();
		this.huan();
		this.move();
		this.foods();
		
	},
	aaaaa:function(){
		for(let i=0; i<20; i++){
			for(let j=0; j<20; j++){
				this.sence.innerHTML +=`
				<div class="ge" id="${i}_${j}"></div>
				`;	
			}
		}
	},
	huan:function(){
		this.snake.forEach(element=>{
			document.getElementById(element).classList.add('she');
			document.getElementById(element).style.borderRadius='5px';
		})
	},
	move:function(){
		let that=this;
		this.t=window.setInterval(function(){
			let oldt=that.snake[that.snake.length-1];
			let arr=oldt.split('_');
			let newt='';
			that.key();
			if(that.fangxiang==37){
				newt=`${arr[0]}_${arr[1]*1-1}`;
			}else if(that.fangxiang==38){
				newt=`${arr[0]*1-1}_${arr[1]}`;
			}else if(that.fangxiang==39){
				newt=`${arr[0]}_${arr[1]*1+1}`;
			}else if(that.fangxiang==40){
				newt=`${arr[0]*1+1}_${arr[1]}`;
			}
			let newtt=newt.split('_');
			if(newtt[0]<0 || newtt[0]>19 || newtt[1]<0 || newtt[1]>19 || that.flag[newt]===true){
				clearInterval(that.t);
				alert('game over');
				return;
			}
			if(newt==that.food){
				
				that.snake.push(that.food);
				that.flag[that.food]=true;
				document.getElementById(that.food).style.background="url('img/caodi.jpg') center / cover";
				that.foods();
				that.huan();
			}else{
				that.snake.push(newt);
				that.flag[newt]=true;
				let newtt=newt.split('_');
				let weiba=that.snake.shift();
				delete that.flag[weiba];
				document.getElementById(weiba).classList.remove('she');
				document.getElementById(weiba).style.borderRadius=0;
				that.huan();
			}
		},300) 
		
	},
	key:function(){
		let that=this;
		document.onkeydown=function(e){
			if(that.fangxiang-e.keyCode==2){
				return;
			}
			that.fangxiang=e.keyCode;
		}
	},
	foods:function(){
		let x,y;
		do{
			x=Math.floor(Math.random()*20);
			y=Math.floor(Math.random()*20);
		}while(this.snake.some(element=>element==`${x}_${y}`))
		this.food=`${x}_${y}`;
		document.getElementById(this.food).style.background='red';
		document.getElementById(this.food).style.borderRadius='5px';
	}
}

//function(){

//}.bind(this)