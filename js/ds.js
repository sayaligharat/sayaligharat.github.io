var arr=new Array();
var arr2=new Array();
function func(e)
{  
		if(e.keyCode==13)		// keycode==13 is for accepting enter after each digit
		{   
		   
			var data=document.getElementById("ds");
			arr.push(data.value);
			data.value="";
			data.focus();
		
		}
			
}
function func2(e)
{  
		if(e.keyCode==13)		// keycode==13 is for accepting enter after each digit
		{   
		   
			var data2=document.getElementById("ds2");
			arr2.push(data2.value);
			data2.value="";
			data2.focus();
		
		}
			
}

 function sort()
 {
   var i;var j;
   var temp;
  
  
  var assoc = [];
   for(i=0; i<arr.length; i++)
	   {
           assoc[arr[i]] = arr2[i];
        }
  
		for(i=0;i<arr.length;i++)
		{
          document.getElementById("demo").innerHTML+=arr[i]+"<br>";  
		}
		for(i=0;i<arr2.length;i++)
		{
          document.getElementById("demo2").innerHTML+=arr2[i]+"<br>";  
		}
		
		
        for (i = 0; i < arr.length; i++) 
        {
            for (j = i + 1; j < arr.length; j++) 
            {
                if (arr[i]>arr[j]) 
                {
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
		
		for(i=0;i<arr.length;i++)
		{  
	      document.getElementById("sorted").innerHTML+= arr[i]+" &#160	&#160";  
          document.getElementById("sorted").innerHTML+= assoc[arr[i]]+" Rs<br><br>";  
          
		}
 }
 
 
 function Isort()
 {
   var i;var j;
   var temp;
  
  
  var assoc = [];
   for(i=0; i<arr2.length; i++)
	    {
           assoc[arr2[i]] = arr[i];
        }
  
		for(i=0;i<arr.length;i++)
		{
          document.getElementById("demo").innerHTML+=arr[i]+"<br>";  
		}
		for(i=0;i<arr2.length;i++)
		{
          document.getElementById("demo2").innerHTML+=arr2[i]+"<br>";  
		}
		
		
        for (i = 0; i < arr2.length; i++) 
        {
            for (j = i + 1; j < arr2.length; j++) 
            {
                if (arr2[i]>arr2[j]) 
                {
                    temp = arr2[i];
                    arr2[i] = arr2[j];
                    arr2[j] = temp;
                }
            }
        }
		
		for(i=0;i<arr2.length;i++)
		{  
	      document.getElementById("sorted").innerHTML+= arr2[i]+" &#160	&#160";  
          document.getElementById("sorted").innerHTML+= assoc[arr2[i]]+" Rs<br><br>";  
          
		}
 }


