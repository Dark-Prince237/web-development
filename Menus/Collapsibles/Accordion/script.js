let container=document.getElementsByClassName("container");

for(i=0;i<container.length;i++)
{
    container[i].addEventListener("click",function()
    {
        let elm=this.nextElementSibling; 
        this.classList.toggle("animate"); 
        if(elm.style.display=="none")                                       
            elm.style.display="block";
        else
        elm.style.display="none";
        

    });
}