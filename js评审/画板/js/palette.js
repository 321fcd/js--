/*
* @Author: HP
* @Date:   2017-10-10 11:41:42
* @Last Modified by:   HP
* @Last Modified time: 2017-10-12 14:24:27
*/
class Palette{
	constructor(canvas,ctx,opacity,arr,zhe){
		this.canvas=canvas;
		this.opacity=opacity;
		this.ctx=ctx;
		this.arr=arr;
		this.temp=null;
		this.zhe=zhe;
		// this.zhe.style
		this.cw=canvas.width;
		this.ch=canvas.height;
		this.lineWidth=1;
		// this.lineWidth='blue';
		this.style='stroke';
		this.fillStyle='#000';
		this.strokeStyle='#000';
	}
	//虽然不知道，但它很厉害
	into(){
		this.ctx.lineWidth=this.lineWidth;
		this.ctx.fillStyle=this.fillStyle;
		this.ctx.strokeStyle=this.strokeStyle;
	}
	//画笔工具
	brush(){
		this.opacity.onmousedown=function(e){
			let cx=e.offsetX,cy=e.offsetY;
			this.ctx.beginPath();
			this.ctx.moveTo(cx, cy);
			this.opacity.onmousemove=function(e){
				let ox=e.offsetX,oy=e.offsetY; 
				if(this.arr.length){
					this.ctx.putImageData(this.arr[this.arr.length-1],0,0); 
				}
				this.into();
				this.ctx.lineTo(ox, oy);
				this.ctx.stroke();
			}.bind(this)
			this.opacity.onmouseup=function(){
				this.arr.push(this.ctx.getImageData(0, 0,this.cw, this.ch));
				this.opacity.onmousemove=null;
				this.opacity.onmouseup=null;
			}.bind(this)	
		}.bind(this)
	}
	//直线工具
	line(cx,cy,ox,oy){
				this.ctx.beginPath();
				this.into();
		 		//画直线
				this.ctx.moveTo(cx, cy);
		 		this.ctx.lineTo(ox, oy);
		 		this.ctx.stroke();
	}
	//虚线工具
	dashed(cx,cy,ox,oy){
				this.ctx.beginPath();
				this.into();
				this.ctx.setLineDash([5,3]);
		 		//画直线
				this.ctx.moveTo(cx, cy);
		 		this.ctx.lineTo(ox, oy);
		 		this.ctx.stroke();
	}
	//圆形工具
	circle(cx,cy,ox,oy,r1){
					this.ctx.beginPath();
					this.into();
					this.ctx.arc(cx,cy,r1,0,Math.PI*2);
					this.ctx.closePath();
					this.ctx[this.style]();		
	}
	//多边形工具
	poly(cx,cy,ox,oy,r,n){
					this.ctx.beginPath();
					this.into();
					let rad=Math.PI*2/n;
					this.ctx.beginPath();
					this.ctx.moveTo(cx+r*Math.cos(rad), cy-r*Math.sin(rad));
					for(let i=0;i<n;i++){
						let x=cx+r*Math.cos(rad*i),
							y=cy+r*Math.sin(rad*i);
						this.ctx.lineTo(x, y)	
					}
					this.ctx.closePath();
					this.ctx[this.style]();
	}
	//正方形工具
	square(cx,cy,ox,oy,r){
					this.ctx.beginPath();
					this.into();
					let rad=Math.PI*2/4;
					this.ctx.beginPath();
					this.ctx.moveTo(cx+r*Math.cos(rad-Math.PI/4), cy-r*Math.sin(rad-Math.PI/4));
					for(let i=0;i<4;i++){
						let x=cx+r*Math.cos(rad*i+Math.PI/4),
							y=cy+r*Math.sin(rad*i+Math.PI/4);
						this.ctx.lineTo(x, y)	
					}
					this.ctx.closePath();
					this.ctx[this.style]();
	}
	//多角形工具
	polygon(cx,cy,ox,oy,r,n){
					this.ctx.beginPath();
					this.into();
					let rad=Math.PI/n;
					this.ctx.beginPath();
					this.ctx.moveTo(cx+r, cy);
					for(let i=0;i<=2*n;i++){
						let r1= i%2==0 ? r:r/2;
						let x=cx+r1*Math.cos(rad*i),
						y=cy+r1*Math.sin(rad*i);
							this.ctx.lineTo(x, y);	
					}
					this.ctx[this.style]();
					this.ctx.closePath();
	}
	//通用的
	tong(aa,n){
		this.opacity.onmousedown=function(e){
				let cx=e.offsetX,cy=e.offsetY;
				this.opacity.onmousemove=function(e){
					let ox=e.offsetX,oy=e.offsetY; 
					this.ctx.clearRect(0,0,this.cw, this.ch);
					let r=Math.sqrt(Math.pow(ox-cx,2)+Math.pow(oy-cy,2));
					if(this.arr.length){
						this.ctx.putImageData(this.arr[this.arr.length-1],0,0); 
					}
					this[aa](cx,cy,ox,oy,r,n);
				}.bind(this)
				this.opacity.onmouseup=function(){
					this.ctx.setLineDash([5,0]);
					this.arr.push(this.ctx.getImageData(0, 0,this.cw, this.ch));
					this.opacity.onmousemove=null;
					this.opacity.onmouseup=null;
				}.bind(this)
			}.bind(this)
	}
	//橡皮擦
	xiangpi(){
		this.opacity.onmousedown=function(e){
				this.zhe.style.display='block';
				this.opacity.onmousemove=function(e){
					let ox=e.offsetX-15,oy=e.offsetY-15;
					this.zhe.style.left=`${ox}px`;
					this.zhe.style.top=`${oy}px`;
					this.ctx.clearRect(ox,oy,30,30);
				}.bind(this)
				this.opacity.onmouseup=function(){
					this.zhe.style.display='none';
					this.arr.push(this.ctx.getImageData(0, 0,this.cw, this.ch));
					this.opacity.onmousemove=null;
					this.opacity.onmouseup=null;
				}.bind(this)
			}.bind(this)
	}
	//撤销
	chexiao(){
		this.arr.pop();
		this.ctx.clearRect(0, 0,this.cw, this.ch);
		if(!this.arr.length){return;}
		this.ctx.putImageData(this.arr[this.arr.length-1],0,0);
		this.zhe.style.display='none';
		this.xiangpi.onclick=null;
	}
	//文字工具
	ziti(){
		let that=this;
		this.opacity.onmousedown=function(e){
			that.opacity.onmousedown=null;
			let cx=e.offsetX,cy=e.offsetY;
			let divs=document.createElement('div');
			divs.contentEditable = true;
			divs.style.cssText=	`width:100px;height:30px;border:1px dashed #000;position:absolute;top:${cy}px;left:${cx}px;cursor:move;`;
			this.appendChild(divs);
			let left=0,top=0,lefts=cx,tops=cy;
			//书写文字
			divs.onmousedown=function(e){
				let cx=e.clientX,cy=e.clientY;
				left=divs.offsetLeft;
				top=divs.offsetTop;
				//移动文字
				that.opacity.onmousemove=function(e){
					let ox=e.clientX,oy=e.clientY;
					lefts=left+ox-cx;
					tops=top+oy-cy;
					divs.style.left=lefts+'px';
					divs.style.top=tops+'px';
					that.ctx.clearRect(0,0,that.cw, that.ch);
					if(that.arr.length){
						that.ctx.putImageData(that.arr[that.arr.length-1],0,0); 
					}
				}
				divs.onmouseup=function(){
				 	that.arr.push(that.ctx.getImageData(0, 0,that.cw, that.ch));
				 	that.opacity.onmousemove=null;
			 		this.onmouseup=null;
				}
			}
			//失去焦点  画布显示文字
			divs.onblur=function(){

				let value=this.innerText;
				that.opacity.removeChild(divs);
				that.ctx.font='bold 20px sans-serif';    //加粗 字号 字体
				that.ctx.textAlign='left';
				that.ctx.textBaseLine='middle';
				that.ctx.fillText(value, lefts, tops+20);
				that.arr.push(that.ctx.getImageData(0, 0,that.cw, that.ch));
			}	
		}
	}
	//裁剪工具
	fuzhi(caijian){
		let that=this;
		let dx,dy,lx,ty;
		this.opacity.onmousedown=function(e){
			caijian.style.display='block';
			let cx=e.offsetX,cy=e.offsetY;
			caijian.style.width=0;
			caijian.style.height=0;
			that.opacity.onmousemove=function(e){
				let ox=e.offsetX,oy=e.offsetY;
				dx=Math.abs(ox-cx);
				dy=Math.abs(oy-cy);
				lx= ox>=cx ? cx:ox;
				ty= oy>=cy ? cy:oy;
				caijian.style.left=`${lx}px`;
				caijian.style.top=`${ty}px`;
				caijian.style.width=`${dx}px`;
				caijian.style.height=`${dy}px`;
			}
			that.opacity.onmouseup=function(){
				that.temp=that.ctx.getImageData(lx, ty, dx, dy);
				that.ctx.clearRect(lx, ty,dx, dy);
				that.arr.push(that.ctx.getImageData(0, 0,that.cw, that.ch));
				that.ctx.putImageData(that.temp,lx, ty);
				that.opacity.onmousemove=null;
				that.opacity.onmouseup=null;
				that.drag(lx,ty,caijian);
			}
		}
	}
	drag(x,y,caijian){
		let that=this;
		this.opacity.onmousedown=function(e){
			let cx=e.offsetX,cy=e.offsetY;
			that.opacity.onmousemove=function(e){
				let ox=e.offsetX,oy=e.offsetY;
				let lefts=x+ox-cx;
				let tops=y+oy-cy;
				caijian.style.left=`${lefts}px`;
				caijian.style.top=`${tops}px`;
				that.ctx.clearRect(0,0,that.cw, that.ch);
				if(that.arr.length){
					that.ctx.putImageData(that.arr[that.arr.length-1],0,0); 
				}
				that.ctx.putImageData(that.temp,lefts,tops);
			}
			that.opacity.onmouseup=function(){
				that.arr.push(that.ctx.getImageData(0, 0,that.cw, that.ch));
				caijian.style.display='none';
				that.temp=null;
				that.opacity.onmousemove=null;
			 	that.opacity.onmouseup=null;
			 	that.opacity.onmousedown=null;
			}
		}
	}
	//全部清除
	clearAll(){
		this.arr=[];
		this.ctx.clearRect(0,0,this.cw, this.ch);
	}
	fanxiang(){
		let data=this.ctx.getImageData(0,0,this.cw,this.ch);
		console.log(data);
		for(let i=0;i<data.data.length;i+=4){
			data.data[i]=255-data.data[i];
			data.data[i+1]=255-data.data[i+1];
			data.data[i+2]=255-data.data[i+2];
		}
		this.ctx.putImageData(data,0,0);
	}
}