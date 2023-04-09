export const fibonacciRecursive = (n: number): number => {
  if (n <= 1) {
    return n;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};
