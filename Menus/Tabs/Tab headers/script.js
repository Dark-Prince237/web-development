let box=document.getElementsByClassName("box");

// console.log(box);

for(i=0;i<box.length;i++)
{
    box[i].addEventListener("click",function()
    {
       
        let prt=this.parentElement.parentElement.nextElementSibling;
         
        
        for(j=0;j<box.length;j++)
        {
            box[j].style.backgroundColor="rgb(241,241,241)";
            
        }

        prt.firstElementChild.classList.add("head");
        prt.firstElementChild.nextElementSibling.classList.add("text");

        if(this.innerHTML=="Patna")
        {
            prt.firstElementChild.innerHTML="Patna";
            prt.firstElementChild.nextElementSibling.innerHTML="Patna is the capital city of Bihar.";
            prt.style.backgroundColor="rgb(244,67,54)";
            this.style.backgroundColor="rgb(244,67,54)";
            // this.classList.toggle("patna");
            
           

        }
        else if(this.innerHTML=="Banglore")
        {
            prt.firstElementChild.innerHTML="Banglore";
            prt.firstElementChild.nextElementSibling.innerHTML="Banglore is the capital city of Karnataka.";
            prt.style.backgroundColor="rgb(4,170,109)";
            this.style.backgroundColor="rgb(4,170,109)";
            // this.classList.toggle("banglore");


        }

        else if(this.innerHTML=="Amritsar")
        {
            prt.firstElementChild.innerHTML="Amritsar";
            prt.firstElementChild.nextElementSibling.innerHTML="Amritsar is the capital city of Punjab.";
            prt.style.backgroundColor="rgb(33,150,243)";
            this.style.backgroundColor="rgb(33,150,243)";
            // this.classList.toggle("amritsar");

        }

        else
        {
            prt.firstElementChild.innerHTML="Delhi"
            prt.firstElementChild.nextElementSibling.innerHTML="Delhi is the capital city of India.";
            prt.style.backgroundColor="rgb(255,87,34)";
            this.style.backgroundColor="rgb(255,87,34)";
            // this.classList.toggle("delhi");

        }
    });

   

}

