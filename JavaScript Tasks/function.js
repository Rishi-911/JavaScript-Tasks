let person = {
    firstName:"Rishi",
    lastName:"Shringi",
    speaks:function(){
        console.log(`${this.firstName} ${this.lastName} speaks Hindi`)
    }
}

const p1 = person.speaks();
console.log(p1)

let car = {
    brand:"porsche",
    model:"911",

    starts:() =>{
        console.log(`${this.brand} ${this.model} is starting...`) // output is undefined because arrow function does not have their own this key word
    }
}
const p2 = car.starts();
console.log(p2)