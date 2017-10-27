/*
* @Author: HP
* @Date:   2017-10-09 09:13:18
* @Last Modified by:   HP
* @Last Modified time: 2017-10-12 14:32:14
*/
window.onload=function(){
	let canvas=document.querySelector('canvas');     //画出的是位图放大会失真
	let ctx=canvas.getContext("2d");  //相当于笔
	let opacity=document.querySelector('.opacity');
	let arr=[];
	let zhe=document.querySelector('.zhe');
	let pal=new Palette(canvas,ctx,opacity,arr,zhe);
	// let tools=document.getElementsByClassName('tools');
	let tool=document.querySelectorAll('.tool');
	let tools=document.getElementsByClassName('tools');
	let brush=document.querySelector('#brush');
	let lines=document.querySelector('#line');
	let dashed=document.querySelector('#dashed');
	let circle=document.querySelector('#circle');
	let square=document.querySelector('#square');
	let poly=document.querySelector('#poly');
	let polygon=document.querySelector('#polygon');

	let xiankuan=document.querySelector('#xiankuan');
	let stroke=document.querySelector('#stroke');
	let strokec=document.querySelector('#strokec');
	let strokeStyle = document.querySelector("#strokeStyle");
	let fill=document.querySelector('#fill');
	let fillc=document.querySelector('#fillc');
	let fillStyle = document.querySelector("#fillStyle");

	
	let xiangpi=document.querySelector('#xiangpi');
	let fuzhi=document.querySelector('#fuzhi');
	let caijian=document.querySelector('.caijian');
	let ziti=document.querySelector('#ziti');


	let chexiao=document.querySelector('#chexiao');
	let save=document.querySelector('#save');
	let clearAll=document.querySelector('#clearAll');
	let newFile=document.querySelector('#newFile');
	let fanxiang=document.querySelector('#fanxiang');
	
	pal.brush();
	tool.forEach(element=>{
		element.onclick=function(){
			let n=0;
			kuan(element);
			if(this.id=='poly' || this.id=='polygon'){
				n=prompt('请输入边数',5);
			}
			pal.tong(this.id,n);
		}
	})
	//失去焦点 填充颜色
	strokeStyle.onblur=function(){
        let v=this.value;
        pal.strokeStyle=v;
    }
    //失去焦点 描边颜色
    fillStyle.onblur=function(){
        pal.fillStyle=this.value;
    }
    //
	stroke.onclick=function(){
		
		pal.style='stroke';
	}
	fill.onclick=function(){
		
		pal.style='fill';
	}
	xiankuan.onclick=function(){
		kuan(xiankuan);
		let w=prompt('请输入宽度',1);
		pal.lineWidth=w;
	}
	brush.onclick=function(){
		for(let i=0;i<tool.length;i++){
			tool[i].style.borderColor='#fff';
		}
		brush.style.borderColor='blue';
		pal.brush();
	}
	chexiao.onclick=function(){
		kuan(chexiao);
		pal.chexiao();
	}
	xiangpi.onclick=function(){
		kuan(xiangpi);
		pal.xiangpi();
	}
	fuzhi.onclick=function(){
		kuan(fuzhi);
		pal.fuzhi(caijian);
	}


	ziti.onclick=function(){
		kuan(ziti);
		pal.ziti();
	}
	save.onclick=function(){

		let dataa=canvas.toDataURL('image/png');
		save.herf=dataa;       
		save.download='tu.png';       //点击下载下来图片
	}
	clearAll.onclick=function(){
		kuan(clearAll);
		pal.clearAll();
	}
	newFile.onclick=function(){
		let flag=confirm('是否保存');
		if(flag){
			save.onclick();
		}
		clearAll.onclick();
		// location.href=canvas.toDataURL('image/png').replace('')
		console.log(1)
	}
	fanxiang.onclick=function(){
		kuan(fanxiang);
		pal.fanxiang();
	}
	function kuan(element){
		for(let i=0;i<tool.length;i++){
			tool[i].style.borderColor='#fff';
			brush.style.borderColor='#fff';
		}
		element.style.borderColor='blue';
	}
}
// lines.onclick=function(){
	// 	pal.line();
	// }	
	// dashed.onclick=function(){
	// 	pal.dashed();
	// }	
	// circle.onclick=function(){
	// 	pal.circle();
	// }
	// square.onclick=function(){
	// 	pal.square();
	// }	
	// poly.onclick=function(){
	// 	let n=prompt('请输入边数',5);
	// 	pal.poly(n);
	// }	
	// polygon.onclick=function(){
	// 	let n=prompt('请输入边数',5);
	// 	pal.polygon(n);
	// }
	// canvas.toDataURL('image/png');//保存成图片
	// e.preventDefault()   //去除默认样式