

function hasCycle(head) {
    const stack = [];
    let curr = head;
    while(curr.next) {
        if (curr.next in stack) {
            return true;
        } else {
            stack.push(curr.next);
        }
        curr = curr.next;
    }
    return false;
}

