function sort(){
	var num1=document.getElementById("num1").value;
	var num2=document.getElementById("num2").value;
	var num3=document.getElementById("num3").value;
	var num4=document.getElementById("num4").value;
	var num5=document.getElementById("num5").value;
	var order=document.getElementById("sort").value;
	var f=[num1,num2,num3,num4,num5];
	
	if(order=='Ascending')
	{
		
		f.sort(function(a, b){return a-b});
	}
	
	else
	{
		f.sort(function(a, b){return b-a});
	}
	
	document.write(f);
}