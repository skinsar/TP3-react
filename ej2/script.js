document.addEventListener('DOMContentLoaded', () => {
    const palabras = ["manzana", "banana", "pera", "durazno", "frutilla", "mango"];
    
    const campoFiltro = document.getElementById('filterInput');
    const btnFiltrar = document.getElementById('filterBtn');
    const listaUl = document.getElementById('wordList');
    const errorP = document.getElementById('errorMessage');

    const filtrarPalabras = () => {
        const texto = campoFiltro.value.toLowerCase();

        errorP.textContent = '';
        listaUl.innerHTML = '';

        if (texto.trim() === '') {
            errorP.textContent = 'Error: el campo no puede estar vacío.';
            return;
        }

        const palabrasFiltradas = palabras.filter(palabra => 
            palabra.toLowerCase().includes(texto)
        );

        if (palabrasFiltradas.length > 0) {
            palabrasFiltradas.forEach(palabra => {
                const li = document.createElement('li');
                li.textContent = palabra;
                listaUl.appendChild(li);
            });
        } else {
            const li = document.createElement('li');
            li.textContent = 'No se encontraron coincidencias.';
            listaUl.appendChild(li);
        }
    };

    btnFiltrar.addEventListener('click', filtrarPalabras);
});