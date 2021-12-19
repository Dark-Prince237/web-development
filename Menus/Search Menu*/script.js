let list1=document.getElementById("list1");
let child=list1.children;
let txt_value;



    function getInput(e)
        {
            for(i=0;i<child.length;i++)
            {
            txt_value=e.value;
            // console.log(child[i].innerHTML);
            
            
         
        //  console.log(txt_value);
         if(txt_value.toUpperCase()==child[i].innerHTML.toUpperCase())
            {
                for(j=0;j<child.length;j++)
                {
                    // child[j].style.display="none";
                    child[j].style.backgroundColor="rgb(187,187,187)";
                }

                // child[0].style.display="block";
                // child[0].innerHTML=txt_value;
                child[i].style.backgroundColor="red";
            }

        if(txt_value.toUpperCase()=="")
            {
                for(j=0;j<child.length;j++)
                {
                    child[j].style.backgroundColor="rgb(187,187,187)";
                }
            }

            
        }

    }


