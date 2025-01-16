function sqrt(num) {
  let left = 0;
  let right = num;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midSq = mid * mid;

    if (midSq === num) {
      return mid;
    } else if (midSq < num) {
      left = mid + 1;
      result = mid;
    } else {
      right = mid - 1;
    }
  }

  return result;
}

console.log(sqrt(15));
