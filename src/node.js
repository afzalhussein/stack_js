class Node {
  set data(data) {
    this._data = data;
  }
  get data() {
    return this._data;
  }
  set next(node) {
    this._next = node;
  }
  get next() {
    return this._next;
  }
}
module.exports = Node;
