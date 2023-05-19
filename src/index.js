import './index.css';
import { addButtonEventListener, checkedBoxListener } from './handlers';

const card = document.querySelector('.main');

let toDoList = [];

function ToDo(description, dueDate) {
    this.description = description;
    this.dueDate = dueDate;
}

function displayToDo() {
    card.textContent = '';
    toDoList.forEach((todo) => {
        let newDiv = document.createElement('div');
        let para1 = document.createElement('p');
        let para2 = document.createElement('p');

        let checkbox = document.createElement('INPUT');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', 'check-box');

        let testBtn = document.createElement('button');
        testBtn.textContent = 'Remove';
        testBtn.className = 'test-btn';

        let toDoDescription = document.createTextNode(`${todo.description}`);
        let completeDate = document.createTextNode(`due date: ${todo.dueDate}`);

        newDiv.className = 'test';
        para1.className = 'para1';
        para2.className = 'para2';
        toDoDescription.className = 'toDoDescription';
        completeDate.className = 'completed-date';
        checkbox.className = 'check-box';

        para1.appendChild(toDoDescription);
        para2.appendChild(completeDate);

        newDiv.appendChild(checkbox);

        newDiv.appendChild(para1);
        newDiv.appendChild(para2);

        newDiv.appendChild(testBtn);

        card.appendChild(newDiv);

        testBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const index = toDoList.indexOf(todo);
            if (index > -1) {
                toDoList.splice(index, 1);
                displayToDo();
            }
        });

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                para1.style.textDecoration = 'line-through';
            } else {
            }
        });
    });
}

export function addToDo() {
    let description = document.getElementById('description').value;
    let dueDate = document.getElementById('dueDate').value;

    let newToDo = new ToDo(description, dueDate);

    toDoList.push(newToDo);

    displayToDo();
}

export function clear() {
    description.value = '';
    dueDate.value = '';
}

addButtonEventListener();
