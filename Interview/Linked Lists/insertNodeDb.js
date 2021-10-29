
function sortedInsert(head, data) {
    // Write your code here
    let newNode = new DoublyLinkedListNode(data);
    if(!head){
        head = newNode;
        return head;
    }
    if(data <head.data){
        newNode.next = head;
        head.prev = newNode;
        return newNode;
    }

    let currentNode = head;
    while(data > currentNode.data){ 
        let refNode = currentNode;
        currentNode = currentNode.next;
        if(refNode.next === null){
            refNode.next = newNode;
            newNode.next = null;
            newNode.prev = refNode;
            return head;
        }
    }
    let leadingPosition = currentNode.prev;
    leadingPosition.next = newNode;
    newNode.next = currentNode;
    currentNode.prev = newNode;
    newNode.prev = leadingPosition;
  
    return head;

}


//Solution 2


function sortedInsert(llist, data) {
    // Write your code here
    const llObj = new DoublyLinkedListNode(data);
    let node = llist;
    if(!node) return llObj; // empty list
    
    if(data < node.data){ // new data to be prepended
        llObj.next = llist;
        llist = llObj
        return llist;
    }
    
    while(data > node.data){ // keep iterating till we find the new data's place
        
        if(!node.next){ // new data to be appended
            if(data>node.data){
                llObj.prev = node;
                node.next = llObj;
                return llist
            }
        }
        
        
        node = node.next;
    }
    // break the list and insert the new data
    const prev = node.prev;
    llObj.prev = prev;
    prev.next = llObj;
    llObj.next = node;
          
        
    return llist

}

// Solution 3


function sortedInsert(head, data) {
    // Write your code here
    let node = { data, next: null, prev: null }
    if (!head) return node

    if (data <= head.data) {
        node.next = head
        head.prev = node
        return node
    }

    let  rest = sortedInsert(head.next, data)
    head.next = rest
    rest.prev = head
    return head
}


