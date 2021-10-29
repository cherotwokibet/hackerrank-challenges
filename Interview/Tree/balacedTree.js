

function height (root) {
    if(!root) {
        return -1;
    } else {
        return Math.max(1+height(root.left),1+height(root.right));
    }
}

