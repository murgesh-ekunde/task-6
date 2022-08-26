//write a class to calculate the uber price.

class uberFarePrice {                                       //created class name as uberFarePrice
    constructor(base_fare, minutes, distance, fees) {       //created constructor with properties as base_fare, minutes, distance, fees
        this.base_fare = base_fare;                         //setting values to properties
        this.minutes = minutes;
        this.distance =distance;
        this.fees= fees;
    }
    getFare(cpm=0.2, cpd=20){        //cpm= cost per minute, cpd = cost per distance
        var fare = this.base_fare + (cpm * this.minutes) + (this.distance * cpd) + this.fees      //formula to calculate fare
        console.log (`Fare for ride is: ${fare}`)
    }  
}

let ride1 = new uberFarePrice(40, 25, 10, 15)

ride1.getFare();        //calling method to get fare
