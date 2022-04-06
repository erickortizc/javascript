/* alert("Iniciando js"); */
//General Variable
let tareview=document.getElementById('tareview');
//BorderPart
let radiousLT= document.getElementById('radiousLT');
let inputLT = document.getElementById('inputLT');
let allRadiuous = document.getElementById('allRadiuous'); 
let inputRT = document.getElementById('inputRT'); 
let inputLB = document.getElementById('inputLB'); 
let inputRB = document.getElementById('inputRB'); 
let radiousRT = document.getElementById('radiousRT'); 
let radiousLB = document.getElementById('radiousLB'); 
let radiousRB = document.getElementById('radiousRB'); 


let withborder = document.getElementById('withborder');
let widthButton = document.getElementById('widthButton');
let widthLabel = document.getElementById('widthLabel');

//Color part
let inputColor = document.getElementById('inputColor');
let alphaBorder = document.getElementById('alphaBorder');
let opacityborder = document.getElementById('opacityborder');
let opacitylabel = document.getElementById('opacitylabel');
//Buttons part
let solidb = document.getElementById('solidb');  
let dottedb = document.getElementById('dottedb');
let dashedb = document.getElementById('dashedb');
let doubleb = document.getElementById('doubleb');    
let grooveb = document.getElementById('grooveb');
let ridgeb = document.getElementById('ridgeb');
let insetb = document.getElementById('insetb');
let outset = document.getElementById('outset');  
let hiddenb = document.getElementById('hiddenb');
let allb = document.getElementById('allb');     
let topb = document.getElementById('topb');
let rightb = document.getElementById('rightb');
let bottomb = document.getElementById('bottomb');
let leftb = document.getElementById('leftb');

var estilo = '';
radiousLT.oninput = function(e)
{
    inputLT.value=radiousLT.value;
    if (allRadiuous.checked) 
    {
        tareview.style.borderRadius=radiousLT.value + 'px';
        inputRT.value=radiousLT.value;
        radiousRT.value= radiousLT.value;
        inputLB.value=radiousLT.value;
        radiousLB.value= radiousLT.value;
        inputRB.value=radiousLT.value;
        radiousRB.value= radiousLT.value;
    }
    else
    {
        tareview.style.borderTopLeftRadius=radiousLT.value + 'px';
    }
        
};
allRadiuous.oninput=function(e)
{
    if (!allRadiuous.checked) 
    {
        tareview.style.borderRadius="0px 0px 0px 0px";
        radiousLT.value=0;
        radiousRT.value=0;
        radiousLB.value=0;
        radiousRB.value=0;
        inputLT.value=0;
        inputRT.value=0;
        inputLB.value=0;
        inputRB.value=0;
    }
};
widthButton.onclick = function(e)
{
    tareview.style.borderWidth=1+'px';  
    withborder.value = 1;
    widthLabel.innerHTML=1;
};
withborder.oninput = function(e)
{
tareview.style.borderWidth=withborder.value+'px';  
widthLabel.innerHTML=withborder.value;
};
inputColor.oninput = function(e)
{
    tareview.style.borderColor=inputColor.value;
};
alphaBorder.oninput = function(e)
{
    tareview.style.opacity = (alphaBorder.value)/100;
    opacitylabel.innerHTML=(alphaBorder.value)/100;
}; 
radiousRT.oninput= function (e)
{
    inputRT.value=radiousRT.value;
    tareview.style.borderTopRightRadius=radiousRT.value + 'px';
};
radiousLB.oninput = function (e)
{
    inputLB.value=radiousLB.value;
    tareview.style.borderBottomLeftRadius=radiousLB.value + 'px';
};radiousRB
radiousRB.oninput = function (e)
{
    inputRB.value=radiousRB.value;
    tareview.style.borderBottomRightRadius=radiousRB.value + 'px';
};
solidb.onclick = function (e)
{
    tareview.style.borderStyle="solid";
    estilo = 'solid';
};
dashedb.onclick = function (e)
{
    tareview.style.borderStyle="dashed";
    estilo = 'dashed';
};
dottedb.onclick = function (e)
{
    tareview.style.borderStyle="dotted";
    estilo = 'dotted';
};
doubleb.onclick = function (e)
{
    tareview.style.borderStyle="double";
    estilo = 'double';
};
grooveb.onclick = function (e)
{
    tareview.style.borderStyle="groove";
    estilo = 'groove';
};
ridgeb.onclick = function (e)
{
    tareview.style.borderStyle="ridge";
    estilo = 'ridge';
};
insetb.onclick = function (e)
{
    tareview.style.borderStyle="inset";
    estilo = 'inset';
};
outset.onclick = function (e)
{
    tareview.style.borderStyle="outset";
    estilo = 'outset';
};
hiddenb.onclick = function (e)
{
    tareview.style.borderStyle="hidden";
    estilo = 'hidden';
};
noneb.onclick = function (e)
{
    tareview.style.borderStyle="none";
    estilo = 'none';
};
allb.onclick = function (e)
{
    console.log(estilo);
    tareview.style.borderStyle=estilo;

};
topb.onclick = function (e)
{
    tareview.style.borderStyle="hidden";
    tareview.style.borderTopStyle = estilo;
 /*    if(estilo=='solid')
    {
        tareview.style.borderTopStyle = 'solid';
    }else
    if(estilo=='dotted')
    {
        tareview.style.borderTopStyle = 'dotted';
    }else
    if(estilo=="dashed")
    {
        tareview.style.borderTopStyle = 'dashed';
    } */
};
rightb.onclick = function (e)
{
    tareview.style.borderStyle="hidden";
    tareview.style.borderRightStyle= estilo;
};
bottomb.onclick = function (e)
{
    tareview.style.borderStyle="hidden";
    tareview.style.borderBottomStyle = estilo;
};
leftb.onclick = function (e)
{
    tareview.style.borderStyle="hidden";
    tareview.style.borderLeftStyle = estilo;
};
inputLT.oninput = function (e)
{
    radiousLT.value=inputLT.value;
    tareview.style.borderTopLeftRadius=inputLT.value + 'px';
};
inputRT.oninput = function (e)
{
    radiousRT.value=inputRT.value;
    tareview.style.borderTopRightRadius=inputRT.value + 'px';
};
inputLB.oninput = function (e)
{
    radiousLB.value=inputLB.value;
    tareview.style.borderBottomLeftRadius=inputLB.value + 'px';
};
inputRB.oninput = function (e)
{
    radiousRB.value=inputRB.value;
    tareview.style.borderBottomRightRadius=inputRB.value + 'px';
};
opacityborder.onclick = function (e)
{
    tareview.style.opacity=1;  
    alphaBorder.value = 100;
    opacitylabel.innerHTML=1;
};