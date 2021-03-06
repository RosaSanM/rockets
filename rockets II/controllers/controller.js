"use strict";
//VARIABLES
var rocket;
var rockets = new Array();
var booster;
//let copyBoosters: number[] = new Array();
//*********************INSTANCE CLASSES*****************************//
//Default rockets
function createRocket1() {
    var code = '32WESSDS';
    var boosters = [10, 30, 80];
    rocket = new Rocket(code);
    for (var i = 0; i < boosters.length; i++) {
        var power = boosters[i];
        booster = new Booster(power, power);
        rocket.addBooster(booster);
    }
    //add rocket to array
    rockets.push(rocket);
    //create buttons for acc/breake functions
    createButtonsPlay(rocket);
    document.getElementById('rocket1').classList.add('d-none');
}
function createRocket2() {
    var code = 'LDSFJA32';
    var boosters = [30, 40, 50, 50, 50, 30, 10];
    rocket = new Rocket(code);
    for (var i = 0; i < boosters.length; i++) {
        var power = boosters[i];
        booster = new Booster(power, power);
        rocket.addBooster(booster);
    }
    //add rocket to array
    rockets.push(rocket);
    //create buttons for acc/breake functions
    createButtonsPlay(rocket);
    document.getElementById('rocket2').classList.add('d-none');
}
/*************************USER ROCKETS******************************************/
//Create Rocket
function createRocket() {
    var _a;
    var code = (_a = document.getElementById('rocket-code')) === null || _a === void 0 ? void 0 : _a.value;
    rocket = new Rocket(code);
    var numBoosters = parseInt(document.getElementById('boosters').value);
    var i = 0;
    while (numBoosters != i) {
        var power = parseInt(document.getElementById('booster' + i).value);
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
    var _a, _b;
    var count = 0;
    var code = (_a = document.getElementById('rocket-code')) === null || _a === void 0 ? void 0 : _a.value;
    var numBoosters = document.getElementById('boosters').value;
    //Validate all inputs have value
    var inputs = document.querySelectorAll('input');
    Array.from(inputs).forEach(function (element) {
        var input = element.value;
        if (input === "") {
            count++;
        }
    });
    //if validate its ok, call function
    if ((count === 0) && (code.length === 8) && (numBoosters <= 6 && numBoosters != 0)) {
        createBoostsInput();
        //hide create button
        ((_b = document.getElementById('rocket-btn')) === null || _b === void 0 ? void 0 : _b.classList.add('d-none'));
    }
    else if (count != 0) {
        alert('Rellena los campos');
    }
    else if (code.length != 8) {
        alert('El nombre del cohete ha de tener ocho caracteres');
    }
    else if (numBoosters > 6 || numBoosters == 0) {
        alert('Como m??ximo seis propulsores y m??nimo 1');
    }
}
//validate boosters power inputs
function validateBoostInputs() {
    //Validate all inputs have value validate power is multiple of 10
    var control = true;
    var inputBooster = document.getElementById('boosters-form');
    for (var i = 0; i < inputBooster.length - 1; i++) {
        var inputValu = document.getElementById("booster" + i);
        if (inputValu.value % 10 != 0 || inputValu.value < 0 || inputValu.value.length === 0) {
            control = false;
        }
    }
    if (control) {
        createRocket();
    }
    else if (!control) {
        alert('La pot??ncia a de ser m??ltiple de 10');
    }
}
/************CREATE DOM ELEMENTS*************/
//Validateinput boosters its ok, create inputs
function createBoostsInput() {
    /*number of boosters*/
    var numBoosters = document.getElementById('boosters').value;
    var formulario = document.getElementById('boosters-form');
    //Create inputs for boosters power
    for (var i = 0; i < numBoosters; i++) {
        var lab = document.createElement('label');
        var input = document.createElement('input');
        lab.textContent = ("Potencia del propulsor " + (i + 1));
        lab.id = ('label' + i);
        input.id = ('booster' + i);
        input.type = ('number');
        formulario.appendChild(lab);
        formulario.appendChild(input);
    }
    //add button for create rocket
    var btn = document.createElement('button');
    btn.textContent = ('Crear');
    btn.className = ('btn btn-info m-2');
    btn.type = ("button");
    btn.id = ('btn-create-boosters');
    formulario.appendChild(btn);
    //add listener to the button 
    document.getElementById('btn-create-boosters').addEventListener('click', function (e) {
        e.preventDefault;
        validateBoostInputs();
    });
}
//Create buttons for accelerate break functions
function createButtonsPlay(rocket) {
    var _a, _b, _c, _d, _e;
    var index = rockets.indexOf(rocket);
    var rocketsContainer = document.getElementById('rockets');
    var rocketsPlace = document.createElement('div');
    rocketsContainer.appendChild(rocketsPlace);
    //accelerate button and function
    var btnAcc = document.createElement('button');
    btnAcc.textContent = ("+");
    btnAcc.className = ('.acelerar btn btn-danger m-2');
    btnAcc.type = ('button');
    //ad code name of the rocket to id button
    btnAcc.name = ("acc " + rocket.code);
    rocketsPlace.appendChild(btnAcc);
    //listener    
    btnAcc.addEventListener('click', function (e) {
        e.preventDefault;
        for (var index_1 in rockets) {
            var i = parseInt(index_1);
            if (btnAcc.name == "acc " + rockets[i].code) {
                var propulsor = rockets[i].boosters;
                return rocket.accelerate(propulsor, i);
                ;
            }
        }
    });
    //rocket image
    var img = document.createElement('img');
    img.src = ("../images/rocket.png");
    img.className = ('rocket-img is-on');
    img.id = ("rocket-img" + index);
    rocketsPlace.appendChild(img);
    //breake function
    var btnFren = document.createElement('button');
    btnFren.type = ('button');
    btnFren.textContent = ("-");
    btnFren.className = ('.frenar btn btn-danger m-2');
    //ad code name of the rocket to id button
    btnFren.name = ("fren " + rocket.code);
    rocketsPlace.appendChild(btnFren);
    //listener 
    btnFren.addEventListener('click', function (e) {
        e.preventDefault;
        for (var index_2 in rockets) {
            var i = parseInt(index_2);
            if (btnFren.name == "fren " + rockets[index_2].code) {
                var propulsor = rockets[index_2].boosters;
                return rocket.backAway(propulsor, i);
            }
        }
    });
    //p para power
    var p = document.createElement('p');
    p.id = ("" + rocket.code);
    p.className = ('.div-power');
    rocketsPlace.appendChild(p);
    //show form for create new rocket
    ((_a = document.getElementById('rocket-btn')) === null || _a === void 0 ? void 0 : _a.classList.remove('d-none'));
    //remove inputs
    var numBoosters = document.getElementById('boosters').value;
    for (var i = 0; i < numBoosters; i++) {
        var lab = document.getElementById('label' + i);
        var input = document.getElementById('booster' + i);
        (_b = lab === null || lab === void 0 ? void 0 : lab.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(lab);
        (_c = input === null || input === void 0 ? void 0 : input.parentNode) === null || _c === void 0 ? void 0 : _c.removeChild(input);
    }
    var btn = document.getElementById('btn-create-boosters');
    (_d = btn === null || btn === void 0 ? void 0 : btn.parentNode) === null || _d === void 0 ? void 0 : _d.removeChild(btn);
    //reset form
    (_e = document.getElementById('form-create-rocket')) === null || _e === void 0 ? void 0 : _e.reset();
    btnFren.addEventListener('click', function (e) {
        e.preventDefault;
        for (var index_3 in rockets) {
            var i = parseInt(index_3);
            if (btnFren.name == "fren " + rockets[index_3].code) {
                rockets[index_3].code;
            }
        }
    });
}
/*******************LISTENERS*********************/
//Create default rockets callings
var rocket1 = document.getElementById('rocket1').addEventListener('click', function (e) {
    e.preventDefault;
    createRocket1();
});
var rocket2 = document.getElementById('rocket2').addEventListener('click', function (e) {
    e.preventDefault;
    createRocket2();
});
//Get number of boosters for create a new rocket// 
var rocketBtn = document.getElementById('rocket-btn');
rocketBtn.addEventListener('click', function (e) {
    e.preventDefault;
    validate();
});
