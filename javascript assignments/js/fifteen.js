function removeSpace(){
	var str=document.getElementById("txt").value;
	var f=str.trim();
	var trimstr="";
	
	for(var i=0;i<=str.length-1;i++)
	{
		var d=f.charAt(i);
		var e=f.charAt(i+1);
		if(d==' '&&e==' ')
		{
			trimstr=trimstr;
		}
		else
		{
		trimstr=trimstr+str.charAt(i);
		}
		
	}
	
	document.write(trimstr);
	
}