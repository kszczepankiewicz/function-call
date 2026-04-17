const functionCallForm = document.getElementById('function-call-form');
const result = document.getElementById('result');

const functionCallNameInput = document.getElementById('function-call-name-input');
const functionCallParametersInput = document.getElementById('function-call-parameters-input');

function generateFunctionCall(functionName, functionParameters) {
    if (!functionName) {
        alert('Empty name');
        return '';
    }
    return `//${functionName}(${functionParameters})`;
}

functionCallForm.addEventListener('submit', (e) => {
    e.preventDefault();
    debugger
    result.textContent = generateFunctionCall(functionCallNameInput.value, functionCallParametersInput.value)
})