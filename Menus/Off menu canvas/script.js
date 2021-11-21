let bar=document.getElementsByClassName("bar");
let sidebar=document.getElementById("sidebar");
let container=document.getElementById("container");
let close=document.getElementById("close");
for(i=0;i<bar.length;i++)
{

    bar[i].addEventListener("click",function()
    {
        sidebar.classList.add("nav");
        container.classList.add("con");
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    });

}

close.addEventListener("click",function()
{
    sidebar.classList.remove("nav");
    container.classList.remove("con");
    document.body.style.backgroundColor = "white";
    
});