// Intersection
type TActor = {
  name: string;
  age: number;
  lastCinema: string;
  bank_balance?: number;
};

type THero = TActor & {
  hasGirlfriend?: boolean;
};

type THeroin = TActor & {
  hasBoyfriend?: boolean;
};

const shakib: THero = {
  name: "Shakib Khan",
  age: 48,
  lastCinema: "Rajkumar",
  hasGirlfriend: true,
};

// Union
const unknown: THero | THeroin = {
  name: "unknown",
  age: 20,
  lastCinema: "Yoo Yoo",
};
