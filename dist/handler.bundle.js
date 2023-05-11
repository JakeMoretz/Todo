/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/handlers.js":
/*!*************************!*\
  !*** ./src/handlers.js ***!
  \*************************/
/***/ (() => {

eval("// add/delete project card/folder\nconst newProjectButton = document.querySelector('.new-project-btn');\nconst projects = document.querySelector('.projects');\nconst projectName = document.querySelector('input');\n\n\nnewProjectButton.addEventListener('click', () => {\n    if (!projectName.value) {\n        return;\n    }\n\n    const projectDiv = document.createElement('div');\n    const deleteBtn = document.createElement('button');\n\n    deleteBtn.textContent = 'Delete';\n    deleteBtn.className = 'deleteBtn';\n    projectDiv.className = 'project-card';\n\n    projectDiv.textContent = projectName.value;\n    projects.appendChild(projectDiv);\n    projectDiv.appendChild(deleteBtn);\n\n\n    deleteBtn.addEventListener(\"click\", () => {\n        projectDiv.remove();\n    })\n   \n\n\n   \n\n    clearInput();\n\n   \n\n    \n});\n\nfunction clearInput() {\n    projectName.value = '';\n}\n\n\n    // projectDiv.value.addEventListener('click', () => {\n    //     const toDoSection = document.querySelector(\".main\");\n    //     const toDo = document.createElement(\"div\");\n    //     toDo.className = \"test\";\n    //     toDoSection.appendChild(toDo);\n\n    // });\n\n\n\n\n\n\n//# sourceURL=webpack://todo/./src/handlers.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/handlers.js"]();
/******/ 	
/******/ })()
;