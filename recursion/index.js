/* Rules:
    1. Identify the base case (when to stop)
    2. Identify the recursive case 
    3. Get closer and closer and return when needed. (usually 2 returns)
*/

/* When to use:
    1. Divided into a number of subproblems that are smaller instances of the same problems
    2. Each istance of the subproblem is identical in nature
    3. The solutions of each subproblem can be combined to solve the problem at hand
*/

/* Extremely useful with: 
    1. Merge Sort
    2. Quick Sort
    3. Tree Traversal
    4. Graph Traversal
*/

// Example:
let counter = 0

const recursiveFunction = () => {
  console.log(counter)
  counter++
  return counter > 3 ? "done" : recursiveFunction()
}

recursiveFunction()
