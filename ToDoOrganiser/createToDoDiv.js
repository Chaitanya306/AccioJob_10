const toDoBlock=document.getElementById("to-do-block");

let count=1;

const createToDoDiv =(toDoInput,toDoPriorityInput,toDoDeadLine)=>{
    const toDOCardDiv = document.createElement('div');
    const cardHeaderDiv = document.createElement('div');
    const cardBodyDiv = document.createElement('div');
    const priorityDisplaySpan = document.createElement('span');
    const deadLineDisplaySpan = document.createElement('span');
    const cardTitleH5 = document.createElement('h5');
    const deleteButton = document.createElement('a');

    toDOCardDiv.classList = "card to-do-card";
    cardHeaderDiv.classList = "card-header";
    cardBodyDiv.classList = "card-body";
    cardTitleH5.classList = "card-title";
    deadLineDisplaySpan.innerText = toDoDeadLine;
    deleteButton.classList = "btn btn-sm btn-danger";

    toDOCardDiv.id = `to-do-card-${count}`;
    toDOCardDiv.draggable=true;
    toDOCardDiv.addEventListener('dragstart',toDoDragStart);  
    priorityDisplaySpan.innerText = `${toDoPriorityInput} Priority`;
    cardTitleH5.innerText = toDoInput;
    deleteButton.innerText = 'Delete';
     
    deleteButton.addEventListener('click',onClicked);
    switch(toDoPriorityInput){
        case 'High': 
            priorityDisplaySpan.classList = "badge rounded-pill bg-danger";
            break;
        case 'Medium':
            priorityDisplaySpan.classList = "badge rounded-pill bg-warning text-dark";
            break;
        case 'Low':
            priorityDisplaySpan.classList = "badge rounded-pill bg-info text-dark"; 
            break;   

    }
    
    toDOCardDiv.appendChild(cardHeaderDiv);
    cardHeaderDiv.appendChild(priorityDisplaySpan);
    cardHeaderDiv.appendChild(deadLineDisplaySpan);
    toDOCardDiv.appendChild(cardBodyDiv);
    cardBodyDiv.appendChild(cardTitleH5);
    cardBodyDiv.appendChild(deleteButton);

    toDoBlock.appendChild(toDOCardDiv);
    count++;
}