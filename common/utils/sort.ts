const greaterThan: { [key: string]: number } = { asc: 1, desc: -1 };
const lessThan: { [key: string]: number } = { asc: -1, desc: 1 };

const dirMap = {
  gt: greaterThan,
  lt: lessThan
};

const doSort = (A: any, B: any, property: string, direction = "ASC") => {
  const a = A[property];
  const b = B[property];

  if (a < b) {
    return dirMap.lt[direction.toLowerCase()];
  }
  if (a > b) {
    return dirMap.gt[direction.toLowerCase()];
  }
  return 0;
};

const createSorter = (...args: any[]) => {
  if (typeof args[0] === "string") {
    args = [
      {
        direction: args[1],
        property: args[0]
      }
    ];
  }

  return (A: any, B: any) => {
    let ret = 0;

    args.some(sorter => {
      const { property, direction = "ASC" } = sorter;
      const value = doSort(A, B, property, direction);

      if (value === 0) {
        return false;
      } else {
        ret = value;

        return true;
      }
    });

    return ret;
  };
};

export { createSorter };
