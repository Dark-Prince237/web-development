let img_slider=document.getElementsByClassName("img_slider");

    

    let flag=0;
    showSlides();
    function showSlides()
    {
       
        
        for(i=0;i<img_slider.length;i++)
            {
       
                img_slider[i].style.display="none";
            }

           

        img_slider[flag].style.display="block";
        flag++;
        if(flag==3)
        {
            flag=0;
        }

        setTimeout(showSlides,2000);

    }

  