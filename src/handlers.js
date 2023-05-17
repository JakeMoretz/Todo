import './index.js';
import { addToDo } from './index.js';

// event listener for adding a todo
export const addButtonEventListener = () => {
    const addButton = document.querySelector('.new-project-btn');
    addButton.addEventListener('click', (event) => {
        event.preventDefault();
        addToDo();
    });
};


// export const removeButtonListener = () => {
//     const testBtn = document.querySelector('.test-btn')
//     testBtn.addButtonEventListener('click', () => {
//         newDiv.remove();
//     })
// }