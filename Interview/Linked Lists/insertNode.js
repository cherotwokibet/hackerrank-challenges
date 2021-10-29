
function insertNodeAtPosition(llist, data, position) {
    // Write your code here
    const node = new SinglyLinkedListNode(data)
    let current = llist
    
    for (let i = 0; i < position - 1; i++) {
        if (current.next) {
            current = current.next
        }
    }
    
    node.next = current.next
    current.next = node
    
    return llist

}

//Solution 2

function insertNodeAtPosition(llist, data, position) {
    // Write your code here
    //llist -> head
    let newNode = new SinglyLinkedListNode(data);
    let pre = null;
    let current = llist;
    let index = 0;
    while (true) {
        if (index === position) {
            let temp = current;
            pre.next = newNode;
            newNode.next = temp;
            break;
        }
        pre = current;
        current = current.next;
        index++;
    }

    return llist;

}

//Solution 3

function insertNodeAtPosition(head, data, position) {
    const node = new SinglyLinkedListNode(data);
    if (!head) {
        head = node;
    } else {
        var prev = head;
        var current = head.next
        for (var i = 0; i !== position - 1; i++) {
            prev = prev.next;
            current = current.next
        }
        prev.next = node
        node.next = current
    }
    return head
}

