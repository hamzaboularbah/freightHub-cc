import _ from "lodash";

export const paginate = (items, pageNumber, pageSize) => {
  console.log(items);
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
};
