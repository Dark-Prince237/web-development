let bar=document.getElementsByClassName("bar");
let sidebar=document.getElementById("sidebar");
let close=document.getElementById("close");
for(i=0;i<bar.length;i++)
{

    bar[i].addEventListener("click",function()
    {
        sidebar.classList.toggle("nav");
    });

}

close.addEventListener("click",function()
{
    sidebar.classList.toggle("nav");
});