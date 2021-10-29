//Lowest common ancestor

function lca (root,v1,v2) {
    if(root === null) {
        return root;
    }
    if((v1 < root.data) && (v2 < root.data)) {
        root = lca(root.left,v1,v2);
    } else if ((v1 > root.data) && (v2 > root.data)) {
        root = lca(root.right,v1,v2);
    } else if ((v1 < root.data) && (v2 > root.data)) {
        return root;
    } else {
        return root;
    }
}

//Solution 2 

function lca2(root,v1,v2) {
    let min_value,max_value;
    if(v1<v2) {
        min_value = v1;
        max_value = v2;
    } else {
        max_value = v1;
        min_value = v2;
    }

    function walk_tree(node) {
        if(node.data > max_value) {
            return walk_tree(node.left);
        }
        if(node.data < min_value) {
            return walk_tree(node.right);
        }
        return node;
    }

    return walk_tree(root);

}

