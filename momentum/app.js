const calculator = {
    add : function(num1, num2){
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
    },
    minus : function(num1, num2){
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
    },
    div : function(num1, num2){
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
    },
    powerof : function(num1, num2){
        console.log(`${num1} ** ${num2} = ${num1 ** num2}`)
    },
};

calculator.add(3, 7);
calculator.minus(7, 5);
calculator.minus(12, 9);
calculator.powerof(5, 3);