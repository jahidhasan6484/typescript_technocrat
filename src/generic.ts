// const someNumbers: number[] = [1, 2, 3, 4, 5];
// const someChar: string[] = ["A", "B", "C"];

type TArray<T> = Array<T>;

const someNumbers: TArray<number> = [1, 2, 3, 4, 5];
const someChars: TArray<string> = ["A", "B", "C"];

type TPerson = {
  name: string;
  age: number;
};

const teamInfo: TArray<TPerson> = [
  {
    name: "Jahid",
    age: 23,
  },
  {
    name: "Rahad",
    age: 24,
  },
  {
    name: "Forhad",
    age: 26,
  },
];

// Tuple in generic
type TDynamic<X, Y> = [X, Y];

const A: TDynamic<boolean, number> = [true, 30];
const B: TDynamic<string, string> = ["Shakib Khan", "Dhaka"];

// Function in generic
const printInfo = <A, B>(first: A, second: B): void => {
  console.log(first, second);
};

printInfo<string, string>("Yoo", "Yoo");

// Interface in generic
interface IPerson<T> {
  name: string;
  age: T;
  university: string;
}

const maruf: IPerson<string> = {
  name: "Maruf Hasan",
  age: "25 years old",
  university: "DIU",
};

// console.log(maruf);

type TMovie = {
  name: string;
  realise_year: number;
  category: string;
  isBlockbuster: boolean;
};

// keyof
const favoriteMovie: TMovie = {
  name: "Don 2",
  realise_year: 2012,
  category: "Action",
  isBlockbuster: true,
};

// console.log(favoriteMovie["name"]); // hardcoted
type movieTypes = keyof TMovie;
const movieName: movieTypes = "name";
console.log(favoriteMovie[movieName]); // dynamic
