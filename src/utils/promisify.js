export function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      try {
        fn(...args, (err, data) => {
          if (err) reject(err);
          else resolve(data);
        });
      } catch (err) {
        reject(err);
      }
    });
  };
}
