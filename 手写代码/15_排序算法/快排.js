function quickSort(list) {
    function quick(list, start, end) {
      let lower = start,
        height = end,
        key = Math.floor((start + end) / 2),
        powkey = list[key];
      list[key] = list[lower];
      list[lower] = powkey;
      while (height > lower) {
        while (list[height] >= powkey && height > lower) {
          height--;
        }
        if (lower < height) {
          list[lower++] = list[height];
        }
        while (list[lower] <= powkey && height > lower) {
          lower++;
        }
        if (lower < height) {
          list[height--] = list[lower];
        }
      }
      list[lower] = powkey;
      if (start + 1 < lower) {
        quick(list, start, lower - 1);
      }
      if (lower + 1 < end) {
        quick(list, lower + 1, end);
      }
    }
    quick(list, 0, list.length - 1);
    return list;
}

  console.log(quickSort([5, 4, 3, 6, 9, 8, 7, 1, 2]));