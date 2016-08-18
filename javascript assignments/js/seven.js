function getFact()
{
	var num=document.getElementById("num").value;
	
	if(num!=0)
	{
	var prod=1;
	for(var f=1;f<=num;f++)
	{
		prod=prod*f;
	}
	
	alert("Factorial of "+num+" is= "+prod);
	}
	else
	{
		alert("Factorial of "+num+" is= 1");	
	}
}