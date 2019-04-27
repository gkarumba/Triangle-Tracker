const checkBtn = document.getElementById('submit');

function checkTriangle(){
    let sideA = parseInt(document.getElementById('side_a').value);
    let sideB = parseInt(document.getElementById('side_b').value);
    let sideC = parseInt(document.getElementById('side_c').value);


    if (sideA + sideB >= sideC && sideB + sideC >= sideA && sideC + sideA >= sideB){
        if(sideA === sideB && sideB === sideC){
            let output = 'This is an equilateral triangle';
            return document.getElementById('display_text').innerHTML = output;
        }else if(sideA === sideB || sideB === sideC || sideC === sideA){
            let output = 'This is an isocelles triangle'
            return document.getElementById('display_text').innerHTML = output;
        }else if((sideA !== sideB) && (sideB !== sideC) && (sideC !== sideA)){
            let output = 'This is a scalene triangle'
            return document.getElementById('display_text').innerHTML = output;
        }
    }
    else{
        let output = 'This is not a triangle';
        return document.getElementById('display_text').innerHTML = output;
    }
    // console.log(sideA);
    // console.log(sideB);
    // console.log(sideC);

}

if(checkBtn){
    checkBtn.addEventListener('click',checkTriangle);
}
