window.onload = () => {
    if (localStorage.getItem("quizScore") == null) {
        localStorage.setItem("quizScore", 0);
    }
    else {
        document.querySelector(".score").innerHTML = "Score : " + localStorage.getItem("quizScore");
    }
    quiz();
}
function quiz() {
    setRandom.between=Math.floor((Math.random()*1000));
    const x = mathQuizEd();
    document.querySelector(".qst").innerHTML = x.getQuestion();
    document.querySelector(".submit").addEventListener("click", () => {

        const input = document.querySelector(".input").value;
        if (input == "") {
            document.querySelector(".status").innerHTML = `Please type your answer`;
            document.querySelector(".status").style.color = "red";
        }
        else {
            x.userAnswer = input;
            if (x.userAnswer != x.solve()) {
                document.querySelector(".status").innerHTML = `Oops! Correct Answer is ${x.solve()}`;
                document.querySelector(".status").style.color = "red";
                document.querySelector(".submit").style.display = "none";
                document.querySelector(".next").style.display = "block";



            }
            if (x.userAnswer == x.solve()) {
                document.querySelector(".status").innerHTML = `WoW Score Added`;
                document.querySelector(".status").style.color = "green";
                const store = localStorage.getItem("quizScore");
                numScore = Number(store) + 5;
                localStorage.setItem("quizScore", numScore);
                document.querySelector(".score").innerHTML = "Score : " + localStorage.getItem("quizScore");
                document.querySelector(".submit").style.display = "none";
                document.querySelector(".next").style.display = "block";

            }
        }
    });
}
document.querySelector(".next").addEventListener("click", () => {
    quiz();
    document.querySelector(".submit").style.display = "block";
    document.querySelector(".next").style.display = "none";
    document.querySelector(".input").value = null;
    document.querySelector(".status").innerHTML = "Solve it";
    document.querySelector(".status").style.color = "indigo";
});

document.querySelector(".reset").addEventListener("click", () => {
    localStorage.setItem("quizScore", 0);
    document.querySelector(".score").innerHTML = "Score : " + localStorage.getItem("quizScore");

});
if("serviceWorker" in navigator){
    navigator.serviceWorker.register("serviceWorker.js").then(status=>{
console.log("registered"+status);
    }).catch(e=>{
        console.log(e);
    });

}
setInterval(() => {
    quiz();
}, 60000);