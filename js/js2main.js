var arr=new Array();
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
 function sort()
 {
   var i;var j;
   var temp;
  
		for(i=0;i<arr.length;i++)
		{
          document.getElementById("demo").innerHTML+=arr[i]+"<br>";  
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
          document.getElementById("sorted").innerHTML+=arr[i]+"<br>";  
		}
 }
function Isort()
{
	 var i;
  
		for(i=0;i<arr.length;i++)
		{
          document.getElementById("demo").innerHTML+=arr[i]+"<br>";  
		}
		
		
   for(i=1;i<arr.length;i++)
  {
      var temp=arr[i];
      var ptr=i-1;
      while(temp<arr[ptr]&&ptr>=0)
      {
          arr[ptr+1]=arr[ptr];
          ptr=ptr-1;
      }
        arr[ptr+1]=temp;
  }

		
		for(i=0;i<arr.length;i++)
		{
          document.getElementById("sorted").innerHTML+=arr[i]+"<br>";  
		}
 }


