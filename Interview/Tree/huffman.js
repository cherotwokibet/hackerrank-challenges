
function decode(s,root) {
    let n = root;
    for (let i=0;i<s.length;i++) {
        n = s.charAt(i) === '0' ? n.left : n.right;
        if (!n.left && !n.right) {
            console.log(n.data);
            n = root;
        }
    }
}

