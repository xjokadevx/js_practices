const result = (function estimatePi(toCalculate) {
  let total_points = 0;
  let total_points_into_circle = 0;
  const arrayRange = [...Array(toCalculate + 1).keys()];
  for (_ in arrayRange) {
    const x_axis = Math.random();
    const y_axis = Math.random();
    const distance = Math.pow(x_axis, 2) + Math.pow(y_axis, 2);
    if (distance <= 1) {
      total_points_into_circle += 1;
    }
    total_points += 1;
  }
  return (4 * total_points_into_circle) / total_points;
})(100000000);

console.log("result", result);
