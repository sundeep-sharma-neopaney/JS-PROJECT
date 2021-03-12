
const setRandom = {
    between: 100
}
//This function Return the questions which will be decimal in answer of division
function mathQuiz() {
    let solveT = null;
    correctAnswer = null;




    return {

        setRandBetween: null,
        userAnswer: null,
        getRand1: () => {
            const rbn = setRandom.between / 2;

            return Math.floor((Math.random() * rbn) + rbn);

        },
        getRand2: () => {
            const rbn = setRandom.between / 2;
            return Math.floor((Math.random() * rbn) + 1);

        },
        getOperator: () => {
            const rbn = ["+", "-", "×", "÷"];
            len = rbn.length;
            rand = Math.floor((Math.random() * len));
            return rbn[rand];

        },


        getQuestion: () => {
            const x = mathQuiz().getRand1();
            y = mathQuiz().getRand2();
            z = mathQuiz().getOperator();

            show = `${x} ${z} ${y}`;

            return solveT = show;


        },


        solve: () => {
            const forSolve = solveT;

            if (forSolve.match("×")) {
                let rep = forSolve.replace("×", "*");
                return correctAnswer = eval(rep);


            }
            if (forSolve.match("÷")) {
                let rep = forSolve.replace("÷", "/");
                return correctAnswer = eval(rep);

            }
            else {
                return correctAnswer = eval(forSolve);

            }




        }

    }
}

// this function return the questions which will not be decimal in answer of division

function mathQuizEd() {
    let solveT = null;
    correctAnswer = null;




    return {

        setRandBetween: null,
        userAnswer: null,
        getRand1: () => {
            const rbn = setRandom.between / 2;

            return Math.floor((Math.random() * rbn) + rbn);

        },
        getRand2: () => {
            const rbn = setRandom.between / 2;
            return Math.floor((Math.random() * rbn) + 1);

        },
        getOperator: () => {
            const rbn = ["÷"];
            len = rbn.length;
            rand = Math.floor((Math.random() * len));
            return rbn[rand];

        },
        getOperator1: () => {
            const rbn = ["+", "-", "×"];
            len = rbn.length;
            rand = Math.floor((Math.random() * len));
            return rbn[rand];
        },


        getQuestion: () => {

            const x = mathQuizEd().getRand1();
            y = mathQuizEd().getRand2();
            z = mathQuizEd().getOperator();
            za = mathQuizEd().getOperator1();

            show = `${x} ${z} ${y}`;
            if (show.match(/÷/g)) {

                rpl = show.replace("÷", "/");
                check = eval(rpl);

                if (check !== Math.floor(check)) {
                    show1 = `${x} ${za} ${y}`;
                    return solveT = show1;
                }
                if (check == Math.floor(check)) {

                    return solveT = show;
                }
            }


            else {
                console.log("from else");

                return solveT = show;
            }



        },


        solve: () => {
            const forSolve = solveT;

            if (forSolve.match("×")) {
                let rep = forSolve.replace("×", "*");
                return correctAnswer = eval(rep);


            }
            if (forSolve.match("÷")) {
                let rep = forSolve.replace("÷", "/");
                return correctAnswer = eval(rep);

            }
            else {
                return correctAnswer = eval(forSolve);

            }




        }

    }
}