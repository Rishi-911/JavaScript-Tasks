let Car = {
    Brand:"Porsche",
    Model:"911",

    start: function(){
        console.log(`${this.Brand} ${this.Model} is starting`)

        setTimeout(() =>{
            this.stop();
        }, 3000)
    },


    stop: function(){
        console.log(`${this.Brand} ${this.Model} will stop after 3 seconds`)
    }
}

Car.start();
