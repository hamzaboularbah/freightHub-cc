import { paginate } from "./paginate";

test("paginate", () => {
  const items = [
    { name: "hamza", age: "22" },
    { name: "fouad", age: "26" },
    { name: "amine", age: "19" },
    { name: "youness", age: "22" },
    { name: "bilal", age: "23" },
    { name: "rziki", age: "26" }
  ];
  expect(paginate(items, 2, 2)).toEqual([
    { name: "amine", age: "19" },
    { name: "youness", age: "22" }
  ]);
});
