const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  root() {
    return this.root
  }

  add(data) {
    let value = {
      data: data,
      left: null,
      right: null,
    }
    if (!this.root) {
      this.root = value;
    } else {
      this.addNode(this.root, value)
    }
  }
  addNode(root, value) {
    if (root.data === value.data) {
      return;
    } else if (root.data > value.data && root.left != null) {
      this.addNode(root.left, value)
      return
    } else if (root.data < value.data && root.right != null) {
      this.addNode(root.right, value)
      return
    }
    if (root.data > value.data) {
      root.left = value;
      return;
    }
    else if (root.data < value.data) {
      root.right = value;
      return;
    }
  }
  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}


module.exports = {
  BinarySearchTree
};