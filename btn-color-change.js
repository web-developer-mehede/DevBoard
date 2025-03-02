document.getElementById('btn-color-change').addEventListener('click', function(){
    
        let bgColors = ["violet", "tomato", "LightGreen", "orange", "pink", "salmon", "SkyBlue", "crimson", "gold", "khaki"];  
        let randomColor = bgColors[Math.floor(Math.random() * bgColors.length)];        
        document.body.style.backgroundColor = randomColor;    
    
})