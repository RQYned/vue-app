/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let ord = Math.abs(x);//去符号
  let now = 0;
  while (ord > 0) {
    now = now * 10 + ord % 10;
    ord = Math.floor(ord / 10);
  }
  if (x < 0) {
    return now <= Math.pow(2, 31) ? -now : 0;
  } else {
    return now < Math.pow(2, 31) ? now : 0;
  }

};
// @lc code=end

