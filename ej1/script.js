document.addEventListener('DOMContentLoaded', () => {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const operationSelect = document.getElementById('operacion');
    const calcularBtn = document.getElementById('calcularBtn');
    const resultSpan = document.getElementById('resultado');


    const verificarbtn = () => {
        if (operationSelect.value === 'division') {
            calcularBtn.disabled = true; // 
        } else {
            calcularBtn.disabled = false;
        }
    };

    const calcular = () => {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const operacion = operationSelect.value;
        let resultado = 0;

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
        }
        resultSpan.textContent = resultado;
    };

    operationSelect.addEventListener('change', verificarbtn);
    calcularBtn.addEventListener('click', calcular);

    verificarbtn();
});