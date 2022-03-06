var addMsg = document.querySelector(".titleName");
var outMsg = document.querySelector(".outMsg");

//style page js
var fontName = document.querySelector(".fontName");
var fontColorName = document.querySelector(".fontColorName");
var backgroundC = document.querySelector(".backgroundC");
//btn style
var clickMsg = document.querySelector(".clickMsg");

var searchColor = document.querySelector("#searchColor");


clickMsg.addEventListener("click",function(){

outMsg.value = addMsg.value;

outMsg.style.fontFamily = `${fontName.value}`; 
//outMsg.style.color = `${fontColorName.value}`;
if(outMsg.style.color = `${searchColor.value}` &&  `${fontColorName.value}` );
//outMsg.style.color = `${searchColor.value}` ;
outMsg.style.backgroundColor = `${backgroundC.value}`;

});


//copy message

function myCopy() {
    /* Get the text field */
    var copyText = document.querySelector(".outMsg");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    alert("Copied the text: " + copyText.value);
}









