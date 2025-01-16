function sqrt(num) {
  for (let i = 0; i < num / 2; i++) {
    if (i * i === num) {
      return i;
    }
  }

  return -1;
}

console.log(sqrt(196));
