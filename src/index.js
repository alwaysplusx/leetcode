const console = require("console");

const range = [-Math.pow(2, 31), Math.pow(2, 31) - 1];

/**
 * add two numbers input data struct
 */
function ListNode(val, next) {
  this.val = val;
  this.next = next || null;
}

class Leetcode {
  twoSum(nums, target) {
    const values = {};
    for (let i = 0; i < nums.length; i++) {
      const v = nums[i];
      const idx = values[target - v];
      if (idx != undefined) {
        return [idx, i];
      }
      values[v] = i;
    }
    throw Error("no matched");
  }

  addTwoNumbers(l1, l2) {
    var carry = 0;

    var result = new ListNode();
    var current = result;

    var c1 = l1;
    var c2 = l2;
    while (true) {
      var val = ((c1 && c1.val) || 0) + ((c2 && c2.val) || 0) + carry;

      if (val >= 10) {
        current.val = val - 10;
        carry = 1;
      } else {
        current.val = val;
        carry = 0;
      }

      c1 = c1 && c1.next ? c1.next : undefined;
      c2 = c2 && c2.next ? c2.next : undefined;

      if (!c1 && !c2 && carry == 0) {
        break;
      }

      current.next = new ListNode();
      current = current.next;
    }

    return result;
  }

  // 最长无重复连续字符长度
  lengthOfLongestSubstring(s) {
    let length = s.length;
    let map = {};
    let result = 0;
    for (let i = 0, j = 0; i < length && j < length; ) {
      var c = s.charAt(i);
      if (map[c]) {
        delete map[s.charAt(j++)];
      } else {
        map[c] = 1;
        i++;
        result = Math.max(result, i - j);
      }
    }
    return result;
  }

  lengthOfLongestSubstring2(s) {
    let length = s.length;
    let result = 0;
    let idx = 0;
    for (let i = 0, j = 0; i < length; i++) {
      idx = s.substring(i, j).indexOf(s.charAt(i));
      if (idx == -1) {
        result = Math.max(result, i - j + 1);
      } else {
        j = j + idx + 1;
      }
    }
    return result;
  }

  /**
   * 中位数
   * 要求时间复杂度 = O(log(m + n))
   */
  findMedianSortedArrays(nums1, nums2) {}

  findMedianSortedArrays2(nums1, nums2) {
    let arr = [];
    let length1 = nums1.length;
    let length2 = nums2.length;

    for (let i = 0, j = 0; i < length1 || j < length2; ) {
      if (nums1[i] == undefined) {
        arr.push(nums2[j++]);
        continue;
      }

      if (nums2[j] == undefined) {
        arr.push(nums1[i++]);
        continue;
      }

      arr.push(nums1[i] <= nums2[j] ? nums1[i++] : nums2[j++]);
    }
    let arrLength = arr.length;
    return arrLength % 2 == 1
      ? arr[Math.floor(arrLength / 2)]
      : (arr[arrLength / 2 - 1] + arr[arrLength / 2]) / 2;
  }

  /**
   * 最长回文
   */
  longestPalindrome(s) {
    if (s.length <= 1) {
      return s;
    }
    // 选取一个中心回文进行扩展, 得到以此会问可扩展的长度
    let length = s.length;
    let i = 0.5;
    let result = "";
    while (i < length) {
      let temp = this.expandPalindrome(s, i);
      if (temp.length > result.length) {
        result = temp;
      }
      i = i + 0.5;
    }
    return result.length == 0 ? s[0] : result;
  }

  expandPalindrome(s, mid) {
    let step = mid % 1 == 0 ? 1 : 0.5;
    let begin = mid - step,
      end = mid + step;

    if (s[begin] != s[end]) {
      return "";
    }

    while (begin >= 0 && end < s.length && s[begin] == s[end]) {
      begin--;
      end++;
    }

    return s.substring(begin + 1, end);
  }

