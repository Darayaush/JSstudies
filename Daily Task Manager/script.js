(function(){
"use strict"

let formTask = document.body.querySelector('#form-task');
let taskList = document.body.querySelector('#task-list');
let formCom = document.body.querySelector('#form-com');
let formBtn = document.body.querySelector('#form-btn');
let form = document.body.querySelector('#form');
let taskItemCollection = document.getElementsByClassName("task-list__item");

addFromLocalStorage() 

formBtn.addEventListener("click", function(e){
    e.preventDefault();
    validateForm();
});

taskList.addEventListener("click", function(e) {
    let target = e.target;

    if(target === this) {
        return;
    } else if(target.tagName === "BUTTON") {
        e.preventDefault();
        target.parentNode.classList.add("slideOutDown");
        setTimeout(function(){
            target.parentNode.remove();
            saveToLocalS();
        }, 500);
        return;
    }
    
    target.classList.toggle("line-through");
})

taskList.addEventListener("dragstart", function(e) {
    let target = e.target;
    let dropTarget;
    
    taskList.addEventListener("dragenter", function(e) {
        dropTarget = e.target;
    });

    taskList.addEventListener("dragend", function(e) {
        if(dropTarget.tagName !== "LI") { 
          return
        } else if(dropTarget.nextSibling === target){
            dropTarget.before(target);
        } else {
            dropTarget.after(target);
        }
       
        saveToLocalS();
    });
})

function addFromLocalStorage() {
    if(!localStorage.getItem("taskList")) return;
    
    let tasks = localStorage.taskList;
    taskList.innerHTML = tasks;
}

function validateForm() {
    let noValidity = formTask.validity.valueMissing;

    if(noValidity) {
        formTask.classList.add('error');
        formTask.focus();
        return;
    }

    formTask.classList.remove('error');
    
    addTask();
}

function addTask() {
    let taskList = document.body.querySelector(".task-list");
    let task = formTask.value;
    let com;
    if(!formCom.validity.valueMissing) {
        com = formCom.value;
    }

    let li = document.createElement('li');
    li.classList.add("task-list__item");
    li.setAttribute("draggable", "true");

    let div = document.createElement('div');

    let taskMain = document.createElement('div');
    taskMain.classList.add("task-list__main");
    taskMain.innerText = task;

    let taskCom;
    if(com !== undefined) {
        taskCom = document.createElement('div');
        taskCom.classList.add("task-list__comm");
        taskCom.innerText = com;
    }

    div.append(taskMain, taskCom);

    let button = document.createElement('button');
    button.classList.add("task-list__btn");

    li.append(div, button);

    taskList.append(li);
    saveToLocalS();
    form.reset();
}

function saveToLocalS() {
    let content = Array.from(taskItemCollection);
    content = content.reduce(function(a, b) {
        return a + b;
    });

    localStorage.setItem("taskList", taskList.innerHTML);
}
})();