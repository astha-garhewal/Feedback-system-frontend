console.log('Hello world')


NAMES = ["voice", "speed", "presentation", "communication", "interest", "knowledge", "assessible", "simulation", "encourage", "puntual", "overall"];

let boxes = document.querySelectorAll('main .form-box');
console.log(boxes[0].innerHTML);

boxes.forEach((element, index) => {
    element.innerHTML += make_options(index+1, NAMES[index]);
});


function make_options(i, name)
{
    let options = `<div class="options"> 
                        <span>
                            <label for="one${i}">Very Good</label>
                            <input type="radio" id="one${i}" name="${name}" value="5">
                        </span>
                        <span>
                            <label for="two${i}">Good</label>
                            <input type="radio" id="two${i}" name="${name}" value="4">
                        </span>
                        <span>
                            <label for="three${i}">Satisfactory</label>
                            <input type="radio" id="three${i}" name="${name}" value="3">
                        </span>
                        <span>
                            <label for="four${i}">Unsatisfactory</label>
                            <input type="radio" id="four${i}" name="${name}" value="0">
                        </span>
                    </div>`;

    return options;
}