const x = document.querySelector(".lcd");
y = x.offsetWidth;
document.querySelector("table").style.width=y+"px";
z = document.querySelectorAll("button");
for(key of  z){
key.addEventListener("click",(k)=>{
    val = k.target.innerText;
    switch(val){
        case "x":
            x.value+="*";
            break;
            case "÷":
                x.value+="/";
                break;
                case "=":
                    x.value=eval(x.value);
                    break;
                   case "c":
                            x.value="";
                            break;
                            default :
                            x.value+=val;
    }
   

});
}