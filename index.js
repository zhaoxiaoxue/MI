window.onload=function(){
	var image=document.getElementsByClassName('image');
	var juli=document.getElementsByClassName('juli');
	var left=document.getElementById('left');
	var right=document.getElementById('right');
	

	var timeId,
	index=0,
	el=image[0],
	el1=juli[0],
	time=1000,
	el3=el4=0,
	kai=true,
	kaiguan=true;

	fn=function(){

		index++;		
		if(index==image.length){index=0;}

		if(el1==el3&&kai==true){
			el1.style.background="none";
		}else{
			el1.style.background="#b0b0b0";
		}
		juli[index].style.background="none";				
		el1=juli[index];
		
		el.style.display='none';
		image[index].style.display='block';
		el=image[index];
		
	};

	right.onclick=function(){

		index++;		
		if(index==image.length){index=0;}
		el4=juli[index];
		el1.style.background="#b0b0b0";
		juli[index].style.background="none";
		el1=juli[index];		

		el.style.display='none';
		image[index].style.display='block';
		el=image[index];

		clearInterval(timeId);
		kaiguan=false;
	};

	left.onclick=function(){
		
		index--;		
		if(index<0){index=image.length-1;}
		el4=juli[index];
		
		el1.style.background="#b0b0b0";
		juli[index].style.background="none";
		el1=juli[index];


		el.style.display='none';
		image[index].style.display='block';
		el=image[index];
		
		clearInterval(timeId);
		kaiguan=false;
	};

	timeId=setInterval(fn,time);

	for(var i=0;i<juli.length;i++){
		juli[i].index=i;
		juli[i].onclick=function(){
			el4=juli[this.index];
			el.style.display='none';
			image[this.index].style.display='block';
			el=image[this.index];

			el1.style.background="#b0b0b0";
			juli[this.index].style.background="none";
			el1=juli[this.index];

			clearInterval(timeId);
			kaiguan=false;

		}
	};

	for(var j=0;j<image.length;j++){
		image[j].index=j;
		image[j].onmouseover=function(){
			clearInterval(timeId);			
		}		
		image[j].onmouseout=function(){
			if(kaiguan){
				index=this.index;
				timeId=setInterval(fn,time);
			}else{
				return;
			}						
		}				
	};

	for(var m=0;m<juli.length;m++){
		juli[m].index=m;
		juli[m].onmouseover=function(){
			kai=true;
			el3=juli[this.index];	
			this.style.background='none';										
		}
		juli[m].onmouseout=function(){	
			kai=false;
			if(juli[this.index]==el4){
				this.style.background='none';
			}else{		
				this.style.background='#b0b0b0';
			}
																
		}
	};
	document.onmousedown=function(e){
		e.preventDefault();
	}

};