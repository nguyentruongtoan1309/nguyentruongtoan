// Use a simple loop
// Time Complexity: O(n)
// Space Complexity: O(1)
function sum_to_n_a(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
// Use mathematical formula
// Time Complexity: O(1)
// Space Complexity: O(1)
function sum_to_n_b(n) {
    return (n * (n + 1)) / 2;
}
// Use recursive
// Time Complexity: O(n)
// Space Complexity: O(n)
function sum_to_n_c(n) {
    if (n === 1) {
        return 1;
    }
    else {
        return n + sum_to_n_c(n - 1);
    }
}
function main() {
    var n = 5;
    console.log("Testing with n = ", n);
    // Using solution 1 (loop)
    var result_a = sum_to_n_a(n);
    console.log("Solution 1: ".concat(result_a));
    // Using solution 2 (mathematical formula)
    var result_b = sum_to_n_b(n);
    console.log("Solution 2: ".concat(result_b));
    // Using solution 3 (recursive)
    var result_c = sum_to_n_c(5);
    console.log("Solution 3: ".concat(result_c));
}
main();
