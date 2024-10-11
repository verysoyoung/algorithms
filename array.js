function array() {
  const arr = [1, 2, 3];
  console.log(arr);
  arr.push(4); //O(1)
  arr.push(5, 6);
  console.log(arr);

  arr.splice(4, 0, 55); //O(n)
  console.log(arr);
  arr.splice(2, 1);
  console.log(arr);
}

array();
