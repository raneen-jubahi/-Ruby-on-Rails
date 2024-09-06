function findMissingNumbers(arr) {
    arr.sort((a, b) => a - b); // ترتيب المصفوفة
    let fullRange = [];
  
    for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
      fullRange.push(i);
    }
  
    let missingNumbers = fullRange.filter(num => !arr.includes(num));
    return missingNumbers;
  }
  
  console.log(findMissingNumbers([2, 1, 5, 4, 6, 9, 7, 8, 10])); // يطبع [3]
  