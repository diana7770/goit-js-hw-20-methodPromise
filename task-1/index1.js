function delayedPromise(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

Promise.all([
  delayedPromise("3", 3000),
  delayedPromise("1", 1000),
  delayedPromise("2", 1500),
  delayedPromise("4", 3500),
]).then((result) => {
  console.log(result)
});
