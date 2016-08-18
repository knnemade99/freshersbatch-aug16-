function BankAccount(accno,accname,accbal){
	this.accno=accno;
	this.accname=accname;
	this.accbal=accbal;
	
	this.withdraw=function(amount)
	{
		if(amount<0||accbal-amount<0)
		{
			alert("operation can't done");
		}
		else
		{
		accbal=accbal-amount;
		document.getElementById("amt").innerHTML="<input type='text' id='amount'>";
		document.getElementById("balance").innerHTML="Account Balance: <input type='text' value='"+accbal+"' id='accbal'><br>";
		alert(amount+" withdrawn");
		}
	}
	
	this.deposit=function(amount)
	{
		if(amount<0)
		{
			alert("operation can't done");
		}
		else
		{
		accbal=parseInt(accbal)+parseInt(amount);
		document.getElementById("amt").innerHTML="<input type='text' id='amount'>";
		document.getElementById("balance").innerHTML="Account Balance: <input type='text' value='"+accbal+"' id='accbal'><br>";
		alert(amount+" deposited");
		}
	}
	

}

function accountManage()
{
	var accno=document.getElementById("accno").value;
	var accname=document.getElementById("accname").value;
	var accbal=document.getElementById("accbal").value;
	var amount=document.getElementById("amount").value;
	var obj=new BankAccount(accno,accname,accbal);
	var operation=document.getElementById("operation").value;
	
	//document.write(accno+accname+bal+amount+operation);
	if(operation=="Withdraw")
	{
		obj.withdraw(amount);
	}
	else
	{
		obj.deposit(amount);
	}
}