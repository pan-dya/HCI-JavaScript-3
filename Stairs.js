/*
Create a staircase with a non negative cost per step
Once the cost is paid, can climb 1 or 2 steps
finishing the payment include cost[-1] or cost [-2]
start at cost [0] or cost [1]
*/

function climbingStairs(cost) {
    for (let i = cost.length - 3; -(i + 1) ; i--) {
        cost[i] += Math.min(cost[i + 1], cost[i+2]);
    }
    return Math.min(cost[0], cost[1])
}

console.log(climbingStairs([10, 15, 20, 25, 30]));
