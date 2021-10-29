
//Check if its a BST 

function check(n,min,max) {
    if(!n) {
        return true;
    }
    if(n.data <= min || n.data >= max) {
        return false;
    }
    return check(n.left, min, n.data) && check(n.right,n.data,max);
}

