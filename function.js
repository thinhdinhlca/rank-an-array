window.function = function (arr, rankItem, des) {
  if (arr.value === undefined) return undefined;
  rankItem = rankItem.value ?? "";
  des = des.value;
  let sorted = [];
  if (des === true) {
    sorted = [...arr.value].sort((a, b) => b - a);
  }
  else {
    sorted = [...arr.value].sort((a, b) => a - b);
  }
  return sorted.indexOf(rankItem) + 1;
}