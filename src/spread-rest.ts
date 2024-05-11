// Spread Operator
const brothers: string[] = ["Ashik", "Rasel", "Juyel", "Bishal"];
const sisters: string[] = ["Fatima", "Runa", "Sonia", "Rumi"];
const cousines: string[] = [];

cousines.push(...brothers, ...sisters);

// console.log(cousines);
const [cousine1, cousine2, ...rest] = cousines;

console.log(cousine1, cousine2, rest);

// Rest Parameter
const brothersBankBalance = (...amounts: number[]): number => {
  let total_balance = 0;
  amounts.map((amount) => {
    total_balance += amount;
  });

  return total_balance;
};

console.log(brothersBankBalance(500000, 100000, 0, 0));
