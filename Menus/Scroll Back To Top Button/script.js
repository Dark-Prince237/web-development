let top_btn=document.getElementById("top");
window.addEventListener("scroll",function()
{
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    {
        top_btn.style.display="block";
    }

    else
    {
      top_btn.style.display="none";
    }
    

});



top_btn.addEventListener("click",function()
{
   document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

});