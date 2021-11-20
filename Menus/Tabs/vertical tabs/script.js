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
            prt.firstElementChild.innerHTML="Patna";
            prt.firstElementChild.nextElementSibling.innerHTML="Patna is the capital city of Bihar.";

        }
        else if(this.innerHTML=="Banglore")
        {
            prt.firstElementChild.innerHTML="Banglore";
            prt.firstElementChild.nextElementSibling.innerHTML="Banglore is the capital city of Karnataka.";

        }

        else
        {
            prt.firstElementChild.innerHTML="Amritsar"
            prt.firstElementChild.nextElementSibling.innerHTML="Amritsar is the capital city  of Punjab.";

        }
    });

   

}


