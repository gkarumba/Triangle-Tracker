const checkBtn = document.getElementById('submit');

function checkTriangle(){
    let sideA = document.getElementById('side_a').value;
    let sideB = document.getElementById('side_b').value;
    let sideC = document.getElementById('side_c').value;


    // console.log(sideA);
    // console.log(sideB);
    // console.log(sideC);

}

if(checkBtn){
    checkBtn.addEventListener('click',checkTriangle);
}
