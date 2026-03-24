const input = "fdfdfdf";

try {
  const number = Number(input);
  console.log(number);
  if (isNaN(number)) throw new Error("Input is not a number");
const num2 = number / 4;
catch (error) {
  console.error("An error occurred:", error.error);
  alert("Please enter a valid number");
}