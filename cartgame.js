var pos=0;
var x=10;
var carPos=-15;
var arrowPos=5;
var score=0;
var posA=1400;
var t1=300;
var t2=1000;
var tree1=document.getElementById("tree1");
var tree2=document.getElementById("tree2");
var car=document.getElementById("car");
var arrow=document.getElementById("arrow");
var body=document.getElementsByTagName("body");
var sky=document.getElementById("sky")
var check=confirm("start the game");
if(check){
var timers=setInterval(loop,10);
         }


function pause()
{
	alert("game paused : continue?");
}	



window.addEventListener("keydown",move,false);
function move(event)
{
	
    if(event.which=="40")
	{
		if(carPos==-15)
		carPos=20;
	    else
		carPos=50;			
	}	
    if(event.which=="38")
	{
		if(carPos==50)
		carPos=20;
        else
		carPos=-15;		
	}
	car.style.top=carPos+"%";
}      

function loop()
{   
	
	
	/*if(score==500)
	{  
        
		var surprise=document.getElementById("surprise");
		 surprise.style.display="inline";
		clearInterval(timers);
	}	*/
	if(score%1000==0)
	{
		sky.style.backgroundColor="#87CEEB";
		sky.style.transition="background-color 2s";
	}

	score++;
    document.getElementById("label").innerHTML="score : "+score+" ";

    if(score%500==0)
	{
		sky.style.backgroundColor="black";
		sky.style.transition="background-color 2s";
	}


    posA-=10;
    arrow.style.left=posA+"px";
	if(posA<=-200)
	{
	 var a=Math.floor((Math.random()*3));
	    if(a==0)
	    {
			arrowPos=2;
	    }
        else if(a==1)
	    {
			arrowPos=33;
		}
		else
		{
			arrowPos=70;
		}	
	 arrow.style.top=arrowPos+"%";
	 posA=1400;
	}/*code for arrow ends*/

    
	pos=10;/*car perpetually moves*/
	 
    /*if(pos==-4)
 	car.style.transform='rotateY(180deg)';
    else if(pos==4)
	car.style.transform='none';   code to rotate the car*/	
	
	if(t1<-200)
	{
		t1=1400;
	}
	if(t1>1400)
	{
		t1=200;
	}
	if(t2<-200)
	{
		t2=1400;
	}
	if(t2>1400)
	{
		t2=200;
	}
	
	if((x<0&&pos==-10)||(x>500&&pos==10))
	{
		t1=t1-pos;
		t2=t2-pos;
		tree1.style.left=t1+"px";
		tree2.style.left=t2+"px";
	}
	else
	{
		x=x+pos;
	    car.style.left=x+"px";
	}	
				
if((posA-x)<=180&&(posA-x)>=0&&((carPos==-15&&arrowPos==2)||(carPos==20&&arrowPos==33)||(carPos==50&&arrowPos==70)))
	{
		alert("LOLLLL you scored : "+ score+" before you got stabbed by an arrow");
		score=0;
		arrowPos=1400;
	}	/*in case of collision*/
	
	
	
    /*if(y<-200)
	{
		y=1400;
	}
	else if(y>1400)
	{
		y=-200;
	}	
	if(x<0&&pos==-4)
	{
		y=y-pos;
		tree1.style.left=y+"px";
		tree2.style.left=(y+1000)+"px";
    
	}
	else if(x<700||pos==-4)
	{
		
	}	
	else
	{
		y=y-pos;
		tree1.style.left=y+"px";
		tree2.style.left=(y+1000)+"px";
	}*/	
}

/*function mover()
{
	pos=2;
}*/

	