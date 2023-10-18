// Instructions can be found in ternaries.md

export function sayHello(name) {
   const greeting = name === undefined ? "Hello you!" : "Hello, " +name + "!";
   console.log(greeting);
   return greeting;
  }
