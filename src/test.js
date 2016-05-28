import { computedFrom } from 'aurelia-framework';

class Model {
  firstName = 'Hello';
  lastName = 'World';

  constructor(){

  }
  @computedFrom('firstName', 'lastName')
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }
}

export class Test {

  availibleOlf = [
    {id: 1, name: 'Hello'},
    {id: 2, name: 'Goodbye'},
  ];

  constructor() {
  }

  activate(){
    this.model = new Model;

  }

  attached(){
  }

  clickMe(){
    console.log(JSON.stringify(this.model));
  }
}
