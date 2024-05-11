// Null

const searchText = (text: string | null): string => {
  if (text === null) {
    return "Empty";
  } else {
    return text;
  }
};

console.log(searchText("Jonny"));

// 01:30
