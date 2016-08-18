function checkVowel(){
	var ch=document.getElementById("ch").value;
	if(ch=='a'||ch=='A'||ch=='e'||ch=='E'||ch=='i'||ch=='I'||ch=='o'||ch=='O'||ch=='u'||ch=='U')
	{
		alert(ch+" is a vowel");
	}
	else
	{
		alert(ch+" is not a vowel");
	}
}