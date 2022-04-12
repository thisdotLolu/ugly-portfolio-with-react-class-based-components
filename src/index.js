import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'


ReactDOM.render(<App/>, document.getElementById('root'));

/*
class Animal{
    constructor(name,age){
        this.name=name
        this.age=age
    }

    speak(){
        console.log('I am',this.name)
    }
}

const animal1=new Animal('SImba',3)

const animal2= new Animal('Tim',78)
animal2.speak()
console.log(animal1)
console.log(animal2)

class Lion extends Animal{
    constructor(name,age,furColor,speed){
        super(name,age)
        this.furColor=furColor
        this.speed=speed
    }

    roar(){
        console.log(
            this.name,'is',this.age,'years old with furColor',this.furColor,'and runs ', this.speed ,'miles'
        )
    }
}

const Lion1= new Lion ('Mufasa', 45,'peach',750)
Lion1.roar()
*/