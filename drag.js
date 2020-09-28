const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

draggables.forEach(draggable =>{
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    })

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    })
})

containers.forEach(container =>{
    container.addEventListener('dragover', drag_event =>{
        drag_event.preventDefault();
        const draggable = document.querySelector('.dragging');
        container.appendChild(draggable);
    })
})