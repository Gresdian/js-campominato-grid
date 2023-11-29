// FUNZIONE CHE CREA LA SINGOLA CASELLA DELLA GRIGLIA

function createCell(num){
    const element = document.createElement('div');
    element.classList.add('square');

    element.innerText = num;

    return element;
}
const startButton = document.getElementById("play");

startButton.addEventListener("click", function(){
    
    const grid = document.getElementById('grid');
    
    for(let i=0; i<100; i++){
        let square = createCell(i+1);
    
        square.addEventListener('click', function(){
            this.classList.toggle('clicked');
            console.log(i+1);
        })
    
        grid.appendChild(square);
    }

})
