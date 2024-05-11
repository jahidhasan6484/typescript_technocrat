const hero: {
  readonly name: string;
  age: number;
  isMarried?: boolean;
} = {
  name: "Shakib Khan",
  age: 48,
  isMarried: true,
};

hero.age = 49;
// console.log(hero);

const { age } = hero;
console.log(age);
