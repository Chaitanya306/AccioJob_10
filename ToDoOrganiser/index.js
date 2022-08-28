const invalidInput = document.getElementById('invalid-input');
invalidInput.style.display="none";



function toDoDragStart(event){
    event.dataTransfer.setData("text",event.target.id);
}
function allowDrop(event){
    event.preventDefault();
}
function drop(event){
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}
function onClicked(event){
    let element = event.target.parentElement.parentElement;
    let parent = event.target.parentElement.parentElement.parentElement;
    parent.removeChild(element);
}


const createToDo=()=>{
    const toDoInput = document.getElementById('todo-input').value;
    const toDoPriorityInput = document.getElementById('todo-priority-input').value;
    const toDoDeadLine = new Date(document.getElementById('to-do-deadline').value).toLocaleDateString("en-US",{
       year:"numeric",
       month:"long",
       day:"numeric",
       hour:"numeric",
       minute:"numeric",
       second:"numeric"
    });
    invalidInput.style.display="none";
    if(toDoInput=="" || document.getElementById('to-do-deadline').value ==""){
        invalidInput.style.display="block";
        //console.log(toDoInput);
        //console.log(document.getElementById('to-do-deadline').value);
        //console.log(toDoPriorityInput);
        return;
    }
    
    //console.log(typeof toDoInput);
    //console.log(typeof toDoPriorityInput);
    //console.log(typeof toDoDeadLine);
    createToDoDiv(toDoInput,toDoPriorityInput,toDoDeadLine);

}




