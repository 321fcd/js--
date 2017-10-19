/*
* @Author: HP
* @Date:   2017-08-29 09:53:33
* @Last Modified by:   HP
* @Last Modified time: 2017-10-06 17:12:49
*/
/* .container:固定宽度
.container-fluid:宽度为100%
.eow：行
.col-：列 
.push:推  left
.pull：拉  right;
*/
/* 手机端《768   col-xs- */
/* @media screen and (max-width: 768px){

}

@media screen and (min-width: 768px) and (max-width: 992px){

}
@media screen and (min-width: 992px) and (max-width: 1200px){

}
@media screen and (min-width: 1200px){

} */
.container{
	height: auto;
	overflow: hidden;
	margin-right: auto;
	margin-left: auto;
	padding-left: 15px;
	padding-right: 15px;
	box-sizing: border-box;
}
.container-fluid{
	height: auto;
	overflow: hidden;
	margin-right: auto;
	margin-left: auto;
	box-sizing: border-box;
}
.row{
	height: auto;
	overflow: hidden;
	margin-right: -15px;
	margin-left: -15px;
	box-sizing: border-box;
}
.row::before,.row::after{
	content: "";
	display: block;
	width: 0;
	height: 0;
	line-height: 0;
	clear: both;
}
[class*="col-"]{
	float: left;
	padding-left: 15px;
	padding-right: 15px;
	box-sizing: border-box;
}
@media screen and (max-width: 640px){
	.col-xs-1{
		width: 8.333333%;
	}
	.col-xs-2{
		width: 16.666666%;
	}
	.col-xs-3{
		width: 25%;
	}
	.col-xs-4{
		width: 33.333333%;
	}
	.col-xs-5{
		width: 41.666666%;
	}
	.col-xs-6{
		width: 50%;
	}
	.col-xs-7{
		width: 58.333333%;
	}
	.col-xs-8{
		width: 66.666666%;
	}
	.col-xs-9{
		width: 75%;
	}
	.col-xs-10{
		width: 83.333333%;
	}
	.col-xs-11{
		width: 91.666666%;
	}
	.col-xs-12{
		width: 100%;
	}
	.col-xs-pull-1{
		position: relative;
		right: 8.333333%;
	}
	.col-xs-pull-2{
		position: relative;
		right: 16.666666%;
	}
	.col-xs-pull-3{
		position: relative;
		right: 25%;
	}
	.col-xs-pull-4{
		position: relative;
		right: 33.333333%;
	}
	.col-xs-pull-5{
		position: relative;
		right: 41.666666%;
	}
	.col-xs-pull-6{
		position: relative;
		right: 50%;
	}
	.col-xs-pull-7{
		position: relative;
		right: 58.333333%;
	}
	.col-xs-pull-8{
		position: relative;
		right: 66.666666%;
	}
	.col-xs-pull-9{
		position: relative;
		right: 75%;
	}
	.col-xs-pull-10{
		position: relative;
		right: 83.333333%;
	}
	.col-xs-pull-11{
		position: relative;
		right: 91.666666%;
	}
	.col-xs-pull-12{
		position: relative;
		right: 100%;
	}
	.col-xs-push-1{
		position: relative;
		left: 8.333333%;
	}
	.col-xs-push-2{
		position: relative;
		left: 16.666666%;
	}
	.col-xs-push-3{
		position: relative;
		left: 25%;
	}
	.col-xs-push-4{
		position: relative;
		left: 33.333333%;
	}
	.col-xs-push-5{
		position: relative;
		left: 41.666666%;
	}
	.col-xs-push-6{
		position: relative;
		left: 50%;
	}
	.col-xs-push-7{
		position: relative;
		left: 58.333333%;
	}
	.col-xs-push-8{
		position: relative;
		left: 66.666666%;
	}
	.col-xs-push-9{
		position: relative;
		left: 75%;
	}
	.col-xs-push-10{
		position: relative;
		left: 83.333333%;
	}
	.col-xs-push-11{
		position: relative;
		left: 91.666666%;
	}
	.col-xs-push-12{
		position: relative;
		left: 100%;
	}
	.hidden-xs{
		display: none;
	}
}
@media screen and (min-width: 640px) and (max-width: 800px){
	.container{
		width: 100%;
	}
	.col-sm-1{
		width: 8.333333%;
	}
	.col-sm-2{
		width: 16.666666%;
	}
	.col-sm-3{
		width: 25%;
	}
	.col-sm-4{
		width: 33.333333%;
	}
	.col-sm-5{
		width: 41.666666%;
	}
	.col-sm-6{
		width: 50%;
	}
	.col-sm-7{
		width: 58.333333%;
	}
	.col-sm-8{
		width: 66.666666%;
	}
	.col-sm-9{
		width: 75%;
	}
	.col-sm-10{
		width: 83.333333%;
	}
	.col-sm-11{
		width: 91.666666%;
	}
	.col-sm-12{
		width: 100%;
	}
	.col-sm-pull-1{
		position: relative;
		right: 8.333333%;
	}
	.col-sm-pull-2{
		position: relative;
		right: 16.666666%;
	}
	.col-sm-pull-3{
		position: relative;
		right: 25%;
	}
	.col-sm-pull-4{
		position: relative;
		right: 33.333333%;
	}
	.col-sm-pull-5{
		position: relative;
		right: 41.666666%;
	}
	.col-sm-pull-6{
		position: relative;
		right: 50%;
	}
	.col-sm-pull-7{
		position: relative;
		right: 58.333333%;
	}
	.col-sm-pull-8{
		position: relative;
		right: 66.666666%;
	}
	.col-sm-pull-9{
		position: relative;
		right: 75%;
	}
	.col-sm-pull-10{
		position: relative;
		right: 83.333333%;
	}
	.col-sm-pull-11{
		position: relative;
		right: 91.666666%;
	}
	.col-sm-pull-12{
		position: relative;
		right: 100%;
	}
	.col-sm-push-1{
		position: relative;
		left: 8.333333%;
	}
	.col-sm-push-2{
		position: relative;
		left: 16.666666%;
	}
	.col-sm-push-3{
		position: relative;
		left: 25%;
	}
	.col-sm-push-4{
		position: relative;
		left: 33.333333%;
	}
	.col-sm-push-5{
		position: relative;
		left: 41.666666%;
	}
	.col-sm-push-6{
		position: relative;
		left: 50%;
	}
	.col-sm-push-7{
		position: relative;
		left: 58.333333%;
	}
	.col-sm-push-8{
		position: relative;
		left: 66.666666%;
	}
	.col-sm-push-9{
		position: relative;
		left: 75%;
	}
	.col-sm-push-10{
		position: relative;
		left: 83.333333%;
	}
	.col-sm-push-11{
		position: relative;
		left: 91.666666%;
	}
	.col-sm-push-12{
		position: relative;
		left: 100%;
	}
	.hidden-sm{
		display: none;
	}
}
@media screen and (min-width: 800px) and (max-width: 1200px){
	.container{
		width: 100%;
	}
	.col-md-1{
		width: 8.333333%;
	}
	.col-md-2{
		width: 16.666666%;
	}
	.col-md-3{
		width: 25%;
	}
	.col-md-4{
		width: 33.333333%;
	}
	.col-md-5{
		width: 41.666666%;
	}
	.col-md-6{
		width: 50%;
	}
	.col-md-7{
		width: 58.333333%;
	}
	.col-md-8{
		width: 66.666666%;
	}
	.col-md-9{
		width: 75%;
	}
	.col-md-10{
		width: 83.333333%;
	}
	.col-md-11{
		width: 91.666666%;
	}
	.col-md-12{
		width: 100%;
	}
	.col-md-pull-1{
		position: relative;
		right: 8.333333%;
	}
	.col-md-pull-2{
		position: relative;
		right: 16.666666%;
	}
	.col-md-pull-3{
		position: relative;
		right: 25%;
	}
	.col-md-pull-4{
		position: relative;
		right: 33.333333%;
	}
	.col-md-pull-5{
		position: relative;
		right: 41.666666%;
	}
	.col-md-pull-6{
		position: relative;
		right: 50%;
	}
	.col-md-pull-7{
		position: relative;
		right: 58.333333%;
	}
	.col-md-pull-8{
		position: relative;
		right: 66.666666%;
	}
	.col-md-pull-9{
		position: relative;
		right: 75%;
	}
	.col-md-pull-10{
		position: relative;
		right: 83.333333%;
	}
	.col-md-pull-11{
		position: relative;
		right: 91.666666%;
	}
	.col-md-pull-12{
		position: relative;
		right: 100%;
	}
	.col-md-push-1{
		position: relative;
		left: 8.333333%;
	}
	.col-md-push-2{
		position: relative;
		left: 16.666666%;
	}
	.col-md-push-3{
		position: relative;
		left: 25%;
	}
	.col-md-push-4{
		position: relative;
		left: 33.333333%;
	}
	.col-md-push-5{
		position: relative;
		left: 41.666666%;
	}
	.col-md-push-6{
		position: relative;
		left: 50%;
	}
	.col-md-push-7{
		position: relative;
		left: 58.333333%;
	}
	.col-md-push-8{
		position: relative;
		left: 66.666666%;
	}
	.col-md-push-9{
		position: relative;
		left: 75%;
	}
	.col-md-push-10{
		position: relative;
		left: 83.333333%;
	}
	.col-md-push-11{
		position: relative;
		left: 91.666666%;
	}
	.col-md-push-12{
		position: relative;
		left: 100%;
	}
	.hidden-md{
		display: none;
	}
}
@media screen and (min-width: 1200px){
	.container{
		width: 1170px;
	}
	.col-lg-1{
		width: 8.333333%;
	}
	.col-lg-2{
		width: 16.666666%;
	}
	.col-lg-3{
		width: 25%;
	}
	.col-lg-4{
		width: 33.333333%;
	}
	.col-lg-5{
		width: 41.666666%;
	}
	.col-lg-6{
		width: 50%;
	}
	.col-lg-7{
		width: 58.333333%;
	}
	.col-lg-8{
		width: 66.666666%;
	}
	.col-lg-9{
		width: 75%;
	}
	.col-lg-10{
		width: 83.333333%;
	}
	.col-lg-11{
		width: 91.666666%;
	}
	.col-lg-12{
		width: 100%;
	}
	.col-lg-pull-1{
		position: relative;
		right: 8.333333%;
	}
	.col-lg-pull-2{
		position: relative;
		right: 16.666666%;
	}
	.col-lg-pull-3{
		position: relative;
		right: 25%;
	}
	.col-lg-pull-4{
		position: relative;
		right: 33.333333%;
	}
	.col-lg-pull-5{
		position: relative;
		right: 41.666666%;
	}
	.col-lg-pull-6{
		position: relative;
		right: 50%;
	}
	.col-lg-pull-7{
		position: relative;
		right: 58.333333%;
	}
	.col-lg-pull-8{
		position: relative;
		right: 66.666666%;
	}
	.col-lg-pull-9{
		position: relative;
		right: 75%;
	}
	.col-lg-pull-10{
		position: relative;
		right: 83.333333%;
	}
	.col-lg-pull-11{
		position: relative;
		right: 91.666666%;
	}
	.col-lg-pull-12{
		position: relative;
		right: 100%;
	}
	.col-lg-push-1{
		position: relative;
		left: 8.333333%;
	}
	.col-lg-push-2{
		position: relative;
		left: 16.666666%;
	}
	.col-lg-push-3{
		position: relative;
		left: 25%;
	}
	.col-lg-push-4{
		position: relative;
		left: 33.333333%;
	}
	.col-lg-push-5{
		position: relative;
		left: 41.666666%;
	}
	.col-lg-push-6{
		position: relative;
		left: 50%;
	}
	.col-lg-push-7{
		position: relative;
		left: 58.333333%;
	}
	.col-lg-push-8{
		position: relative;
		left: 66.666666%;
	}
	.col-lg-push-9{
		position: relative;
		left: 75%;
	}
	.col-lg-push-10{
		position: relative;
		left: 83.333333%;
	}
	.col-lg-push-11{
		position: relative;
		left: 91.666666%;
	}
	.col-lg-push-12{
		position: relative;
		left: 100%;
	}
	.hidden-lg{
		display: none;
	}
}