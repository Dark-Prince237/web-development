let txt=document.getElementById("txt");
txt.addEventListener("keyup",function(event)
{
   if(event.getModifierState("NumLock"))
   {
      txt.parentElement.nextElementSibling.style.display="block";
   }

  else
   {
      txt.parentElement.nextElementSibling.style.display="none";
   }
});
