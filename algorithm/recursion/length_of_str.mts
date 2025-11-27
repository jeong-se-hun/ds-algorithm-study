function strLength(str: string) {
  if (!str[0]) return 0;
  return strLength(str.slice(0, -1)) + 1;
}

console.log(strLength("글자수다섯"));
