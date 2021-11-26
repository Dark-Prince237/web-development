let txt=document.getElementById("txt");


function copyText()
{
   txt.select();
   
navigator.clipboard.writeText(txt.value);
console.log(txt.value);
}