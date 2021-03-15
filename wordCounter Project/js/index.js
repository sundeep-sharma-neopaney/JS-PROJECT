
const n = new wordCounter();
const i = document.querySelector("input");
j = document.querySelector("textarea");
j.addEventListener("keyup", () => {
    n.text = j.value;
    document.querySelector(".word").innerHTML = n.count().word();
    document.querySelector(".wchar").innerHTML = n.count().wChar();
    document.querySelector(".space").innerHTML = n.count().wsChar();
    document.querySelector(".len").innerHTML = n.count().len();

});


i.addEventListener("change", () => {

    n.file = i;
    n.getData().then(t => {
        if (t !== "-ERR-") {
            j.value = t;
            document.querySelector(".word").innerHTML = n.count().word();
            document.querySelector(".wchar").innerHTML = n.count().wChar();
            document.querySelector(".space").innerHTML = n.count().wsChar();
            document.querySelector(".len").innerHTML = n.count().len();
        }
        else {
            alert("Please upload a valid text|(.txt) file")
        }
    });
});


const d = document.querySelector(".save");
d.addEventListener("click", () => {
    if(j.value!==""){
    file = "word-counter-download.txt";
    blob = new Blob([j.value], { type: "text/plain" });
    d.href = URL.createObjectURL(blob);
    d.download = file;
    }
});








fr6 = document.querySelector(".similar").value;

btn1 = document.querySelector(".findreplace>button");
btn2 = document.querySelector(".tocapital>button");
btn3 = document.querySelector(".tosmall>button");
btn4 = document.querySelector(".singlecount>button");
btn5 = document.querySelector(".addafter>button");
btn6 = document.querySelector(".addbefore>button");
btn7 = document.querySelector(".firstcapital>button");
btn8 = document.querySelector(".firstsmall>button");
btn9 = document.querySelector(".singlecount>button");





btn1.addEventListener("click", () => {
    const fr = document.querySelector(".find").value;
    if (j.value !== "" && fr !== "") {
    fr1 = document.querySelector(".replace").value;
    reg1 = new RegExp(fr, "ig");
    conf = confirm("Are you sure that you want to replace all \"" + fr + "\" as \"" + fr1 + "\"");
    if (conf == true) {
        j.value = j.value.replace(reg1, fr1);
    }
}
});

btn2.addEventListener("click", () => {
     fr2 = document.querySelector(".find1").value;
    if (j.value !== "" && fr2 !== "") {
    reg2 = new RegExp(fr2, "ig");
    rp = j.value.match(reg2);
    conf = confirm("are you sure you want to change all \"" + rp + "\" letters to CAPITAL");
    if (conf == true) {
        for (var i = 0; i < rp.length; i++) {
            rp1 = rp[i].toUpperCase();


            j.value = j.value.replace(rp[i], rp1);
        }
    }

    }
});

btn3.addEventListener("click", () => {
    fr4 = document.querySelector(".find2").value;
    if (j.value !== "" && fr4 !== "") {
    reg2 = new RegExp(fr4, "ig");
    rp = j.value.match(reg2);
    conf = confirm("are you sure you want to change all \"" + rp + "\" letters to small");
    if (conf == true) {
        for (var i = 0; i < rp.length; i++) {
            rp1 = rp[i].toLowerCase();


            j.value = j.value.replace(rp[i], rp1);
        }
    }
    }
});



btn5.addEventListener("click", () => {

    fr10 = document.querySelector(".add1").value;
    if (j.value !== "" && fr10 !== "") {
    fr11 = document.querySelector(".addwith1").value;
    reg2 = new RegExp(fr10, "ig");
    rp = j.value.match(reg2);
    conf = confirm("are you sure you want to add \"" + rp + "\" after \"" + fr11 + "\"");
    if (conf == true) {
        j.value = j.value.replace(reg2, fr10 + " " + fr11);


    }
    }
});

btn6.addEventListener("click", () => {

    fr10 = document.querySelector(".add2").value;
    if (j.value !== "" && fr10 !== "") {
    fr11 = document.querySelector(".addwith2").value;

    reg2 = new RegExp(fr10, "ig");
    rp = j.value.match(reg2);
    conf = confirm("are you sure you want to add \"" + rp + "\" before \"" + fr11 + "\"");
    if (conf == true) {
        j.value = j.value.replace(reg2, fr11 + " " + fr10);


    }
}

});

btn7.addEventListener("click", () => {

    fr12 = document.querySelector(".add3").value;
    if (j.value !== "" && fr12 !== "") {
        conf = confirm("Are you sure you want to make first letter capital of all " + fr12);
        if (conf == true) {
            rgx = new RegExp(fr12, "ig");
            rpl = fr12[0].toUpperCase();
            dt = fr12.replace(fr12[0], rpl);
            j.value = j.value.replace(rgx, dt);
        }
    }
});


btn8.addEventListener("click", () => {

    fr12 = document.querySelector(".add4").value;
    if (j.value !== "" && fr12 !== "") {
        conf = confirm("Are you sure you want to make first letter small of all " + fr12);
        if (conf == true) {
            rgx = new RegExp(fr12, "ig");
            rpl = fr12[0].toLowerCase();
            dt = fr12.replace(fr12[0], rpl);
            j.value = j.value.replace(rgx, dt);
        }
    }
});

btn9.addEventListener("click", () => {
    fr13 = document.querySelector(".similar").value;
    if (j.value !== "" && fr13 !== "") {
        rgx = new RegExp(fr13, "ig");
        document.querySelector(".similarO").innerHTML = j.value.match(rgx).length;
    }
});

j.addEventListener("mouseout",()=>{
 const slc = getSelection(j);
 slc1 = slc.toString();

try {
    document.querySelector(".sword").innerHTML=slc1.match(/\w+/g).length;
    document.querySelector(".swchar").innerHTML=slc1.match(/\w/g).length;
    document.querySelector(".slen").innerHTML=slc1.length;
    document.querySelector(".sspace").innerHTML=slc1.match(/\W/g).length;
} catch (error) {
    error = "Dont show error";
}
});

if("serviceWorker" in navigator){
 navigator.serviceWorker.register("sw.js").then(e=>{
        console.log("Service worker Registered!");
    }).catch(e=>{
        console.log(e);
    });
}



    const tc = document.querySelectorAll(".result span");
    tc1 = 0;
    function styleCount(){
        if(tc1!==tc.length-1){   
 setTimeout(()=>{
     
    styleCount();
    document.querySelectorAll(".result span")[tc1].style.visibility="visible";
        tc1=tc1+1;
    
  },20);
    }
    }
styleCount();

//animation end*******
