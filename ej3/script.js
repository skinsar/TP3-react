document.addEventListener('DOMContentLoaded', () => {
    const listaTareasUl = document.getElementById('lista-de-tareas');
    const urlApi = 'https://jsonplaceholder.typicode.com/todos';

    fetch(urlApi)
        .then(respuesta => respuesta.json())
        .then(tareas => {
            
            const tareasComp = tareas.filter(tarea => tarea.completed === true);

            tareasComp.forEach(tarea => {
                const itemLi = document.createElement('li');
                itemLi.textContent = `ID: ${tarea.id} - ${tarea.title}`;
                listaTareasUl.appendChild(itemLi);
            });
        });
});