export const reverseString = (str: string): string => {
  return str.split('').reverse().join('');
};

export const reverseCallBack = (str: string, callback: (str: string) => string): string => {
  return callback(str);
}

// reverseCallBack("Hola", reverseString)

