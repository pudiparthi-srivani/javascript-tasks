class Calculator {

    constructor(value) {
        this.result = value;
    }

    add(value){
        this.result += value;
        return this;
    }
    
    subtract(value){
        this.result -= value;
        return this;
    }
   
    multiply(value) {
        this.result *= value;
        return this;
    }
    
   
    divide(value) {
        this.result /= value;
        return this;
    }
 
    power(value) {
        this.result = Math.pow(this.result, value);
        return this;
    }

    getResult() {
        return this.result;
    }
}
console.log(new Calculator(2).add(3).multiply(4).getResult());
console.log(new Calculator(2).multiply(5).power(2).getResult());
try {console.log(new Calculator(20).divide(0).getResult());} 
catch (error) {
    console.log(error.message);
}
