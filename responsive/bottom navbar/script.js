function menuExpand(e)
{
  
  if (e.parentElement.className==="div2")
  {
      e.parentElement.classList.add("menu");
  }

  else

  {
     e.parentElement.className="div2"
  }

  console.log(e.parentElement);
   
}
