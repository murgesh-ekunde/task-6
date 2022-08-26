

class Circle {                                          //created class name as circle
    constructor(radius, color){                         //created constructor which contains two properties, radius as number and color as string 
        this.radius=radius;
        this.color = color;
    }

    circle(){
        console.log("circle")
    }
    circle(radius=4){
        console.log(radius)
    }
    circle(radius=4, color="Red"){
        console.log(radius,color)                     //Displaying radius & color
    }
    getRadius(){
        console.log(this.radius)
    }
    setRadius(newRadius){
        this.radius=newRadius
        console.log("New radius is:"+ newRadius)        //displaying new radius
    }
    getColor(){
        console.log(this.color)                         //displaying color
    }
    setColor(newColor){
        this.color=newColor
        console.log("New color is:"+ newColor)          //displaying new color
    }
    getArea(){
        let area = 3.4*this.radius*this.radius          //formula for area of circle
        console.log("Area of circle is:" + area)        
    }
    getCircumference(){
        let Circumference = 2*3.14*this.radius;            //formula of circumference of circle
        console.log("Circumferece of circle is:" + Circumference);
    }
}

let circle1 = new Circle (1, "Red")         //giving values for properties

//displaying required methods
circle1.circle();
circle1.getRadius();
circle1.getColor();
circle1.setRadius(2);
circle1.setColor("Green");
circle1.getArea();
circle1.getCircumference();
