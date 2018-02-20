function connect(el_id,startX,startY,finishX,finishY,connectionType,comm,text) {
	curObj=document.getElementById(el_id)
	if (typeof curObj !== 'undefined' && curObj !== null) {
		curObj.setAttribute("d","M " + startX.toString() + " " + startY.toString() + " L " + finishX.toString() + " " + finishY.toString());
		switch(connectionType){
			case 1:
				curObj.setAttribute("stroke-dasharray","100% 0");
				curObj.setAttribute("z-index","2");
				//curObj.setAttribute("stroke-width","1.25");
				//curObj.setAttribute("stroke","black");
				break;
			case 2:
				curObj.setAttribute("stroke-dasharray","1 2");
				curObj.setAttribute("z-index","1");
				//curObj.setAttribute("stroke-width","1.25");
				//curObj.setAttribute("stroke","black");
				break;
			default:
				curObj.setAttribute("stroke-dasharray","100% 0");
		}

	}
	curObj=document.getElementById(comm);
	if (typeof curObj !== 'undefined' && curObj !== null) {
		curObj.setAttribute("style","left:"+Math.floor(startX).toString()+"px;top:"+Math.floor(startY).toString()+"px;");
		curObj.innerHTML=text.toString();
	}
}

function rotate(arr1, rotateX, rotateY, rotateZ){
	//alert(arr1);
    arr = $.extend(true, [], arr1);
    rotateXA(arr, rotateX);
    rotateYA(arr, rotateY);
    rotateZA(arr, rotateZ);
 //    for(i=0;i<8;i++){
 //        //Для 3 осей.
 //        // arr[i][0]=c*e*arr[i][0]-(b*e*d+a*f)*arr[i][1]+(a*d*e-b*f)*arr[i][2];
 //        // arr[i][1]=c*f*arr[i][0]+(a*e-b*d*f)*arr[i][1]+(a*d*f+b*e)*arr[i][2];
 //        // arr[i][2]=-d*arr[i][0]-c*b*arr[i][1]+c*a*arr[i][2];
 //  		//Для 2 осей.
 //  		arr[i][0]=c*arr[i][0]-b*d*arr[i][1]+a*d*arr[i][2];
 //        arr[i][1]=a*arr[i][1]+b*arr[i][2];
 //        arr[i][2]=-d*arr[i][0]-c*b*arr[i][1]+c*a*arr[i][2];
 //    }
 //    min=10000;
 //    //alert(min);
	// for (var j=0;j<8;j++){
 //        if (arr[j][2]<min){
 //            min=arr[j][2];
            
 //            //alert(min);
 //        }
 //       //console.log("z"+j+"="+arr[j][2]);
 //    //alert(min);
 //    }
}
function rotateXA(arr, angle) {
	var arr1 = $.extend(true, [], arr);
	for(var i=0;i<arr1.length;i++){
	
		arr[i][1]=arr1[i][1]*Math.cos(Math.PI*angle/180)+arr1[i][2]*Math.sin(Math.PI*angle/180);
		arr[i][2]=-arr1[i][1]*Math.sin(Math.PI*angle/180)+arr1[i][2]*Math.cos(Math.PI*angle/180);
	}
}
function rotateYA(arr1, angle) {
	var arr1 = $.extend(true, [], arr);
	for(var i=0;i<arr1.length;i++){
		arr[i][0]=arr1[i][0]*Math.cos(Math.PI*angle/180)+arr1[i][2]*Math.sin(Math.PI*angle/180);
		arr[i][2]=-arr1[i][0]*Math.sin(Math.PI*angle/180)+arr1[i][2]*Math.cos(Math.PI*angle/180);
	}
}
function rotateZA(arr1, angle) {
	var arr1 = $.extend(true, [], arr);	
	for(var i=0;i<arr1.length;i++){
		arr[i][0]=arr1[i][0]*Math.cos(Math.PI*angle/180)-arr1[i][1]*Math.sin(Math.PI*angle/180);
		arr[i][1]=arr1[i][0]*Math.sin(Math.PI*angle/180)+arr1[i][1]*Math.cos(Math.PI*angle/180);
	}
}


function drawCube(arr) {
	var xs;
	var ys;
	var xf;
	var yf;
	var zs;
	var zf;
	min=Infinity;

	for (var i = 0; i < arr.length; i++) {
		if(min>arr[i][2]){
			min=arr[i][2];
		}
	}

	for (var i = 0; i < arr.length; i++) {
		xs = arr[i][0]+m;
		ys = arr[i][1]+n;
		zs = arr[i][2];
		if (i != 3 && i != 7) {
			xf = arr[i+1][0]+m;
			yf = arr[i+1][1]+n;
			zf = arr[i+1][2];
		} else {
			xf = arr[i-3][0]+m;
			yf = arr[i-3][1]+n;
			zf = arr[i-3][2];
		}

		if(zs>min&&zf>min){
			connect("a"+i,xs,ys,xf,yf,1);
		} else {
			connect("a"+i,xs,ys,xf,yf,2);
		}
	}
	for (var i = 0; i < 4; i++) {
		xs = arr[i][0]+m;
		ys = arr[i][1]+n;
		zs = arr[i][2];
		xf = arr[i+4][0]+m;
		yf = arr[i+4][1]+n;
		zf = arr[i+4][2];
		if(zs>min&&zf>min){
			connect("a"+(i+8),xs,ys,xf,yf,1);
		} else {
			connect("a"+(i+8),xs,ys,xf,yf,2);
		}
	}
}









