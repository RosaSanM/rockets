class Rocket {
    code: string;
    boosters: Booster[] = new Array();

    constructor(code: string){
        this.code = code;
    }
    //creating boosters//
    addBooster(booster: Booster): void {
        this.boosters.push(booster);
    }
    //back away function
    backAway( boosters: number[], x: number){
        //let index = rockets.indexOf(rocket);
        let conPower: boolean = false;
        
        for(let i=0; i<boosters.length;i++){
            
            let booster = this.boosters[i].power;
            if(booster == 0){
                console.log('sin poténcia!');  
            }else{
                this.boosters[i].power -= 10;
                conPower = true;
                document.getElementById(`rocket-img${x}`)?.classList.add('is-on');
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

        if(!conPower){
            alert('Sin poténcia!');
            document.getElementById(`rocket-img${x}`)?.classList.remove('is-on');
        }    
    }
    
    accelerate(boosters: number[],x: number) {
        //compare items in array for max power//
        let sinPower: boolean = false;
        let index = rockets.indexOf(rocket);

        for(let i=0; i<boosters.length;i++){
            let booster = this.boosters[i];
            if(booster.power == booster.powerCopy){
                console.log('al máximo!');  
            }else{
                this.boosters[i].power += 10;
                sinPower = true;
                document.getElementById(`rocket-img${x}`)?.classList.add('is-on');
            }
        }
        if(!sinPower)alert('Poténcia al máximo!');
    }
    
}