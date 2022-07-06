class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    get age() {
         return this._age; 
    }
    get name() {
         return this._name; 
    }       
      compareAge(obj){
        let e = this.age;
        let oggetto = obj.age;

        if(e < oggetto){
          console.log(`${this._name} è più piccolo di ${obj.name}`);
        }else if(e == oggetto){
            console.log(`${this._name} è coetaneo di ${obj._name}`);
        }else{
            console.log(`${this._name} è più grande di ${obj._name}`);
        }  
    }  
}
        
let p1 = new Person("Flavio", 30);
let p2 = new Person("Marco", 25);
let p3 = new Person("Paolo", 43);
let p4 = new Person("Donato", 30);

p1.compareAge(p2);
p1.compareAge(p4);
p1.compareAge(p3);

