//useful function for generating a random number that wont be reused.
export default function randomNumber(min: number, max: number) {
  const arr = [];
  let i = 0;
  for (i = 0; i < max; i++) {
    const x = Math.floor(Math.random() * max) + min;
    if (arr.includes(x) == true) {
      i = i - 1;
    } else {
      if (x > max == false) {
        arr.push(x);
      }
    }
  }
  return arr[0];
}
