//VARIABLES
let rocket: Rocket;
let rockets = new Array();
let boosters: number[] = new Array();
let copyBoosters: number[] = new Array();
//*********************INSTANCE CLASSES*****************************//

/************************ROCKETS BY DEFAULT********************/
////Create Rocket Buttons//// 
function createRocket1() {
    let rocketsPlace = (document.getElementById('rockets') as HTMLElement);
    let code: string = '32WESSDS';
    rocket = new Rocket(code);
    createBoost1();
    rockets.push(rocket);
    console.log(rocket.code, rocket.boosters);

    function createBoost1() {
        boosters = [10, 30, 80];
        copyBoosters = [10, 30, 80];
        for (let item in boosters) {
            let propulsor = new Booster(boosters[item], boosters[item]);
            rocket.addBooster(propulsor);
        }
        let btnAcc = document.createElement('button');
        btnAcc.textContent = ('Acelerar cohete 1');
        btnAcc.className = ('.acelerar');
        rocketsPlace.appendChild(btnAcc);
        btnAcc.onclick = (e) => {
            e.preventDefault;
            rocket.accelerate(boosters, copyBoosters);
        }

        let btnFren = document.createElement('button');
        btnFren.textContent = ('Frenar cohete 1');
        btnFren.className = ('.frenar');
        rocketsPlace.appendChild(btnFren);
        btnFren.onclick = (e) => {
            e.preventDefault;
            rocket.backAway(boosters);
        }
        (document.getElementById('rocket1')?.classList.add('d-none'));
    }
}
function createRocket2() {
    let code: string = 'LDSFJA32';
    rocket = new Rocket(code);
    createBoost2();
    rockets.push(rocket);

    function createBoost2() {
        let rocketsPlace = (document.getElementById('rockets') as HTMLElement);
        boosters = [30, 40, 50, 50, 50, 30, 10];
        copyBoosters = [30, 40, 50, 50, 50, 30, 10];
        for (let item of boosters) {
            let propulsor = new Booster(item, item);
            rocket.addBooster(propulsor);
        }
        let btnAcc = document.createElement('button');
        btnAcc.textContent = ('Acelerar cohete 2');
        btnAcc.className = ('.acelerar');
        rocketsPlace.appendChild(btnAcc);
        btnAcc.onclick = (e) => {
            e.preventDefault;
            rocket.accelerate(boosters, copyBoosters);
        }

        let btnFren = document.createElement('button');
        btnFren.textContent = ('Frenar cohete 2');
        btnFren.className = ('.frenar');
        rocketsPlace.appendChild(btnFren);
        btnFren.onclick = (e) => {
            e.preventDefault;
            rocket.backAway(boosters);
        }
        (document.getElementById('rocket2')?.classList.add('d-none'));
    }
}

/************************USER ROCKETS********************/

//////Calculate number of boosters/////
function boostersNum() {
    //////button number of boosters///////
    let numBoosters: number = (document.getElementById('boosters') as HTMLFormElement).value;
    //CREATE INPUTS FOR BOOSTERS POWER
    //TAKE VALUES TO CREATE A NEW ROCKET WITH ACC/BREAKE FUNCTIONS
    let formulario = (document.getElementById("boosters-form") as HTMLElement);
    //Validate number of boost are ok
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
    btn.className = ('btn btn-info');
    btn.type = ("button");
    btn.id = ('btn-create-boosters');
    //Create rocket onClick button function//
    formulario.appendChild(btn);
    btn.onclick = function createRocket(e) {
        e.preventDefault;
        let rocketsPlace = (document.getElementById('rockets') as HTMLElement);
        let code: string = (document.getElementById('rocket-code') as HTMLFormElement)?.value;

        let count: number = 0;
        //Validate all inputs have value
        let inputs = document.querySelectorAll('input');
        Array.from(inputs).forEach((element) => {
            let input: any = element.value;
            if (input === "") {
                count++;
            }

        });
        if (count === 0) {
            rocket = new Rocket(code);
            createBoost();
            //add rocket to array
            rockets.push(rocket);
            //create button for accelerate/breake rocket
            //accelerate function
            let index = rockets.indexOf(rocket);
            let btnAcc = document.createElement('button');
            btnAcc.textContent = (`Acelerar cohete ${index}`);
            btnAcc.className = ('.acelerar');
            rocketsPlace.appendChild(btnAcc);
            btnAcc.onclick = (e) => {
                e.preventDefault;
                rocket.accelerate(boosters, copyBoosters);
            }
            //breake function
            let btnFren = document.createElement('button');
            btnFren.textContent = (`Acelerar cohete ${index}`);
            btnFren.className = ('.frenar');
            rocketsPlace.appendChild(btnFren);
            btnFren.onclick = (e) => {
                e.preventDefault;
                rocket.backAway(boosters);
            }
            //show form
            (document.getElementById('rocket-btn')?.classList.remove('d-none'));
            //remove inputs
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
        
        } else {
            alert('Rellena todos los campos');
        }


    }

}

//Create boosters from user
function createBoost() {
    let numBoosters: number = (document.getElementById('boosters') as HTMLFormElement).value;
    let i: number = 0;

    while (numBoosters != i) {
        let boost = (document.getElementById('booster' + i) as HTMLFormElement).value;
        let propulsor = new Booster(boost, boost);
        rocket.addBooster(propulsor);
        i++;
    }

}
/************************VALIDATE*********************************/
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
        boostersNum();
        //hide create button
        (document.getElementById('rocket-btn')?.classList.add('d-none'));
    } else if (count != 0) {
        alert('Rellena los campos');
    } else if (code.length != 8) {
        alert('El nombre del cohete ha de tener ocho carácteres');
    } else if (numBoosters > 6 || numBoosters == 0) {
        alert('Como máximo seis propulsores y mínimo 1');
    }
}
//********************LISTENERS************************************************
/////////////rocket buttons/////////////
//button create rocket 1//
let rocket1 = (document.getElementById('rocket1') as HTMLFormElement).addEventListener('click', (e) => {
    e.preventDefault;
    createRocket1();
});
//button create rocket 2//
let rocket2 = (document.getElementById('rocket2') as HTMLFormElement).addEventListener('click', (e) => {
    e.preventDefault;
    createRocket2();
});
//Get number of boosters for create a new rocket// 
let rocketBtn = (document.getElementById('rocket-btn') as HTMLFormElement)!;
rocketBtn.addEventListener('click', (e) => {
    e.preventDefault;
    validate();
});



