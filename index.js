class BoardMember {
  constructor(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  }
  
  
  veto() {
  return 'No, I must disagree';
  }
  
  
  approve(){
    return 'You can do that!';
  }
  
  

 doCharity(){
   return "I very like to help people.";
  }


 releasePressStatement(){
   return "You will see great to things from Scuber.";
 }


 sayHi() {
  return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
 }
}


class Ceo extends BoardMember {
  hireEmployee(){
    return `Welcome aboard!`
  }
}