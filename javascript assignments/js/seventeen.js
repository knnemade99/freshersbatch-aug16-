function EmployeeList(id,name,salary,dept_id)
{
	
this.id=id;
this.name=name;
this.salary=salary;
this.dept_id=dept_id;


	this.sortByEmpId=function(k)
	{
		
		k.sort(function(a, b){return a.id-b.id});
		
		document.write("Id: "+k[0].id+" Name: "+k[0].name+" Salary: "+k[0].salary+"Dept_Id: "+k[0].dept_id);
		document.write("<br>Id: "+k[1].id+" Name: "+k[1].name+" Salary: "+k[1].salary+"Dept_Id: "+k[1].dept_id);
		document.write("<br>Id: "+k[2].id+" Name: "+k[2].name+" Salary: "+k[2].salary+"Dept_Id: "+k[2].dept_id);
		document.write("<br>Id: "+k[3].id+" Name: "+k[3].name+" Salary: "+k[3].salary+"Dept_Id: "+k[3].dept_id);
		
		
		
		
	}
	
	this.sortByDeptId=function(k)
	{
		k.sort(function(a, b){return a.dept_id-b.dept_id});
		
		document.write("Id: "+k[0].id+" Name: "+k[0].name+" Salary: "+k[0].salary+"Dept_Id: "+k[0].dept_id);
		document.write("<br>Id: "+k[1].id+" Name: "+k[1].name+" Salary: "+k[1].salary+"Dept_Id: "+k[1].dept_id);
		document.write("<br>Id: "+k[2].id+" Name: "+k[2].name+" Salary: "+k[2].salary+"Dept_Id: "+k[2].dept_id);
		document.write("<br>Id: "+k[3].id+" Name: "+k[3].name+" Salary: "+k[3].salary+"Dept_Id: "+k[3].dept_id);
	}
	
	this.sortBySalary=function(k)
	{
			k.sort(function(a, b){return a.salary-b.salary});
		
		document.write("Id: "+k[0].id+" Name: "+k[0].name+" Salary: "+k[0].salary+"Dept_Id: "+k[0].dept_id);
		document.write("<br>Id: "+k[1].id+" Name: "+k[1].name+" Salary: "+k[1].salary+"Dept_Id: "+k[1].dept_id);
		document.write("<br>Id: "+k[2].id+" Name: "+k[2].name+" Salary: "+k[2].salary+"Dept_Id: "+k[2].dept_id);
		document.write("<br>Id: "+k[3].id+" Name: "+k[3].name+" Salary: "+k[3].salary+"Dept_Id: "+k[3].dept_id);
	}
}

function sortEmployee(){
	
	
	var e1_id=document.getElementById("e1_id").value;
	var e1_name=document.getElementById("e1_name").value;
	var e1_salary=document.getElementById("e1_salary").value;
	var e1_dept_id=document.getElementById("e1_dept_id").value;
	

	var e2_id=document.getElementById("e2_id").value;
	var e2_name=document.getElementById("e2_name").value;
	var e2_salary=document.getElementById("e2_salary").value;
	var e2_dept_id=document.getElementById("e2_dept_id").value;
	

	var e3_id=document.getElementById("e3_id").value;
	var e3_name=document.getElementById("e3_name").value;
	var e3_salary=document.getElementById("e3_salary").value;
	var e3_dept_id=document.getElementById("e3_dept_id").value;
	

	var e4_id=document.getElementById("e4_id").value;
	var e4_name=document.getElementById("e4_name").value;
	var e4_salary=document.getElementById("e4_salary").value;
	var e4_dept_id=document.getElementById("e4_dept_id").value;
	
	
	var obj1=new EmployeeList(e1_id,e1_name,e1_salary,e1_dept_id);
	var obj2=new EmployeeList(e2_id,e2_name,e2_salary,e2_dept_id);
	var obj3=new EmployeeList(e3_id,e3_name,e3_salary,e3_dept_id);
	var obj4=new EmployeeList(e4_id,e4_name,e4_salary,e4_dept_id);
	var obj=[obj1,obj2,obj3,obj4];
	
	
	var operation=document.getElementById("operation").value;
	
	if(operation=='emp_id')
		{

			obj1.sortByEmpId(obj);
			
		}
	else if(operation=="dept_id")
		{
			obj1.sortByDeptId(obj);
		}
	else
		{
			obj1.sortBySalary(obj);
		}
}

