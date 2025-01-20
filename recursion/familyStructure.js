function getGender(n, k) {
  if (n == 1 || k == 1) {
    return "Male";
  }

  const parentK = k + 1 / 2;
  const parentGender = getGender(n - 1, parentK);

  const isLeft = k % 2 === 1;

  return parentGender === "Male"
    ? isLeft
      ? "Male"
      : "Female"
    : isLeft
    ? "Female"
    : "Male";
}

console.log(getGender(3, 4));
//https://www.naukri.com/code360/problems/family-structure_981243?utm_source=youtube&utm_medium=affiliate&utm_campaign=parikh_youtube&leftPanelTabValue=PROBLEM
