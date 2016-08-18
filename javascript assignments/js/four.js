function getTable(){
	var num=document.getElementById("num").value;
	var i;
	for(i=1;i<=10;i++)
	{
			document.write(num +" * " + i + " = " + num*i +"<br>");
	}
	
	document.write("<br><br><a href='four.html'>Click here for another number</a>");
	
	document.write("<br><br><br><input type='button' value='Close this window' onclick='self.close()'>");
}

