// variables
const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

// Event Listner for add button
addTask.addEventListener('click', function () {
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkBtn = document.createElement("button");
    checkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    checkBtn.classList.add('checkTask');
    task.appendChild(checkBtn);

    let delbtn = document.createElement("button");
    delbtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    delbtn.classList.add('deleteTask');
    task.appendChild(delbtn);

    if (inputTask.value === "")
        alert('Please enter task');
    else {
        taskContainer.appendChild(task);
    }
    inputTask.value = "";

    checkBtn.addEventListener('click', function () {
        checkBtn.parentElement.style.textDecoration = "line-through";
    })
    delbtn.addEventListener('click', function (e) {
        let target = e.target;
        target.parentElement.parentElement.remove();
    })
});