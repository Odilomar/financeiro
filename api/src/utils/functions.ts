export const a = async () => {};

interface FormatToOrder {
  column: string;
  order: string;
}

export async function objectToArray<T>(args: any) {
  const keys = Object.keys(args);
  const where = await Promise.all(
    keys.map((key) =>
      JSON.parse(`{ "${key}": "${args[key].replace(/'/g, '')}" }`),
    ),
  );

  return <Array<T>>where;
}

export function formatToOrder({ column, order }: FormatToOrder) {
  return JSON.parse(`{ "${column}": "${order}" }`);
}
