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
        
        let conPower: boolean = false;
        let div = (document.getElementById(rockets[x].code)as HTMLElement);

        for(let i=0; i<boosters.length;i++){
            
            let booster = this.boosters[i].power;
            if(booster <= 0){
                console.log('sin poténcia!');  
            }else{
               
                this.boosters[i].power -= 10;
                conPower = true;
                document.getElementById(`rocket-img${x}`)?.classList.add('is-on');
                //div.className = ('animate__animated animate__zoomInUp');
                //div.textContent = (""+data);
            }
            let arrPower = new Array();
            
            for(let i in boosters) {
                
                console.log(this.boosters[i].power);
                arrPower.push(this.boosters[i].power);
            }
            div.textContent = (`${arrPower.join(' ')}`)
             
            
        }

        if(!conPower){
            div.textContent = ('Sin potencia!');
            document.getElementById(`rocket-img${x}`)?.classList.remove('is-on');
        }    
    }
    
    accelerate(boosters: number[], x: number) {
        //compare items in array for max power//
        let sinPower: boolean = false;
        let index = rockets.indexOf(rocket);
        let div = (document.getElementById(rockets[x].code)as HTMLElement);
       

        for(let i=0; i<boosters.length;i++){
            let booster = this.boosters[i];
            if(booster.power == booster.powerCopy){
                console.log('al máximo!');  
            }else{
                let data = this.boosters[i].power += 10;
                sinPower = true;
                document.getElementById(`rocket-img${x}`)?.classList.add('is-on');

                let div = (document.getElementById(rockets[x].code)as HTMLElement);
                
                div.textContent = (""+data);
            }
            let arrPower = new Array();
            
            for(let i in boosters) {
                
                console.log(this.boosters[i].power);
                arrPower.push(this.boosters[i].power);
            }
            div.textContent = (`${arrPower.join(' ')}`)
            
        }
        if(!sinPower)div.textContent = ('Al máximo!');
    }
    
}