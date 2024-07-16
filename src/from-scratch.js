class Quadrilateral {
  constructor(side1,side2,side3,side4){
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.side4 = side4;
  }
  getPerimeter(){
    return this.side1 + this.side2 + this.side3 + this.side4;
  }
}

class Rectangle extends Quadrilateral{
  constructor(side1,side2){
    super(side1, side2, side1, side2)
  }
  getArea(){
    return this.side1 * this.side2;
  }
}

class Square extends Rectangle{
  constructor(side1){
    super(side1, side1, side1, side1)
  }
  getDiagonal(){
    return this.side1 * Math.sqrt(2)
  }
}

/* Be creative with this one! */
class Person {
  static #allPeople = []
  constructor(name, age, height){
    this.name = name;
    this.age = Number(age);
    this.height = Number(height);
    Person.#allPeople.push(this);
  }
  longName(){
    const name = this.name.split('')
    return name.length > 7 ? `You sure have a long name!` : `Short names are nice.`
  }
  deathDate(){
    const timeLeft = 75 - this.age;
    console.log(`The average person lives till 75, and that's highballing it. You have ${timeLeft} years left till you die too!`)
  }
  areShort(){
    if (this.height < 65){
      return `Hows the weather down there?`
    } else {
      return `You're above average height!`
    }
  }
  static list(){
    return [...Person.#allPeople]
  }
  static find(name){
    const people = Person.#allPeople;
    for (const person of people){
      if(person.name === name) return person;
    }
  }
}

module.exports = {
  Quadrilateral,
  Rectangle,
  Square,
  Person,
};
