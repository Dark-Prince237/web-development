let content=document.getElementsByClassName("content");
let navbar=document.getElementsByClassName("navbar");

content[0].addEventListener("scroll",function()
{
    if(this.scrollTop>53)
    {
        navbar[0].classList.add("nav");
    }

    else
    {
        navbar[0].classList.remove("nav"); 
    }
});