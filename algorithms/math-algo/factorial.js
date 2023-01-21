// Factorial of a number:

// In mathematics, the factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n'.
// Factorial of zero is 1 => 0! = 1

// factorial(4) = 4*3*2*1 => 24
// factorial(5) = 5*4*3*2*1 => 120

// Big-O = O(n)

function factorial(n) {
	let ans = 1;

	for (let i = 2; i <= n; i++) {
		ans *= i;
	}

	return ans;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));
