function getPrimeNumbers(){
	var num1=document.getElementById("num1").value;
	var num2=document.getElementById("num2").value;
	var count=0;
	for(var f=num1;f<=num2;f++)
	{
		count=0;
		for(var i=1;i<=f;i++)
		{
			if(f%i==0)
				count++;
		}
		if(count==2)
		{
			document.write("<br>"+f);
		}
	}
}