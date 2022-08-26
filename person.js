//Write a “person” class to hold all the details.

class Person{                                                                             //created class name as Person
    constructor(first_name, last_name, age, gender, city, state, pin, mobile_number ){    //created constructor with properties 
        this.first_name= first_name;                                                     //setting values to properties
        this.last_name = last_name;
        this.age = age;
        this.gender = gender;
        this.city = city;
        this.state = state;
        this.pin = pin;
        this.mobile_number = mobile_number;
    }

    getPersonFirstName(){                                                                 //defining method to get first name
        console.log(`First Name: ${this.first_name}`)
    }
    getPersonLastName(){                                                                    //defining method to get last name
        console.log(`Last Name: ${this.last_name}`)
    }   
    getAge(){                                                                               //defining method to get age
        console.log(`Age: ${this.age}`)
    }
    getGender(){                                                                            //defining method to get gender
        console.log(`Gender: ${this.gender}`)
    }
    getCity(){                                                                              //defining method to get city
        console.log(`City: ${this.city}`)
    }
    getState(){                                                                             //defining method to get state
        console.log(`State: ${this.state}`)
    }
    getPIN(){                                                                               //defining method to get PIN
        console.log(`PIN: ${this.pin}`)
    }
    getMobileNumber(){                                                                          //defining method to get Mobile number
        console.log(`Number: ${this.mobile_number}`)
    }
}

let Murgesh = new Person("Murgesh", "Ekunde", 25, "Male", "Sangli","Maharashtra", 415409, 1234567890)   

//accessing methods
Murgesh.getPersonFirstName()
Murgesh.getPersonLastName();
Murgesh.getAge();
Murgesh.getGender();
Murgesh.getCity();
Murgesh.getState();
Murgesh.getPIN();
Murgesh.getMobileNumber();
