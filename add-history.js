const btnCompleted = document.getElementsByClassName('btn-completed')

for(const btnComplete of btnCompleted){
    btnComplete.addEventListener('click', function(){
        
           
        let newElement = document.createElement("p");
        newElement.innerText = "Your Task Is Complete"
        document.getElementById('history-activity').appendChild(newElement)
    })
    
}

const local = event.target.parentNode.parentNode.parentNode.nextChild.nextChild.innerText   