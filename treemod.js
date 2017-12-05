Modified binary search tree of ins. Three nodes, left less than parent, middle equal to parent, right greater than parent.

Delete one node per delete method call.

deleting last value sets root to null.
deleting value not in tree does nothing. not even throw an exception.

class TreeMod {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.mid = null;
  }

  insert (node) {
    if(!(node instanceof TreeMod))
      return null;
  }

}
