let boxes = document.querySelectorAll('.box');
let resetButton = document.querySelector('.reset');
let msgContainer = document.querySelector('.msg-container');
let msg = document.getElementById('msg');
let newGamebtn = document.getElementById('new-btn');


let turn  = true;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]    

]


boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log("button clicked");
        if(turn){
            box.innerText = "X";
            turn = false;
        }else{
            box.innerText = "O";
            turn = true;
        }
        box.disabled = true;
        checkwinner();
    });
});



const showwinner = (winner) =>{
    msg.innerText = ` Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove('hidden');
    disableboxes();

}


const checkwinner = () =>{

    for(pattern of winpatterns){

        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;

        if(posval1 !="" && posval2 !="" && posval3 !="" ){
            if(posval1 === posval2 && posval2 === posval3){
                console.log("WINNER ", posval1);
                showwinner(posval1);
            }
        }


    }
}

const disableboxes = () =>{
    boxes.forEach((box) => box.disabled = true);
}

const enableboxes = () =>{
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
}
const resetboxes = () =>{
    turn = true;
    enableboxes();
    msgContainer.classList.add('hidden');
}
newGamebtn.addEventListener('click', resetboxes);
resetButton.addEventListener('click', resetboxes);