function printStairPath(n, path) {
  if (n === 0) {
    console.log(path);
    return;
  }

  if (n < 0) {
    return;
  }

  printStairPath(n - 1, path + "1");
  printStairPath(n - 2, path + "2");
  printStairPath(n - 3, path + "3");
}

printStairPath(3, "");
