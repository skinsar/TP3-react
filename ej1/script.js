document.addEventListener('DOMContentLoaded', () => {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const operationSelect = document.getElementById('operacion');
    const calcularBtn = document.getElementById('calcularBtn');
    const resultSpan = document.getElementById('resultado');

    const verificarBtn = () => {
        const operacion = operationSelect.value;
        const num1Value = num1Input.value;
        const num2Value = num2Input.value;

        if (operacion === 'division' && (num1Value === '0' || num2Value === '0')) {
            calcularBtn.disabled = true;
        } else {
            calcularBtn.disabled = false;
        }
    };

    const calcular = () => {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const operacion = operationSelect.value;
        let resultado;

        if (isNaN(num1) || isNaN(num2)) {
            resultSpan.textContent = 'Por favor, ingrese números válidos.';
            return;
        }

        switch (operacion) {
            case 'suma':
                resultado = num1 + num2;
                break;
            case 'resta':
                resultado = num1 - num2;
                break;
            case 'multiplicacion':
                resultado = num1 * num2;
                break;
            case 'division':
                if (num2 === 0) {
                    resultado = 'Error: No se puede dividir por cero.';
                } else {
                    resultado = num1 / num2;
                }
                break;
        }
        resultSpan.textContent = resultado;
    };

    operationSelect.addEventListener('change', verificarBtn);
    num1Input.addEventListener('input', verificarBtn);
    num2Input.addEventListener('input', verificarBtn);
    
    calcularBtn.addEventListener('click', calcular);

    verificarBtn();
});