// Normal Function

function sum(a: number, b: number): number {
  return a + b;
}

// console.log(sum(2, 3));

// Arrow Function
const greetings = (name: string, age: number): string => {
  return `Hello ${name}. You are ${age} years old`;
};

console.log(greetings("Jahid", 23));
