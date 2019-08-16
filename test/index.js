const leetcode = require("../src/index");
const assert = require("assert");
const console = require("console");

function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

// let twoSumResult = leetcode.twoSum([2, 7, 11, 15], 9);
// assert.equal(0, twoSumResult[0], "first two sum result not matched");
// assert.equal(1, twoSumResult[1], "second two sum result not matched");

// const l1 = new ListNode(5, new ListNode(3));
// const l2 = new ListNode(5);
// const atn1 = leetcode.addTwoNumbers(l1, l2);
// assert.equal(0, atn1.val);
// assert.equal(4, atn1.next.val);

// const l3 = new ListNode(4);
// const l4 = new ListNode(6);
// const atn2 = leetcode.addTwoNumbers(l3, l4);
// assert.equal(0, atn2.val);
// assert.equal(1, atn2.next.val);

// assert.equal(
//   3,
//   leetcode.lengthOfLongestSubstring("pwwkew"),
//   "pwwkew longest not match"
// );

// assert.equal(
//   3,
//   leetcode.lengthOfLongestSubstring("abcabcbb"),
//   "abcabcbb longest not match"
// );

// let medianNum1 = leetcode.findMedianSortedArrays2([1, 2], [3, 4]);
// assert.equal(2.5, medianNum1, "median num error");

// let palindrome0 = leetcode.longestPalindrome("babad");
// let palindrome1 = leetcode.longestPalindrome("cbbd");

// assert.equal("bab", palindrome0, "palindrome0 not matched");
// assert.equal("bb", palindrome1, "palindrome1 not matched");

// let zresult = leetcode.zconvert("LEETCODEISHIRING", 4);
// assert.equal("LDREOEIIECIHNTSG", zresult);

// var revNum0 = leetcode.reverseNumber1(1534236469);
// assert.equal(0, revNum0);

// let maxArea = leetcode.maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
// assert.equal(49, maxArea);

// var romanNum1 = leetcode.intToRoman2(1994);
// assert.equal("MCMXCIV", romanNum1);

// let romanNum2 = leetcode.romanToInt("LVIII");
// assert.equal(58, romanNum2);

// let threeSum0 = leetcode.threeSum2([-1, 0, 1, 2, -1, -4]);
// console.log(threeSum0);

// let threeSum1 = leetcode.threeSum2([-2, 0, 0, 2, 2]);
// console.log(threeSum1);

// let l5 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
// let removeNth0 = leetcode.removeNthFromEnd(l5, 4);
// console.log(removeNth0);

// let gp0 = leetcode.generateParenthesis(3);
// console.log(gp0);

// var mergeK1 = leetcode.mergeKLists([]);
// console.log(mergeK1);

// let swap1 = leetcode.swapPairs(
//   new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))
// );
// console.log(swap1);

// let revKG0 = leetcode.reverseKGroup(new ListNode(1, new ListNode(2)), 2);
// console.log(revKG0);

let remDup1 = leetcode.removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
console.log(remDup1);
