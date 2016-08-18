function check()
{
	var id=document.getElementById("username").value;
	var pass=document.getElementById("pass").value;
	var count=document.getElementById("attempt").value;
	if(id=='Kunal'&&pass=='123')
	{
		document.write("Logged in successfully");
	}
	else
	{
		count++;
		document.getElementById("temp").innerHTML="<input type='hidden' value='"+count+"' id='attempt'>";
	}
	
	if(count==3)
	{
		document.write("Error");
	}
}