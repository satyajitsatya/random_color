const getcolor = () =>{
    const random =Math.floor(Math.random()*16777215)
    const code = '#'+ random.toString(16)
    document.body.style.backgroundColor ="#"+ random.toString(16)
    document.getElementById("code").innerText = code;
    
    
    
}
getcolor()

document.getElementById("btn").addEventListener("click",getcolor)