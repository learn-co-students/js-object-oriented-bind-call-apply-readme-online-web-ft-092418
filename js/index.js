// use this to copy code snippets or use your browser's consolelet sally = { name: 'Sally' };
 
function greet(customer) {
  console.log(`Hi ${customer}, my name is ${this.name}!`);
}

let newGreet = greet.bind(sally);