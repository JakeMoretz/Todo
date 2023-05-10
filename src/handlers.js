// add project card/folder
const newProjectButton = document.querySelector('.new-project-btn');
const projects = document.querySelector('.projects');
const projectName = document.querySelector('input');

newProjectButton.addEventListener('click', () => {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project-card';
    projectDiv.textContent = projectName.value;
    projects.appendChild(projectDiv);

    clearInput();
});

function clearInput() {
    projectName.value = '';
}
