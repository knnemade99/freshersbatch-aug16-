function checkEmail()
{
	var email=document.getElementById("email").value;
	var at=0;
	var dot=0;
	var pos=0;
	
	for(var i=0;i<=email.length;i++)
	{
		if(email[i]=='@')
		{
			at++;
			pos=i;
		}
		
		if(i>pos+1)
		{
			if(email[i]=='.')
			dot++;
		}
	}
	
	if(at==1&&dot==1&&email.charAt(0)!='@'&&email.charAt(0)!='.')
	{
		alert("Valid Email Address");
	}

	else
	{
		alert("Invalid Email Address");
	}
}