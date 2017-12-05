/* PLEASE DO NOT UNCOMMENT THIS BLOCK

import java.io.IOException;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.util.*;
// No other imports are permitted

// The following definitions of Tree and Node are provided.
// insert and delete will be methods of class Tree.

public class Tree {
    private class Node {
        private int val;
        private Node left = null;
        private Node right = null;
        private Node mid = null;

        public Node(int val) {
            this.val = val;
        }
    }

    private Node root;
*/

    /*
     * Please complete this method.
     * Inserts val into the tree.
     */
    public void insert(int val) {
        // if node tree instance of node root is null, put the value there
        // otherwise search the tree for the place to put the val
        Node newNode = new Node(val);
            if (root == null) {
              root = newNode;
              return;
            }
            Node current = root;
            Node parent = null;
            while (true) {
                parent = current;
                if (val < current.val) {
                    current = current.left;
                    if(current == null) {
                        parent.left = newNode;
                        return;
                    }
                } else if (val > current.val) {
                    current = current.right;
                    if (current == null) {
                        parent.right = newNode;
                        return;
                    }
                } else {
                    current = current.mid;
                    if (current == null) {
                        parent.mid = newNode;
                        return;
                    }
                }
            }

    }

    /*
     * Please complete this method.
     * Deletes only one instance of val from the tree.
     * If val does not exist in the tree, do nothing.
     */
    public void delete(int val) {
        // Delete one node per delete method call.
        // deleting last value sets root to null.
        //  deleting value not in tree does nothing. not even throw an exception.
        // otherwise search the tree for the place to put the val comparing it to the val, and whether it's =, > or <
           if(root == null) {
                return;
            }
            Node current = root;
            Node parent = null;
            boolean childOnLeftOfParent = false;
            // find val in the tree, return if we can't find it
            while(val != current.val) {
                parent = current;
                if(val < current.val) {
                    childOnLeftOfParent = true;
                    current = current.left;
                } else if (val > current.val) {
                    current = current.right;
                }
                if(current.left == null && current.right == null && current.mid == null) {
                    // if we never match and hit the bottom bottom, return
                    return;
                }
            }
            // if current has a mid, we want to delete that, it never has any non-mid children
            if(current.mid != null) {
                while(val == current.val) {
                    parent = current;
                    current = current.mid;
                    if(current.mid == null) {
                        parent.mid = null;
                        current = null;
                        return;
                    }
                }
            }

            // with no children
            if (current.left == null && current.right == null) {
                if(current == root && root.mid == null) {
                    root = null;
                } else {
                    if(childOnLeftOfParent) {
                        parent.left = null;
                    } else {
                        parent.right = null;
                    }
                }
            } else if (current.left == null) {
                // with no left child, has right child
                if (current == root && root.mid == null) {
                    root = current.right;
                } else {
                    if(childOnLeftOfParent) {
                        parent.left = current.right;
                    } else {
                        parent.right = current.right;
                    }
                }
            } else if (current.right == null) {
                // with no right child, has left child
                if (current == root && root.mid == null) {
                    root = current.left;
                } else {
                    if(childOnLeftOfParent) {
                        parent.left = current.left;
                    } else {
                        parent.right = current.left;
                    }
                }
            } else if (current.left != null && current.right != null) {
                // with both right and left child
                Node oldCurrent = current;
                Node temp = null;
                Node tempParent = null;
                current = current.right;
                while(current != null) {
                    tempParent = temp;
                    temp = current;
                    current = current.left;
                }
                if (temp != oldCurrent.right) {
                    tempParent.left = temp.right;
                    temp.right = oldCurrent.right;
                }
                if (oldCurrent == root && root.mid == null) {
                    root = temp;
                } else if (childOnLeftOfParent) {
                    parent.left = temp;
                } else {
                    parent.right = temp;
                }
                temp.left = oldCurrent.left;
            }

    }
