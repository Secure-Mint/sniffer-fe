export const fixDecimals = (num: number, decimals: number) => {
  const v = num.toString().split(".");
  if (decimals <= 0) return parseFloat(v[0]);
  let f = v[1] || "";
  if (f.length > decimals) return parseFloat(`${v[0]}.${f.substr(0, decimals)}`);
  while (f.length < decimals) f += "0";
  return parseFloat(`${v[0]}.${f}`);
};
