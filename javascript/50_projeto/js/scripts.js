// função que adiciona tarefa
function addTask(){

    // titulo da tarefa
    const taskTitle = document.querySelector("#task-title").value;
    console.log(taskTitle);
    
    if(taskTitle){  // se não vier vazio
        
        // clona template
        const template = document.querySelector(".template");
        const newTask = template.cloneNode(true);

        // add titulo
        newTask.querySelector(".task-title").textContent = taskTitle;

        // remover as classes desnecessárias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");
        
        // add tarefa  na lista
        const list = document.querySelector("#task-list");
        list.appendChild(newTask);

        // add o evento de remover
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this);
        });

        // adicionar evento de completar tarefa
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
            completeTask(this);
        });

        // limpar texto da caixa
        document.querySelector("#task-title").value = "";

    }

}

// função de remove tarefa
function removeTask(task){
    task.parentNode.remove(true);   // remove elemento do html
}

// função de completar a tarefa
function completeTask(task){
    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle("done");    // se tiver a classe tira, se não tiver coloca a classe
}

// evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e){
    e.preventDefault();

    addTask();

    

});