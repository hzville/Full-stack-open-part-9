export const assertNever = (value: never): never => {
  throw new Error(`Unhandeled switch case option ${JSON.stringify(value)}`);
}