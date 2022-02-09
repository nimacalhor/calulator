const formEl = document.querySelector("form");
const input1 = formEl.querySelector("#firstNumber")
const input2 = formEl.querySelector("#secondNumber")
const radios = formEl.getElementsByClassName("btn-check");
const containerResult = document.querySelector("h1")

let num1, num2, operation;

const getNSetInputs = function () {
    const [inputValue1, inputValue2] = [input1.value, input2.value];
    if (!inputValue1 || !inputValue2) return false;

    const { value: checkedRadioValue = false } = Array.from(radios).find(el => el.checked);
    if (!checkedRadioValue) return false;

    return [num1, num2, operation] = [+inputValue1, +inputValue2, checkedRadioValue]
};

const calculator = {
    sum(...nums) {
        return nums.reduce((pre, cur) => pre + cur, 0)
    },

    subtract(...nums) {
        return nums.reduce((pre, cur) => pre - cur)
    },

    multiply(...nums) {
        return nums.reduce((pre, cur) => pre * cur)
    },

    divide(...nums) {
        if (nums.some(num => num === 0)) return "division is not possible";
        return nums.reduce((pre, cur) => pre / cur)
    }
};

formEl.addEventListener("submit", function (e) {
    e.preventDefault()
    if (!getNSetInputs()) return;
    containerResult.textContent = calculator[operation](num1, num2).toFixed(3)
})