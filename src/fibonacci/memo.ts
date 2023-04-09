const memo = Array(1000);
export const fibonacciMemo = (n: number): number => {
  if (n <= 1) {
    return n;
  }

  if (memo[n] === undefined) {
    memo[n] = fibonacciMemo(n - 1) + fibonacciMemo(n - 2);
  }

  return memo[n];
};
