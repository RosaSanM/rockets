"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(code) {
        this.boosters = new Array();
        this.code = code;
    }
    //creating boosters//
    Rocket.prototype.addBooster = function (booster) {
        this.boosters.push(booster);
    };
    //back away function
    Rocket.prototype.backAway = function (boosters, x) {
        var _a, _b;
        //let index = rockets.indexOf(rocket);
        var conPower = false;
        for (var i = 0; i < boosters.length; i++) {
            var booster_1 = this.boosters[i].power;
            if (booster_1 == 0) {
                console.log('sin poténcia!');
            }
            else {
                this.boosters[i].power -= 10;
                conPower = true;
                (_a = document.getElementById("rocket-img" + x)) === null || _a === void 0 ? void 0 : _a.classList.add('is-on');
            }
            /* Object.entries(booster).forEach(([key, value]) => {
                if(value == 0){
                    console.log('agotado!');
                }else{
                    this.boosters[i].power -= 10;
                    conPower = true;
                }
            });*/
        }
        if (!conPower) {
            alert('Sin poténcia!');
            (_b = document.getElementById("rocket-img" + x)) === null || _b === void 0 ? void 0 : _b.classList.remove('is-on');
        }
    };
    Rocket.prototype.accelerate = function (boosters, x) {
        var _a;
        //compare items in array for max power//
        var sinPower = false;
        var index = rockets.indexOf(rocket);
        for (var i = 0; i < boosters.length; i++) {
            var booster_2 = this.boosters[i];
            if (booster_2.power == booster_2.powerCopy) {
                console.log('al máximo!');
            }
            else {
                this.boosters[i].power += 10;
                sinPower = true;
                (_a = document.getElementById("rocket-img" + x)) === null || _a === void 0 ? void 0 : _a.classList.add('is-on');
            }
        }
        if (!sinPower)
            alert('Poténcia al máximo!');
    };
    return Rocket;
}());
