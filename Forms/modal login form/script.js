function loginUp()
{
    document.getElementsByClassName("inner-container")[0].classList.add("animate");
    document.getElementsByClassName("container")[0].style.backgroundColor="rgb(71,78,93)";
    window.addEventListener("click",function(event)
{
    if(event.target==document.getElementsByClassName("container")[0])
    {
        document.getElementsByClassName("inner-container")[0].classList.remove("animate");
        document.getElementsByClassName("container")[0].style.backgroundColor="white";
        
    }
});
    
}

function closeLogin()
{
    document.getElementsByClassName("inner-container")[0].classList.remove("animate");
    document.getElementsByClassName("container")[0].style.backgroundColor="white";
}

