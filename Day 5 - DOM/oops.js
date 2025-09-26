class Person{
    // data members
    pname='Amaan';
    pcontact=778899;
    paddress='Vashi';

    constructor(name,contact,address){
        this.pname=name;
        this.pcontact=contact;
        this.paddress=address;
        
    }
    //member functions
    personDetails(){
        return `Name: ${this.pname} Contact: ${this.pcontact} Address: ${this.paddress}`;
    }
}
//creating an object
let personobj=new Person("Amaan",87878,"Vashi");
console.log(personobj.personDetails());