  /**
   * Z(N)字形变换
   * 过度字段(行-列-总字符数): 3-2-4, 4-3-6, 5-4-8.
   */
  zconvert(s, numRows) {
    if (numRows == 1 || s.length <= numRows) {
      return s;
    }
    let length = s.length;
    let unitNums = numRows * 2 - 2;
    let result = [];
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j + i < length; j += unitNums) {
        result.push(s[j + i]);
        if (i != 0 && i != numRows - 1 && j + unitNums - i < length) {
          result.push(s[j + unitNums - i]);
        }
      }
    }
    return result.join("");
  }

  reverseNumber(x) {
    let result = [];
    let isNegative = x < 0;
    let xStr = Math.abs(x).toString();
    let limitStr = Math.abs(isNegative ? range[0] : range[1]).toString();
    let xStrLength = xStr.length;
    let limitStrLength = limitStr.length;

    let isPassed = xStr.length < limitStr.length;
    let isOverflow = false;

    for (let i = xStrLength - 1; i >= 0; i--) {
      let c = xStr.charAt(i);

      if (i > limitStrLength && c != "0") {
        isOverflow = true;
        break;
      }

      let inRange = i <= limitStrLength;
      let limitc = inRange ? limitStr[limitStrLength - i - 1] : undefined;

      if (!isPassed && inRange) {
        if (limitc < c) {
          isOverflow = true;
          break;
        }
        isPassed = limitc > c;
      }

      if (
        (isPassed || (inRange && limitc <= c)) &&
        (result.length != 0 || c != "0")
      ) {
        result.push(c);
      }
    }

    return isOverflow ? 0 : result.join("") * (isNegative ? -1 : 1);
  }

  reverseNumber1(x) {
    let revX =
      parseInt(
        x
          .toString()
          .split("")
          .reverse()
          .join(""),
        10
      ) * (x < 0 ? -1 : 1);
    return revX <= 2147483646 && revX >= -2147483648 ? revX : 0;
  }

  maxArea(height) {
    let length = height.length;
    let left = 0,
      right = length - 1;
    let result = 0;

    while (left < right) {
      let x = right - left;
      let y = Math.min(height[left], height[right]);
      result = Math.max(result, x * y);

      height[left] > height[right] ? right-- : left++;
    }

    return result;
  }

  intToRoman(num) {
    const roman = [["I", "V"], ["X", "L"], ["C", "D"], ["M"]];
    let result = "";
    let x = num;

    for (let i = 0; x > 0; i++) {
      let n = x % 10;
      x = (x - n) / 10;
      // 4 || 9, 特例显示
      if (n == 0) {
        continue;
      }
      let c = "";
      let elements = roman[i];
      switch (n) {
        case 1:
        case 2:
        case 3:
          // n个one
          c = elements[0].repeat(n);
          break;
        case 4:
          // half - one
          c = elements[0] + elements[1];
          break;
        case 5:
        case 6:
        case 7:
        case 8:
          // half + n个one
          c = elements[1] + elements[0].repeat(n - 5);
          break;
        case 9:
          // ten - one
          c = elements[0] + roman[i + 1][0];
          break;
      }

      result = c + result;
    }
    return result;
  }

  intToRoman2(num) {
    let nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let roman = [
      "M", // 1000
      "CM",
      "D", // 500
      "CD",
      "C", // 100
      "XC",
      "L", // 50
      "XL",
      "X", // 10
      "IX",
      "V", // 5
      "IV",
      "I" // 1
    ];
    let n = num;
    let result = "";
    let index = 0;
    while (index < nums.length) {
      while (n >= nums[index]) {
        result = result + roman[index];
        n = n - nums[index];
      }
      index++;
    }
    return result;
  }

  romanToInt(s) {
    let length = s.length;
    let i = length - 1;
    let roman = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
    let pre = 1;
    let result = 0;
    while (i >= 0) {
      let num = roman[s[i]];
      result += num >= pre ? num : num * -1;
      i--;
      pre = num;
    }
    return result;
  }

  /**
   * 三数和 = 0;
   * FIXME 算法超时: https://leetcode-cn.com/submissions/detail/25918872/testcase/
   */
  threeSum(nums) {
    let length = nums.length;
    let result = [];
    let map = {};
    nums.sort((v1, v2) => v1 - v2);
    for (let i = 0; i < length - 2; i++) {
      for (let j = i + 1; j < length - 1; j++) {
        let target = 0 - nums[i] - nums[j];
        if (nums.slice(j + 1).indexOf(target) != -1) {
          let key = [nums[i], nums[j], target].join();
          if (!map[key]) {
            result.push([nums[i], nums[j], target]);
            map[key] = 1;
          }
        }
        if (nums[i] == nums[j]) {
          i = j;
        }
      }
    }
    return result;
  }

  threeSum2(nums) {
    nums.sort((v1, v2) => v1 - v2);
    let length = nums.length;
    let num, left, right;
    let result = [];

    if (nums[0] > 0 || nums[length - 1] < 0) {
      return [];
    }

    for (let i = 0; i < length - 2; i++) {
      num = nums[i];
      left = i + 1;
      right = length - 1;

      if (num > 0) {
        break;
      }

      if (i != 0 && num == nums[i - 1]) {
        // i>0, 如果与前数重复则忽略
        continue;
      }

      while (left < right) {
        let sum = num + nums[left] + nums[right];
        if (sum == 0) {
          result.push([num, nums[left], nums[right]]);
        }

        if (sum <= 0) {
          while (nums[left] == nums[++left]) {}
          if (sum == 0) right--;
        } else {
          while (nums[right] == nums[--right]) {}
        }
      }
    }
    return result;
  }

  removeNthFromEnd(head, n) {
    let rCount = 0;
    let result = head;

    function doRemove(preNode, node) {
      if (node.next) {
        doRemove(node, node.next);
      }

      if (++rCount == n) {
        if (preNode == undefined) {
          result = node.next;
        } else {
          preNode.next = node.next;
        }
      }
    }

    doRemove(undefined, result);
    return result;
  }

  mergeTwoLists(l1, l2) {
    let flag;
    let result = (current = new ListNode());
    let c1 = l1;
    let c2 = l2;
    do {
      if (!c1) {
        current.next = c2;
        break;
      }
      if (!c2) {
        current.next = c1;
        break;
      }
      flag = c1.val <= c2.val;
      if (flag) {
        current.next = c1;
        c1 = c1.next;
      } else {
        current.next = c2;
        c2 = c2.next;
      }
      current = current.next;
    } while (c1 || c2);
    return result.next;
  }

  // 构造法(插位): 按'()'插入, 在已有的结果集中分位插入.
  // 如: '1(2)3', 有三个位置可以插入, 缺点需要去重.
  // 回溯法: 在保持有效的基础上, 枚举出'('的可能的情况, 然后再添加与之匹配的')'
  generateParenthesis(n) {
    let result = [];
    function generate(str, open, close) {
      // 在结果中添加n个'('
      if (open < n) {
        generate(str + "(", open + 1, close);
      }
      // 有'('必定添加')'
      if (close < open) {
        generate(str + ")", open, close + 1);
      }
      if (str.length == n * 2) {
        result.push(str);
      }
    }
    return generate("", 0, 0) || result;
  }

  mergeKLists(lists) {
    if (lists.length <= 1) {
      return lists.length == 0 ? new ListNode() : lists[0];
    }
    let result = lists[0];
    for (let i = 1; i < lists.length; i++) {
      result = this.mergeTwoLists(result, lists[i]);
    }
    return result;
  }

  swapPairs(head) {
    if (!head || !head.next) {
      return !head ? null : head;
    }

    let first = head;
    let second = head.next;

    // exchange
    let temp = second.next;
    second.next = first;
    first.next = this.swapPairs(temp);
    return second;
  }

  reverseKGroup(head, k) {
    if (!head || !head.next || k == 1) {
      return head;
    }
    function reverse() {
      let count = 0;
      let first;
      let flip = false;
      let next;
      function innerReverse(preNode, node) {
        //
        flip = count == k;
        if (!node) {
          return preNode;
        }

        if (!first) {
          first = node;
        }

        if (count == k) {
          next = node;
          return preNode;
        }

        let cIndex = count++;
        let rnode;

        if (cIndex < k) {
          rnode = innerReverse(node, node.next);
        }

        if (flip) {
          node.next = preNode;
        }

        if (cIndex == 0 && next) {
          first.next = reverse()(undefined, next);
        }

        // 开启下一个k翻转
        return flip ? rnode : node;
      }
      return innerReverse;
    }
    return reverse()(undefined, head);
  }

  reverseKGroup1(head, k) {
    let node = head;
    let count = 0;
    while (count < k && node) {
      node = node.next;
      count++;
    }
    if (count == k) {
      node = this.reverseKGroup1(node, k);
      while (count > 0) {
        let temp = head.next;
        head.next = node;
        node = head;
        head = temp;
        count--;
      }
      head = node;
    }
    return head;
  }

  removeDuplicates(nums) {
    let length = nums.length;
    let i = 0;
    let j = 1;
    for (; i < length; i++) {
      for (; j < length; j++) {
        if (nums[i] != nums[j]) {
          nums[i + 1] = nums[j];
          break;
        }
      }
      if (j >= length) {
        break;
      }
    }
    return i + 1;
  }
  divide(dividend, divisor) {
    // 不得使用: 乘 & 除 & 模
  }
}

module.exports = new Leetcode();
