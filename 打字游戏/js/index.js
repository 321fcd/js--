/*
* @Author: HP
* @Date:   2017-09-28 14:36:27
* @Last Modified by:   HP
* @Last Modified time: 2017-09-28 23:32:45
*/
function Game(){
	this.charArr=['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
	this.num=5;
	this.current=[];   //页面元素
	this.guan=10;    //晋级条件
	this.speed=2;
	this.position=[];
	this.score=0;
	this.word=[27,28];

}
Game.prototype={
	start:function(){
		this.getchars();
		this.drop();
		this.key();
	},
	getchars:function(){
		// let word1=[27,28];
		for(let i=0;i<this.num;i++){
			this.getchar();
		}
		// document.removeChild(this.word);
		// this.word=word1;
		this.position=[];
	},
	getchar:function(){
		let num1=Math.floor(Math.random()*this.charArr.length);
		while(this.checkWord(num1,this.word)){
			num1=Math.floor(Math.random()*this.charArr.length);
		}
		
		this.word.push(num1);
		this.word=[27,28];
		let divs=document.createElement('div');
		divs.innerText=this.charArr[num1];
		divs.classList.add('dd');
		let tops=Math.floor(Math.random()*100);
		let lefts=Math.floor(Math.random()*(innerWidth-400)+200);
		while(this.checkPosition(lefts,this.position)){
			lefts=Math.floor(Math.random()*(innerWidth-400)+200);
		}	
		divs.style.top=tops+'px';
		divs.style.left=lefts+'px';
		document.body.appendChild(divs);
		this.current.push(divs);
		this.position.push(lefts);
	},
	checkWord:function(num1){
		let that=this;
		let flag=that.word.every(function(value){
			for(let j=0;j<that.word.length;j++){
				if(that.word[j]==num1){
					return true;
				}
			}
			return false;
		});
		return flag;
	},
	checkPosition:function(lefts){
		let flag=this.position.some(function(value){
			return Math.abs(value-lefts)<50;
		});
		return flag;
	},
	drop:function(){
		let that=this;
		let life=document.querySelector('.life');
		this.t=setInterval(function(){
			for(let i=0;i<that.current.length;i++){
				let tops=that.current[i].offsetTop+that.speed;
				that.current[i].style.top=`${tops}px`;
				if(tops>=500){
					document.body.removeChild(that.current[i]);
					that.current.splice(i,1);
					that.position.splice(i,1);
					that.getchar();
					life.innerText -=1;
					// if(life.innerText<=0){
					// 	window.clearInterval(this.t); 
					// }
				}
			}
		},100)
	},
	key:function(){
		let that=this;
		document.onkeydown=function(e){
			for(let i=0;i<that.current.length;i++){
				// if(e.key==that.current[i].charCodeAt(that.current[i].innerText)){
				if(String.fromCharCode(e.keyCode)==that.current[i].innerText){
					document.body.removeChild(that.current[i]);
					that.current.splice(i,1);
					that.position.splice(i,1);
					let divss=document.querySelector('.feng');
					divss.innerText='';
					that.score+=1;
					divss.innerText=that.score;
					that.getchar();
					if(that.score==that.guan){
						that.next();
					}
				}
			}
		}
	},
	next:function(){
		clearInterval(this.t);
		for(let i=0;i<this.current.length;i++){
			document.body.removeChild(this.current[i]);
		}
		this.current.length=0;
		this.position.length=0;
		this.speeds();
		this.guan+=10;
		this.start();
	},
	speeds:function(){
		this.num++;
		if(this.num==10){
			this.num=5;
			this.speed +=2;
		}
	}
}

