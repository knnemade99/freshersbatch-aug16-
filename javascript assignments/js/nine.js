function check(){
	var num1=document.getElementById("num1").value;
	var num2=document.getElementById("num2").value;
	var num3=document.getElementById("num3").value;
	var num4=document.getElementById("num4").value;
	var num5=document.getElementById("num5").value;
	var f=[num1,num2,num3,num4,num5];
var max=f[0];
var min=f[0];
var sum=0;
for(d in f)
{
	if(f[d]>max)
		max=f[d];
	
	if(f[d]<min)
		min=f[d];
	
	sum=parseInt(sum)+parseInt(f[d]);
}
var avg=sum/f.length;
	
document.write("<br>Maximum: "+max);
document.write("<br>Minimum: "+min);
document.write("<br>Sum: "+sum);
document.write("<br>Average: "+avg);
	
}