const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    let value = {
      data: data,
      left: null,
      right: null,
    }
    if (!this._root) {
      this._root = value;
    } else {
      this.addNode(this._root, value)
    }
  }
  addNode(_root, value) {
    if (_root.data === value.data) {
      return;
    } else if (_root.data > value.data && _root.left != null) {
      this.addNode(root.left, value)
      return
    } else if (_root.data < value.data && _root.right != null) {
      this.addNode(_root.right, value)
      return
    }
    if (_root.data > value.data) {
      _root.left = value;
      return;
    }
    else if (_root.data < value.data) {
      _root.right = value;
      return;
    }
  }
  has(data) {
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

  min(_root = this._root) {
    if (_root.left != null) return this.min(root.left)
    else return _root.value;
  }

  max(_root = this._root) {
    if (_root.right != null) return this.max(root.right)
    else return _root.data;
  }
}

module.exports = {
  BinarySearchTree
};