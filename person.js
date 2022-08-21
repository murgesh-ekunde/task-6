//Write a “person” class to hold all the details.

class Person{
    constructor(first_name, last_name, age, gender, city, state, pin, mobile_number ){
        this.first_name= first_name;
        this.last_name = last_name;
        this.age = age;
        this.gender = gender;
        this.city = city;
        this.state = state;
        this.pin = pin;
        this.mobile_number = mobile_number;
    }

    getPersonFirstName(){
        console.log(`First Name: ${this.first_name}`)
    }
    getPersonLastName(){
        console.log(`Last Name: ${this.last_name}`)
    }
    getAge(){
        console.log(`Age: ${this.age}`)
    }
    getGender(){
        console.log(`Gender: ${this.gender}`)
    }
    getCity(){
        console.log(`City: ${this.city}`)
    }
    getState(){
        console.log(`State: ${this.state}`)
    }
    getPIN(){
        console.log(`PIN: ${this.pin}`)
    }
    getMobileNumber(){
        console.log(`Number: ${this.mobile_number}`)
    }
}

let Murgesh = new Person("Murgesh", "Ekunde", 25, "Male", "Sangli","Maharashtra", 415409, 1234567890)

Murgesh.getPersonFirstName()
Murgesh.getPersonLastName();
Murgesh.getAge();
Murgesh.getGender();
Murgesh.getCity();
Murgesh.getState();
Murgesh.getPIN();
Murgesh.getMobileNumber();