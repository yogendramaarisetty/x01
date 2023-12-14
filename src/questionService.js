class QuestionService {
  getQuestionById(questionId) {
    return questions.find(
      (question) => question.stat.question_id === parseInt(questionId)
    );
  }
}

export default QuestionService;
const questions = [
  {
    _id: { $oid: "64e905ed1a55c519cfd9d2ff" },
    stat: {
      question_id: 1,
      question__article__live: true,
      question__article__slug: "two-sum",
      question__article__has_video_solution: true,
      question__title: "Two Sum",
      question__title_slug: "two-sum",
      question__hide: false,
      total_acs: 10557588,
      total_submitted: 20911735,
      frontend_question_id: 1,
      is_new_question: false,
    },
    status: "ac",
    difficulty: { level: 1 },
    paid_only: false,
    is_favor: false,
    frequency: 0,
    progress: 0,
    decription:
      "Given an array of integers `nums` and an integer `target`, return _indices of\nthe two numbers such that they add up to`target`_.\n\nYou may assume that each input would have **_exactly_ one solution**, and you\nmay not use the _same_ element twice.\n\nYou can return the answer in any order.\n\n\n\n**Example 1:**\n\n    \n    \n    **Input:** nums = [2,7,11,15], target = 9\n    **Output:** [0,1]\n    **Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1].\n    \n\n**Example 2:**\n\n    \n    \n    **Input:** nums = [3,2,4], target = 6\n    **Output:** [1,2]\n    \n\n**Example 3:**\n\n    \n    \n    **Input:** nums = [3,3], target = 6\n    **Output:** [0,1]\n    \n\n\n\n**Constraints:**\n\n  * `2 <= nums.length <= 104`\n  * `-109 <= nums[i] <= 109`\n  * `-109 <= target <= 109`\n  * **Only one valid answer exists.**\n\n\n\n**Follow-up:  **Can you come up with an algorithm that is less than `O(n2)`\ntime complexity?\n\n",
  },
  {
    _id: { $oid: "64e905ed1a55c519cfd9d2fe" },
    stat: {
      question_id: 2,
      question__article__live: true,
      question__article__slug: "add-two-numbers",
      question__article__has_video_solution: true,
      question__title: "Add Two Numbers",
      question__title_slug: "add-two-numbers",
      question__hide: false,
      total_acs: 3842001,
      total_submitted: 9361522,
      frontend_question_id: 2,
      is_new_question: false,
    },
    status: "ac",
    difficulty: { level: 2 },
    paid_only: false,
    is_favor: false,
    frequency: 0,
    progress: 0,
    decription:
      "You are given two **non-empty** linked lists representing two non-negative\nintegers. The digits are stored in **reverse order** , and each of their nodes\ncontains a single digit. Add the two numbers and return the sum as a linked\nlist.\n\nYou may assume the two numbers do not contain any leading zero, except the\nnumber 0 itself.\n\n\n\n**Example 1:**\n\n![](https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg)\n\n    \n    \n    **Input:** l1 = [2,4,3], l2 = [5,6,4]\n    **Output:** [7,0,8]\n    **Explanation:** 342 + 465 = 807.\n    \n\n**Example 2:**\n\n    \n    \n    **Input:** l1 = [0], l2 = [0]\n    **Output:** [0]\n    \n\n**Example 3:**\n\n    \n    \n    **Input:** l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]\n    **Output:** [8,9,9,9,0,0,0,1]\n    \n\n\n\n**Constraints:**\n\n  * The number of nodes in each linked list is in the range `[1, 100]`.\n  * `0 <= Node.val <= 9`\n  * It is guaranteed that the list represents a number that does not have leading zeros.\n\n",
  },
  {
    _id: { $oid: "64e905ed1a55c519cfd9d2fd" },
    stat: {
      question_id: 3,
      question__article__live: true,
      question__article__slug: "longest-substring-without-repeating-characters",
      question__article__has_video_solution: true,
      question__title: "Longest Substring Without Repeating Characters",
      question__title_slug: "longest-substring-without-repeating-characters",
      question__hide: false,
      total_acs: 4817768,
      total_submitted: 14192723,
      frontend_question_id: 3,
      is_new_question: false,
    },
    status: "ac",
    difficulty: { level: 2 },
    paid_only: false,
    is_favor: true,
    frequency: 0,
    progress: 0,
    decription:
      'Given a string `s`, find the length of the **longest**\n\n**substring**\n\nwithout repeating characters.\n\n\n\n**Example 1:**\n\n    \n    \n    **Input:** s = "abcabcbb"\n    **Output:** 3\n    **Explanation:** The answer is "abc", with the length of 3.\n    \n\n**Example 2:**\n\n    \n    \n    **Input:** s = "bbbbb"\n    **Output:** 1\n    **Explanation:** The answer is "b", with the length of 1.\n    \n\n**Example 3:**\n\n    \n    \n    **Input:** s = "pwwkew"\n    **Output:** 3\n    **Explanation:** The answer is "wke", with the length of 3.\n    Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.\n    \n\n\n\n**Constraints:**\n\n  * `0 <= s.length <= 5 * 104`\n  * `s` consists of English letters, digits, symbols and spaces.\n\n',
  },
];
