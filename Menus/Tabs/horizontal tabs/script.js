let box=document.getElementsByClassName("box");
// console.log(box);

for(i=0;i<box.length;i++)
{
    box[i].addEventListener("click",function()
    {
       
        let prt=this.parentElement.parentElement.nextElementSibling;
        // console.log(prt);
        prt.style.display="block";
     
        // console.log(prt.firstElementChild.nextElementSibling.);       
        if(this.innerHTML=="Patna")
        {
            prt.firstElementChild.nextElementSibling.innerHTML="Patna";
            prt.firstElementChild.nextElementSibling.nextElementSibling.innerHTML="Patna is the capital city of Bihar.";

        }
        else if(this.innerHTML=="Banglore")
        {
            prt.firstElementChild.nextElementSibling.innerHTML="Banglore";
            prt.firstElementChild.nextElementSibling.nextElementSibling.innerHTML="Banglore is the capital city of Karnataka.";

        }

        else
        {
            prt.firstElementChild.nextElementSibling.innerHTML="Amritsar"
            prt.firstElementChild.nextElementSibling.nextElementSibling.innerHTML="Amritsar is the capital city Punjab.";

        }
    });

   

}

let close=document.getElementById("close");
close.addEventListener("click",function()
{
    this.parentElement.style.display="none";
});