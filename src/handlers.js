// add/delete project card/folder
const newProjectButton = document.querySelector('.new-project-btn');
const projects = document.querySelector('.projects');
const projectName = document.querySelector('input');


newProjectButton.addEventListener('click', () => {
    if (!projectName.value) {
        return;
    }

    const projectDiv = document.createElement('div');
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'deleteBtn';
    projectDiv.className = 'project-card';

    projectDiv.textContent = projectName.value;
    projects.appendChild(projectDiv);
    projectDiv.appendChild(deleteBtn);


    deleteBtn.addEventListener("click", () => {
        projectDiv.remove();
    })
   


   

    clearInput();

   

    
});

function clearInput() {
    projectName.value = '';
}


    // projectDiv.value.addEventListener('click', () => {
    //     const toDoSection = document.querySelector(".main");
    //     const toDo = document.createElement("div");
    //     toDo.className = "test";
    //     toDoSection.appendChild(toDo);

    // });




