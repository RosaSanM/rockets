"use strict";
class Rocket {
    constructor(code) {
        this.boosters = new Array();
        this.code = code;
    }
    //creating boosters//
    addBooster(booster) {
        this.boosters.push(booster);
    }
    //accelerate method//
    accelerate(boosters, copyBoosters) {
        //compare items in array for max power//
        let arrGuide = copyBoosters;
        let arrGuideString = arrGuide.toString();
        let boostersString = boosters.toString();
        if (arrGuideString === boostersString) {
            alert('potencia al máximo');
        }
        else {
            //up 10 points booster power//
            for (let index in boosters) {
                if (arrGuide[index] === boosters[index]) {
                    console.log('propulsor al máximo!');
                }
                else if (arrGuide[index] == 0) {
                    console.log('propulsor agotado!');
                }
                else {
                    boosters[index] += 10;
                }
            }
        }
    }
    //break boosters//
    backAway(boosters) {
        //check boosters have power
        let count = 0;
        let check = boosters.filter((item) => {
            if (item === 0) {
                return false;
            }
            else {
                count++;
                return true;
            }
        });
        //down boosters power in 10 points//      
        if (count > 0) {
            for (let i in boosters) {
                if (boosters[i] === 0) {
                    console.log('propulsor agotado');
                }
                else {
                    boosters[i] -= 10;
                }
            }
        }
        else {
            alert('sin potencia!');
        }
    }
}
