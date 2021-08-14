export const a = async () => {};

export async function objectToArray<T>(args: any): Promise<Array<T>> {
  const keys = Object.keys(args);
  const where = await Promise.all(
    keys.map((key) =>
      JSON.parse(`{ "${key}": "${args[key].replace(/'/g, '')}" }`),
    ),
  );

  return <Array<T>>where;
}
