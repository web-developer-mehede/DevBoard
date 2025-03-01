document.getElementById('btn-color-change').addEventListener('click', function(){
    
        let bgColors = ["violet", "tomato", "purple", "orange", "pink"];
        
        let randomColor = bgColors[Math.floor(Math.random() * bgColors.length)];        
        document.body.style.backgroundColor = randomColor;    

    
})