type CnType = (def: string, obj: Record<string, boolean>) => string;

export const cn: CnType = (def, obj) => {
  const convertedObj = Object.entries(obj).reduce<Array<string>>(
    (acc, [classes, val]) => {
      if (val) {
        acc.push(classes);
      }

      return acc;
    },
    [def]
  );
  return convertedObj.join(' ');
};
