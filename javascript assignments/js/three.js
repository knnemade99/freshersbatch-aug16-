function divide()
{
	var num1=document.getElementById("num1").value;
	var num2=document.getElementById("num2").value;
	
	if(num2==0)
	{
		alert("Division by 0 not possible!");
	}
	else
	{
		document.write("Division= "+ num1/num2);
	}
}