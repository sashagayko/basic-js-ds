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
      this.addNode(_root.left, value)
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
    return check(this._root, data);

    function check(_root, data) {
      if (!_root) {
        return false;
      }

      if (_root.data === data) {
        return true;
      }

      if (_root.data < data) {
        return check(_root.right, data);
      } else {
        return check(_root.left, data);
      }
    }
  }


  find(data) {
    return check(this._root, data);

    function check(_root, data) {
      if (!_root) {
        return null;
      }

      if (_root.data === data) {
        return _root;
      }

      if (_root.data < data) {
        return check(_root.right, data);
      } else {
        return check(_root.left, data);
      }
    }
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min(_root = this._root) {
    if (_root.left != null) return this.min(_root.left)
    else return _root.value;
  }

  max(_root = this._root) {
    if (_root.right != null) return this.max(_root.right)
    else return _root.value;
  }

}
module.exports = {
  BinarySearchTree
};