const checkBtn = document.getElementById('submit');

function submitForm(){
    let submitBtn = document.getElementById("submit");
    // submitBtn.submit(); // Submit the form
    submitBtn.reset();  // Reset all form data
    return false; 
}

function checkTriangle(){
    let sideA = parseInt(document.getElementById('side_a').value);
    let sideB = parseInt(document.getElementById('side_b').value);
    let sideC = parseInt(document.getElementById('side_c').value);
    
    let resetForm = document.getElementById("triangle_form");
    // submitBtn.submit(); // Submit the form
    resetForm.reset(); 

    let sides = [];
    sides.push(sideA);
    sides.push(sideB);
    sides.push(sideC);
    console.log(sides)

    if (sides[0] + sides[1] >= sides[2] && sides[1] + sides[2] >= sides[0] && sides[2] + sides[0] >= sides[1]){
        if(sides[0] === sides[1] && sides[1] === sides[2]){
            let output = 'This is an equilateral triangle';
            return document.getElementById('display_text').innerHTML = output;
        }else if(sides[0] === sides[1] || sides[1] === sides[2] || sides[2] === sides[0]){
            let output = 'This is an isocelles triangle'
            return document.getElementById('display_text').innerHTML = output;
        }else if((sides[0] !== sides[1]) && (sides[1] !== sides[2]) && (sides[2] !== sides[0])){
            let output = 'This is a scalene triangle'
            return document.getElementById('display_text').innerHTML = output;
        }
    }
    else{
        let output = 'This is not a triangle';
        return document.getElementById('display_text').innerHTML = output;
    }
    // console.log(sides[0]);
    // console.log(sides[1]);
    // console.log(sides[2]);
}


if(checkBtn){
    checkBtn.addEventListener('click',checkTriangle);
}
