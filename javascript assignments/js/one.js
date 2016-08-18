function Age(age){
	this.age=age;
	this.year;
	
	this.calculateBirthYear=function()
	{
		var d=new Date();
		var yyyy=d.getFullYear();
		year=yyyy-age;
		alert("Birth Year="+year);
	}
}

function calculateYear(){
	var age=document.getElementById("age").value;
	var obj=new Age(age);
	obj.calculateBirthYear();
}