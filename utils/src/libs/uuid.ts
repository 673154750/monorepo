/**
 * 获取len长度的随机数
 * @param len 随机数长度
 */
export function getUuid(len: number) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
    ""
  );
  const uuid = [];
  let i: number;
  const radix = chars.length;
  if (len) {
    for (i = 0; i < len; i++) {
      uuid[i] = chars[Math.floor(Math.random() * radix)];
    }
  } else {
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
    uuid[14] = "4";
    let r: number;
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = Math.floor(Math.random() * 16);
        uuid[i] = chars[i === 19 ? Math.floor(Math.random() * 4) + 8 : r];
      }
    }
  }
  return uuid.join("");
}
