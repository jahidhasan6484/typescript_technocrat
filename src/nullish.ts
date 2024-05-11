// Nullish Operator (It only check null and undefined)

const text: unknown = "ABC";

const checkText = text ?? "No text";

console.log(checkText);

// null => No Text
// undefined => No Text
// others => others
