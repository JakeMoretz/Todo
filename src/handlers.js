import './index.js';
import { addToDo, clear } from './index.js';

// event listener for adding a todo
export const addButtonEventListener = () => {
    const addButton = document.querySelector('.new-project-btn');
    addButton.addEventListener('click', (event) => {
        event.preventDefault();
        let inputData = document.querySelector('#description').value;
        if (inputData === '') {
            newDiv.style.display = 'none';
        } else {
            addToDo();
            clear();
        }
    });
};
