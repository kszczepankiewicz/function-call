const functionCallForm = document.getElementById('function-call-form');
const resultEl = document.getElementById('result');

const functionCallNameInput = document.getElementById('function-call-name-input');
const functionCallParametersInput = document.getElementById('function-call-parameters-input');

function generateFunctionCall(functionName, functionParameters) {
    if (!functionName) {
        alert('Empty name');
        return '';
    }
    return `${functionName}(${functionParameters}) \n`;
}

functionCallForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const result = generateFunctionCall(functionCallNameInput.value, functionCallParametersInput.value);
    resultEl.textContent += result;
    navigator.clipboard.writeText('// ' + result);
    if (confirm('Open search?')) window.location.href = `https://www.google.com/search?q=${encodeURIComponent(result)}`;
});

// addDate() 
