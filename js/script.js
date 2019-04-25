const checkBtn = document.getElementById('submit');

function checkTriangle(){
    let sideA = document.getElementById('side_a').value;
    let sideB = document.getElementById('side_b').value;
    let sideC = document.getElementById('side_c').value;

    if(side_a===side_b && side_b===side_c){
        let output = 'This is an equilateral triangle';
        return document.getElementById('display_text').innerHTML = output;
    }else if(side_a===side_b || side_b===side_c || side_c===side_a){
        let output = 'This is an isocelles triangle'
        return document.getElementById('display_text').innerHTML = output;
    }else if(((side_a + side_b)>side_c) && ((side_b + side_c)> side_a) && ((side_c + side_a)>side_b)){
        let output = 'This is a scalene triangle'
        return document.getElementById('display_text').innerHTML = output;
    }else{
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
