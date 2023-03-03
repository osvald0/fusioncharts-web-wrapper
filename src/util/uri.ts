const decode = (stringToDecode: string) =>
  decodeURIComponent(decodeURIComponent(stringToDecode));

export { decode };
