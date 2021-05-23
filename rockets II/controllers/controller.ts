//VARIABLES
let rocket: Rocket;
let rockets = new Array();
let booster: Booster;

//let copyBoosters: number[] = new Array();
//*********************INSTANCE CLASSES*****************************//

/*************************USER ROCKETS******************************************/
//Create Rocket
function createRocket() {
    let code: string = (document.getElementById('rocket-code') as HTMLFormElement)?.value;
    
    rocket = new Rocket(code);
    
    let numBoosters: number = parseInt((document.getElementById('boosters') as HTMLFormElement).value);
    let i: number = 0;

    while (numBoosters != i) {
        let power = parseInt((document.getElementById('booster' + i) as HTMLFormElement).value);
        booster = new Booster(power, power);
        rocket.addBooster(booster);
        i++;
    }
    
    //add rocket to array
    rockets.push(rocket);
    //create buttons for acc/breake functions
    createButtonsPlay(rocket);


}

/*********************VALIDATES**********************************/
//Validate code and number of boosters
function validate() {
    let count: number = 0;
    let code: string = (document.getElementById('rocket-code') as HTMLFormElement)?.value;
    let numBoosters: number = (document.getElementById('boosters') as HTMLFormElement).value;
    //Validate all inputs have value
    let inputs = document.querySelectorAll('input');
    Array.from(inputs).forEach((element) => {
        let input: any = element.value;
        if (input === "") {
            count++;
        }
    });
    //if validate its ok, call function
    if ((count === 0) && (code.length === 8) && (numBoosters <= 6 && numBoosters != 0) ) {
        createBoostsInput();
        //hide create button
        (document.getElementById('rocket-btn')?.classList.add('d-none'));

    } else if (count != 0) {
        alert('Rellena los campos');
    } else if (code.length != 8) {
        alert('El nombre del cohete ha de tener ocho caracteres');
    } else if (numBoosters > 6 || numBoosters == 0) {
        alert('Como máximo seis propulsores y mínimo 1');
    }
}
//validate boosters power inputs
function  validateBoostInputs(){
    //Validate all inputs have value validate power is multiple of 10
    let control: boolean = true;
    let inputBooster = (document.getElementById('boosters-form')as HTMLFormElement);
   
    for(let i = 0; i < inputBooster.length-1; i++){
        let inputValu = ((document.getElementById(`booster${i}`)as HTMLFormElement));
        if (inputValu.value % 10 != 0 || inputValu.value < 0 || inputValu.value.length === 0 ){
            control = false;
        } 
    }

    if(control){
       createRocket(); 
    
    }else if (!control){
        
        alert('La poténcia a de ser múltiple de 10');
    }
}

/************CREATE DOM ELEMENTS*************/
//Validateinput boosters its ok, create inputs
function createBoostsInput() {
     /*number of boosters*/
    let numBoosters: number = (document.getElementById('boosters')as HTMLFormElement).value;
   
    let formulario = (document.getElementById('boosters-form')as HTMLElement);
     //Create inputs for boosters power
    for (let i = 0; i < numBoosters; i++) {
        let lab = document.createElement('label');
        let input = document.createElement('input');
        lab.textContent = (`Potencia del propulsor ${i + 1}`);
        lab.id = ('label'+ i);
        input.id = ('booster' + i);
        input.type = ('number');
        formulario.appendChild(lab);
        formulario.appendChild(input);
    }
    //add button for create rocket
    let btn = document.createElement('button');
    btn.textContent = ('Crear');
    btn.className = ('btn btn-info m-2');
    btn.type = ("button");
    btn.id = ('btn-create-boosters');
    formulario.appendChild(btn); 
    //add listener to the button 
    (document.getElementById('btn-create-boosters')as HTMLButtonElement).addEventListener('click',(e)=>{
       e.preventDefault;
       validateBoostInputs(); 
    });
}
//Create buttons for accelerate break functions
function createButtonsPlay(rocket:Rocket){
   
    let index = rockets.indexOf(rocket);
    let rocketsPlace = (document.getElementById('rockets') as HTMLElement);
    
  
    //accelerate button and function
    let btnAcc = document.createElement('button');
    btnAcc.textContent = (`+`);
    btnAcc.className = ('.acelerar btn btn-danger m-2');
    btnAcc.type = ('button');
    //ad code name of the rocket to id button
    btnAcc.name = (`acc ${rocket.code}`);
    rocketsPlace.appendChild(btnAcc);
    //listener    
    btnAcc.addEventListener('click', (e)=>{
        e.preventDefault;
        for(let index in rockets){
            if(btnAcc.name == `acc ${rockets[index].code}`){
                let propulsor: number[] = rockets[index].boosters;
               
                return  rocket.accelerate(propulsor);;
            }
        }
       
    });
    //rocket image
    let img = document.createElement('img');
    img.src = ("../images/rocket.png");
    img.className = ('rocket-img is-on');
    img.id = (`rocket-img${index}`);
    rocketsPlace.appendChild(img);
    //breake function
    let btnFren = document.createElement('button');
    btnFren.type = ('button');
    btnFren.textContent = (`-`);
    btnFren.className = ('.frenar btn btn-danger m-2');
    //ad code name of the rocket to id button
    btnFren.name = (`fren ${rocket.code}`);
    rocketsPlace.appendChild(btnFren);
    //listener 
    btnFren.addEventListener('click',(e)=>{
        e.preventDefault;
        for(let index in rockets){
            if(btnFren.name == `fren ${rockets[index].code}`){
                let propulsor: number[] = rockets[index].boosters;
                return rocket.backAway(propulsor);
            }
        }
    });
    
    //show form for create new rocket
    (document.getElementById('rocket-btn')?.classList.remove('d-none'));
    //remove inputs
    let numBoosters: number = (document.getElementById('boosters') as HTMLFormElement).value;
    for (let i = 0; i < numBoosters; i++) {
        let lab = document.getElementById('label'+i);
        let input = document.getElementById('booster' + i);
            
        lab?.parentNode?.removeChild(lab);
        input?.parentNode?.removeChild(input);
    }
    let btn = document.getElementById('btn-create-boosters');
    btn?.parentNode?.removeChild(btn);
    //reset form
    (document.getElementById('form-create-rocket') as HTMLFormElement)?.reset();
}

/*******************LISTENERS*********************/

//Get number of boosters for create a new rocket// 
let rocketBtn = (document.getElementById('rocket-btn') as HTMLFormElement)!;
rocketBtn.addEventListener('click', (e) => {
    e.preventDefault;
    validate();
});



