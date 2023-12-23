const textarea =  document.getElementById("textarea");
const totolcount = document.getElementById("total-counter");
const remainigcount = document.getElementById("remaining-counter");

textarea.addEventListener("keyup",()=>{
    updatecounter();
})

function updatecounter(){
    totolcount.innerText = textarea.value.length;
    remainigcount.innerText = textarea.getAttribute("maxLength")-textarea.value.length ;
}