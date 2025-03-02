const btnCompleted = document.getElementsByClassName('btn-completed')

for(const btnComplete of btnCompleted){
    btnComplete.addEventListener('click', function(event){
        btnComplete.setAttribute("disabled", "true")
        alert('Board Updated Successfully')
        let taskList = parseFloat(document.getElementById('task-list').innerText);
        let sum = taskList - 1;
        document.getElementById('task-list').innerText = sum;
        if(document.getElementById('task-list').innerText == 0){
            alert('Congrates!!! You have completed all the current task')
        }
        let navbarCount = parseFloat(document.getElementById('navbar-count').innerText)
        let count = navbarCount + 1;
        document.getElementById('navbar-count').innerText = count;  
        
        // Add History List
        const parentDiv = event.target.parentNode.parentNode.parentNode
        let taskTitle = parentDiv.querySelector('h2').innerText
        let newElement = document.createElement("p");
        newElement.style.backgroundColor = '#F4F7FF';
        newElement.style.borderRadius = '10px';
        newElement.style.padding = '10px';
        newElement.style.margin = '20px 0 20px';
        newElement.innerText = `You have Complete the task ${taskTitle} at ${new Date().toLocaleTimeString()}`;
        document.getElementById('history-activity').appendChild(newElement)
    })
    
}

