
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  if (matrix == '') return matrix;
  towelMatrix = [];
  // matrix.forEach( item => item.forEach( (number) => {
  //   console.log(item); 
  //   towelMatrix.push(number);
  // }));

  for (let i = 0; i < matrix.length; i++) {
    if ((i + 1) % 2 == 0) {
      matrix[i].reverse().forEach((num) => {
        towelMatrix.push(num);
      });
    } else {
      matrix[i].forEach((num) => {
        towelMatrix.push(num);
      });
    }
  }
  return towelMatrix;
}