var arr=[];
for (var i = 0; i < 8; i++) {
	arr[i]=[];
}
var action=true;
var test;
var m=200;
var n=200;
var k=0;
var l=100;
var rand1=Math.floor(Math.random()*2000+2000);
var rand2=Math.floor(Math.random()*6);
var rx=15;
var ry=15;
var rz=15;
var cube=[];
for (var i = 0; i < 8; i++) {
	cube[i]=[];
}
cube[0][0]=-0.5*l;
cube[0][1]=-0.5*l;
cube[0][2]=0.5*l;

cube[1][0]=-0.5*l;
cube[1][1]=0.5*l;
cube[1][2]=0.5*l;

cube[2][0]=0.5*l;
cube[2][1]=0.5*l;
cube[2][2]=0.5*l;

cube[3][0]=0.5*l;
cube[3][1]=-0.5*l;
cube[3][2]=0.5*l;

cube[4][0]=-0.5*l;
cube[4][1]=-0.5*l;
cube[4][2]=-0.5*l;

cube[5][0]=-0.5*l;
cube[5][1]=0.5*l;
cube[5][2]=-0.5*l;

cube[6][0]=0.5*l;
cube[6][1]=0.5*l;
cube[6][2]=-0.5*l;

cube[7][0]=0.5*l;
cube[7][1]=-0.5*l;
cube[7][2]=-0.5*l;

var min;
// var rotateX=0;
// var rotateY=0;
// var rotateZ=0;
// a=Math.cos(Math.PI*rotateX/180);
// b=Math.sin(Math.PI*rotateX/180);
// c=Math.cos(Math.PI*rotateY/180);
// d=Math.sin(Math.PI*rotateY/180);
// e=Math.cos(Math.PI*rotateZ/180);
// f=Math.sin(Math.PI*rotateZ/180);
// // alert(a);
// // alert(b);
// // alert(c);
// // alert(d);
// // alert(e);
// // alert(f);
// i=0;
// alert(arr[i][0]);
// alert(c*e*cube[i][0]+(b*d-c*f)*cube[i][1]+d*cube[i][2]);


// 	for(o=0;o<4;o++){
//         if (arr[o][2]>min&&arr[o+4][2]>min){
//             connect("a1"+o,arr[o][0]+m,arr[o][1]+n,arr[o+4][0]+m,arr[o+4][1]+n,1,"b1"+o,o);
//         } else {
//         	connect("a1"+o,arr[o][0]+m,arr[o][1]+n,arr[o+4][0]+m,arr[o+4][1]+n,2,"b1"+o,o);
//         }
// 	}
// 	for(t=0;t<3;t++){
//         if (arr[t][2]>min&&arr[t+1][2]>min){
//             connect("a2"+t,arr[t][0]+m,arr[t][1]+n,arr[t+1][0]+m,arr[t+1][1]+n,1);
//         } else {
//             connect("a2"+t,arr[t][0]+m,arr[t][1]+n,arr[t+1][0]+m,arr[t+1][1]+n,2);
//         }
//         if (arr[t+4][2]>min&&arr[t+5][2]>min){
//             connect("a3"+t,arr[t+4][0]+m,arr[t+4][1]+n,arr[t+5][0]+m,arr[t+5][1]+n,1);
//         } else {
//             connect("a3"+t,arr[t+4][0]+m,arr[t+4][1]+n,arr[t+5][0]+m,arr[t+5][1]+n,2);
//         }
//     }
// 	if (arr[3][2]>min&&arr[0][2]>min){
// 	    connect("a41",arr[3][0]+m,arr[3][1]+n,arr[0][0]+m,arr[0][1]+n,1);
// 	} else {
// 		connect("a41",arr[3][0]+m,arr[3][1]+n,arr[0][0]+m,arr[0][1]+n,2);
// 	}
// 	if (arr[7][2]>min&&arr[4][2]>min){
// 	    connect("a42",arr[7][0]+m,arr[7][1]+n,arr[4][0]+m,arr[4][1]+n,1);
// 	} else {
// 		connect("a42",arr[7][0]+m,arr[7][1]+n,arr[4][0]+m,arr[4][1]+n,1);
// 	}

//rotate(cube,rx,ry,rz);
//drawCube(arr);


function setRotation(){
	if (typeof timer1 !== 'undefined') {
		clearInterval(timer1);
	}
	rotation=randomize(6,0);
	timer1=setInterval(function(){
		rotate(cube,rx,ry,rz);
		drawCube(arr);
		switch(rotation){
			case 0:
				rx=rx+1;
				break;
			case 1:
				rx=rx-1;
				break;
			case 2:
				ry=ry+1;
				break;
			case 3:
				ry=ry-1;
				break;
			case 4:
				rz=rz+1;
				break;
			case 5:
				rz=rz-1;
				break;
			default:
				rx=rx+1;
		}
		$("#rx").val(rx);
		$('#ry').val(ry);
		$('#rz').val(rz);
	},50)
	//alert("t1 set")
}
function go() {
	action=true;
	setRotation();
	//clearInterval(timer2);
	timer2=setInterval(function(){
		//alert("t2 set")
		setRotation()
	},3050)
	
}
function randomize(max,min){
	return Math.floor(Math.random()*(max-min)+min);
	
}

// timer2=setInterval(function() {
// 	if (typeof timer1 !== 'undefined') {
//     	clearInterval(timer1);
// 	}
// 	test=rand2;
// 	for(var i;test==rand2;i++){
// 		rand2=Math.floor(Math.random()*6);
// 	}
//   	rand1=Math.floor(Math.random()*2000+2000);
// 	//alert(rx+" "+ry+" "+rz);
// 	go();
// }, 3050);
function stop() {
	if (typeof timer1 !== 'undefined') {
		clearInterval(timer1);
	}
	if (typeof timer2 !== 'undefined') {
		clearInterval(timer2);
	}
	action=false;
}
//document.getElementById('a1').setAttribute("d","M 200,100 L 100,600"); stroke-dasharray="1"