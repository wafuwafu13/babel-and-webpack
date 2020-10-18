import add from './modules/addition';
import minus from './modules/subtraction';

const num1 = 10;
const num2 = 3;

const addNum = add(num1, num2);
const minusNum = minus(num1, num2);

console.log(addNum, minusNum);
