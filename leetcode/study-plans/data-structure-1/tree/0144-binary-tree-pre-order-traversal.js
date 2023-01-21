/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function preorderTraversal(root) {
	if (!root) return [];
	let visited = [];

	function traverse(node) {
		visited.push(node.val);
		if (node.left) traverse(node.left);
		if (node.right) traverse(node.right);
	}
	traverse(root);
	return visited;
}
