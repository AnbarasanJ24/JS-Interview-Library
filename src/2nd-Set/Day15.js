// Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction.If you cannot achieve any profit, return 0.

// Input: prices = [7, 1, 5, 3, 6, 4]
// Output: 5
// Explanation: Buy on day 2(price = 1) and sell on day 5(price = 6), profit = 6 - 1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// https://takeuforward.org/data-structure/stock-buy-and-sell/

// Naive
// Run 2 loops and maintain a max
// for i= 0 to N
//  for j = i+1 to N
//      if(arr[j] > arr[i])
//          max = Math.max(max, arr[j]-arr[i])

// Time complexity O(N^2) and space complexity O(1)

// Efficient

// we have to buy less and sell with more margin 
// we need to find smaller value and greater value from the smallest value index
// Consider first day as minimum buy and start checking other days
// if any value is less than minimum buy then update the same as minimum buy
// if not that is max selling price, calculate profit on trhe same 
// Maintain a max profit and return at the last 

var maxProfit = function (prices) {

    if (prices === null || prices.length === 0) return 0;

    let minimumBuy = prices[0];
    let maxprofit = 0;

    for (let i = 1; i < prices.length; i++) {

        // If the current is lesser than minimum buy price
        if (prices[i] < minimumBuy) {
            minimumBuy = prices[i];
        } else {

            // If the current value is greater than minimum buy price
            let currentSelling = prices[i] - minimumBuy;
            maxprofit = Math.max(currentSelling, maxprofit);
        }
    }

    return maxprofit;
};

// Time complexity O(N) and space complexity O(1)


// Maximum Subarray
// Given an integer array nums, find the contiguous subarray(containing at least one number) which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.

// Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6
// Explanation: [4, -1, 2, 1] has the largest sum = 6.

// https://leetcode.com/problems/maximum-subarray/
// https://takeuforward.org/data-structure/kadanes-algorithm-maximum-subarray-sum-in-an-array/

// Naive
// Run 2 loops and maintain a currentProfit and maxProfit
// for i= 0 to N
//  currentProfit= 0;
//  for j = i to N
//      currentProfit += arr[j]
//      maxProfit = Math.max(maxSum, currentProfit)

// Time complexity O(N^2) and space complexity O(1)

// Efficient 

// Consider each day as value returned from business, so maintain currentProfit and maxProfit, 
// Add the current value to the current profit
// If it gives Positive Number then it will conribute to max profit  
// If not will not take current value and current value is less than 0 the max it as 0 (because negative value will not contribute for profit)

var maxSubArray = function (nums) {

    let currentProfit = 0;
    let maxProfit = nums[0];

    for (let num of nums) {
        currentProfit += num;
        maxProfit = Math.max(maxProfit, currentProfit);

        currentProfit = currentProfit < 0 ? 0 : currentProfit;
    }
    return maxProfit;

};

