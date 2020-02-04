import { cloneDeep } from "lodash";

const greaterThan: { [key: string]: number } = { asc: 1, desc: -1 };
const lessThan: { [key: string]: number } = { asc: -1, desc: 1 };

const dirMap = {
  gt: greaterThan,
  lt: lessThan
};

export function sortArray<T, K extends keyof T>(values: T[], property: K, direction = "ASC") {
  const result = cloneDeep(values);
  return result.sort((A: T, B: T) => {
    if (A[property] < B[property]) {
      return dirMap.lt[direction.toLowerCase()];
    }

    if (A[property] > B[property]) {
      return dirMap.gt[direction.toLowerCase()];
    }

    return 0;
  });
}
