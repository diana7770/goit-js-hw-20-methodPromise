function randomDelay(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, Math.round(Math.random() * 5000 - 1000 + 1000));
  });
}

Promise.race([
  randomDelay("8"),
  randomDelay("6"),
  randomDelay("7"),
  randomDelay("5"),
]).then((result) => {
  console.log(result);
});
