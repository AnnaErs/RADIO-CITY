export const makeOptions = <T extends {}>(items: T[] | undefined, value: keyof T, label?: keyof T) =>
  (items ?? []).map(item => ({
    label: item[label ?? value],
    value: item[value]
  }));
