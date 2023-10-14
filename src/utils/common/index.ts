export const makeOptions = <T extends {}>(
  items: T[] | undefined,
  value: keyof T,
  label?: keyof T
): {label: string; value: string}[] =>
  (items ?? []).map(item => ({
    label: item[label ?? value] as string,
    value: item[value] as string
  }));
