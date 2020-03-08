/*
 * @lc app=leetcode id=273 lang=javascript
 *
 * [273] Integer to English Words
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
  if (num === 0) return 'Zero';
  let result = '';
  function helper(left, num, radix) {
    let char = [];
    let numChar = [
      'Zero',
      'One',
      'Two',
      'Three',
      'Four',
      'Five',
      'Six',
      'Seven',
      'Eight',
      'Nine',
      'Ten',
      'Eleven',
      'Twelve',
      'Thirteen',
      'Fourteen',
      'Fifteen',
      'Sixteen',
      'Seventeen',
      'Eighteen',
      'Nineteen',
      'Twenty',
    ];
    let tyChar = [
      'Zero',
      'Ten',
      'Twenty',
      'Thirty',
      'Forty',
      'Fifty',
      'Sixty',
      'Seventy',
      'Eighty',
      'Ninety',
    ];
    let radixChar = ['Hundred', 'Thousand', 'Million', 'Billion', 'Trillion'];
    num = num % 10000;
    let currThousand = Math.floor(num / 1000);
    console.log('numberToWords -> currThousand', currThousand);
    num = num % 1000;
    let currHundred = Math.floor(num / 100);
    console.log('numberToWords -> currHundred', currHundred);
    num = num % 100;
    let currTen = Math.floor(num / 10);
    console.log('numberToWords -> currTen', currTen);

    if (currThousand || left) {
      char.push(radixChar[radix]);
    }
    if (currHundred) {
      char.push(numChar[currHundred] + ' ' + radixChar[0]);
    }
    if (currTen > 1) {
      char.push(tyChar[currTen]);
      num = num % 10;
    }
    if (num) {
      char.push(numChar[num]);
    }
    console.log('numberToWords -> num', num);
    console.log('helper -> char', char);

    result = char.join(' ') + ' ' + result;
  }
  let i = 0;
  while (num) {
    let right = num % 1000;
    num = Math.floor(num / 1000);
    helper(num, right, ++i);
  }
  result = result
    .replace('Billion Million', 'Billion')
    .replace('Billion Thousand', 'Billion')
    .replace('Billion Million Thousand', 'Billion')
    .replace('Million Thousand', 'Million');
  return result.trim();
};

console.log(numberToWords(100000000));
// @lc code=end
