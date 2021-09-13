const inputs=document.querySelectorAll("input")
const button=document.querySelector("#calculate-hypotenuse-btn")
const output=document.querySelector('.output')
function calchypo(height,base)
{
    console.log(height,base)
    const ini=height*height+base*base
    const hypo=Math.sqrt(ini)
    return hypo
}
button.addEventListener("click",()=>{
    const hypo=calchypo(inputs[0].value,inputs[1].value);
    
    output.innerText="The length of hypotenuse is " + hypo
})
