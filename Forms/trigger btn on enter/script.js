let txt=document.getElementById("txt");
txt.addEventListener("keydown",function(event)
{
   if(event.code=="Enter")
   {
     event.preventDefault();
     document.getElementById("btn").click();
   }

  else
   {
      console.log("false");
   }
});

document.getElementById("btn").addEventListener("click",function()
{
   alert("enter pressed");
});

