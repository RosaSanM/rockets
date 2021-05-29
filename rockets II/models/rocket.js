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
        var conPower = false;
        var div = document.getElementById(rockets[x].code);
        for (var i = 0; i < boosters.length; i++) {
            var booster_1 = this.boosters[i].power;
            if (booster_1 <= 0) {
                console.log('sin poténcia!');
            }
            else {
                this.boosters[i].power -= 10;
                conPower = true;
                (_a = document.getElementById("rocket-img" + x)) === null || _a === void 0 ? void 0 : _a.classList.add('is-on');
                //div.className = ('animate__animated animate__zoomInUp');
                //div.textContent = (""+data);
            }
            var arrPower = new Array();
            for (var i_1 in boosters) {
                console.log(this.boosters[i_1].power);
                arrPower.push(this.boosters[i_1].power);
            }
            div.textContent = ("" + arrPower.join(' '));
            setTimeout(function () { div.textContent = (' '); }, 1000);
        }
        if (!conPower) {
            div.textContent = ('Sin potencia!');
            (_b = document.getElementById("rocket-img" + x)) === null || _b === void 0 ? void 0 : _b.classList.remove('is-on');
            setTimeout(function () { div.textContent = (' '); }, 1000);
        }
    };
    Rocket.prototype.accelerate = function (boosters, x) {
        var _a;
        //compare items in array for max power//
        var sinPower = false;
        var index = rockets.indexOf(rocket);
        var div = document.getElementById(rockets[x].code);
        for (var i = 0; i < boosters.length; i++) {
            var booster_2 = this.boosters[i];
            if (booster_2.power == booster_2.powerCopy) {
                console.log('al máximo!');
            }
            else {
                var data = this.boosters[i].power += 10;
                sinPower = true;
                (_a = document.getElementById("rocket-img" + x)) === null || _a === void 0 ? void 0 : _a.classList.add('is-on');
                var div_1 = document.getElementById(rockets[x].code);
                div_1.textContent = ("" + data);
            }
            var arrPower = new Array();
            for (var i_2 in boosters) {
                console.log(this.boosters[i_2].power);
                arrPower.push(this.boosters[i_2].power);
            }
            div.textContent = ("" + arrPower.join(' '));
            setTimeout(function () { div.textContent = (' '); }, 1000);
        }
        if (!sinPower) {
            div.textContent = ('Al máximo!');
            setTimeout(function () { div.textContent = (' '); }, 1000);
        }
    };
    return Rocket;
}());
