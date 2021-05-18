
class Rocket{
    code: string;
    boosters: Booster[] = new Array();

    constructor(code: string){
        this.code = code;
    }
    //creating boosters//
    addBooster(booster: Booster): void{
        this.boosters.push(booster);
    }
    //accelerate method//
    accelerate(boosters: number[], copyBoosters: number[]): void{
        //compare items in array for max power//
        let arrGuide = copyBoosters;
        let  arrGuideString: string = arrGuide.toString();
        let boostersString: string = boosters.toString();
        if(arrGuideString === boostersString){
            alert('potencia al máximo');
        }else{
            //up 10 points booster power//
            for(let index in boosters) {
                if(arrGuide[index] === boosters[index]){
                console.log('propulsor al máximo!');  
                }else if(arrGuide[index] == 0) {
                console.log('propulsor agotado!');
                }else {
                    boosters[index] += 10;
                }
            }
        }         
    }
    //break boosters//
    backAway(boosters: number[]): void{
        //check boosters have power
        let count: number = 0;
        let check = boosters.filter((item: number)=>{
            if(item === 0){
                return false;
            }else{
                count ++;
                return true;
            }
        });
        //down boosters power in 10 points//      
        if(count>0){
            for(let i in boosters){
                if(boosters[i] === 0){
                    console.log('propulsor agotado');
                }else{
                    boosters[i] -= 10;
                }
            }
        }else{
            alert('sin potencia!');
        }
    } 
}