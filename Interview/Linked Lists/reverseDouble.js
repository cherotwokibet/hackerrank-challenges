
function reverse(head) {
    // Write your code here
    if (!head) return null
    if (!head.next) return head
    if (head.prev) return head
  
    // Pointer
    let current = head
    // Previous pointer
    let last = null

    // Traverse the list
    while (current) {
        // Copy references
        const { next, prev } = current
        // Change the refereces
        current.next = prev
        current.prev = next
        // Save the last pointer
        last = current
        // Go to prev
        current = current.prev 
    }

    // Return the last pointer
    return last;
}

//Solution 2


function reverse(head) {
    // Write your code here
    let tempNode;
    while(head != null){
        //Swap
        tempNode = head.next;
        head.next = head.prev;
        head.prev = tempNode;
        //Break if this is last node
        if(head.prev == null)
            break;
        //Move to next node
        head = head.prev;
    }
    return head;   
}


//Solution 3


function reverse(llist) {
    // Write your code here

    if(llist.next == null) {
        llist.next = llist.prev;
        llist.prev = null;
        return llist;
    }

    [llist.prev, llist.next] = [llist.next, llist.prev];
    return reverse(llist.prev);    
}

//Solution 4

function reverse(head) {
    // Write your code here
    [head.next, head.prev] = [head.prev, head.next];
    return head.prev ? reverse(head.prev) : head;    
}


