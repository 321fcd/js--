/*
* @Author: HP
* @Date:   2017-10-26 13:53:10
* @Last Modified by:   HP
* @Last Modified time: 2017-10-27 13:43:04
*/
$(function(){
	let hei={};
	let bai={};
	let kongbai={};
	let ai=true;

	$('.renren').on('click',function(){
		ai=false;
	})
	$('.renji').on('click',function(){
		window.location.reload();
	})
	for(let i=0; i<15; i++){
		$('<span>').addClass('shu').appendTo('.qipan');
		$('<i>').addClass('hang').appendTo('.qipan');
		for(let j=0; j<15; j++){
			$('<li>').addClass('qizi').attr('id',i+'_'+j).data("pos",{x:i,y:j}).appendTo('.qipan');
			kongbai[i+'_'+j]={x:i,y:j};
		}	
	}
	let flag=true;
	$('.qipan .qizi').on('click',function(){
		if($(this).hasClass('hei') || $(this).hasClass('bai')){
			return;
		}
		let data=$(this).data('pos');
		if(flag){
			$(this).addClass('hei');
			hei[data.x+'_'+data.y]=true;
			delete kongbai[data.x+'_'+data.y];
			if(panduan(data,hei)>=5){
				$('.qipan .qizi').off();
				alert('黑棋胜利');
			}
			if(ai){
				let wz=Ai();
				if(panduan(wz,bai)>=5){
					$('.qipan .qizi').off();
					alert('白棋胜利');
				}
				$(`#${wz.x}_${wz.y}`).addClass('bai');
				bai[wz.x+'_'+wz.y]=true;
				delete kongbai[wz.x+'_'+wz.y];
				
				return;
			}
		}else{
			$(this).addClass('bai');
			bai[data.x+'_'+data.y]=true;
			if(panduan(data,bai)>=5){
				$('.qipan .qizi').off();
				alert('白棋胜利');
			}
		}
		flag=!flag;
	})
	function Ai(){
		let yu=-Infinity,yu1=-Infinity;
		let n=null,n1=null;
		for(let i in kongbai){
			let fen=panduan(kongbai[i],hei);
			if(fen>yu){
				yu=fen;
				n=kongbai[i];
			}
		}
		for(let i in kongbai){
			let fen=panduan(kongbai[i],bai);
			if(fen>yu1){
				yu1=fen;
				n1=kongbai[i];
			}
		}
		return (yu>yu1) ? n : n1;
	}
	function panduan(pos,obj){
		let h=1,s=1,zx=1,yx=1;
		let i=pos.x+1,j=pos.y;
		while(obj[i+'_'+j]){
			s++;
			i++;
		}
		i=pos.x-1;
		while(obj[i+'_'+j]){
			s++;
			i--;
		}
		i=pos.x;
		j=pos.y+1;
		while(obj[i+'_'+j]){
			h++;
			j++;
		}
		i=pos.x;
		j=pos.y-1;
		while(obj[i+'_'+j]){
			h++;
			j--;
		}
		i=pos.x+1;
		j=pos.y+1;
		while(obj[i+'_'+j]){
			zx++;
			i++;
			j++;
		}
		i=pos.x-1;
		j=pos.y-1;
		while(obj[i+'_'+j]){
			zx++;
			i--;
			j--;
		}
		i=pos.x+1;
		j=pos.y-1;
		while(obj[i+'_'+j]){
			yx++;
			i++;
			j--;
		}
		i=pos.x-1;
		j=pos.y+1;
		while(obj[i+'_'+j]){
			yx++;
			i--;
			j++;
		}
		return Math.max(h,s,zx,yx);
	}
})