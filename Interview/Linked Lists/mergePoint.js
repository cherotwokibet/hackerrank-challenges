
function findMergeNode(headA, headB) {
    let visitedNodes = new Set();
    let currentNode1 = headA;
    //visit all the nodes in first list
    while(currentNode1 !== null){
        visitedNodes.add(currentNode1);
        currentNode1 = currentNode1.next;
    }
    //go through nodes in second list and 
    //check each one if it was visited already.
    // Visited node is the merge point

    let currentNode2 = headB;
    while(currentNode2 !== null){
        if(visitedNodes.has(currentNode2)){
            return currentNode2.data;
        }
        else{
            visitedNodes.add(currentNode2);
            currentNode2 = currentNode2.next;
        }
    }
    return "Crap something went wrong";

}

//Solution 2

function findMergeNode(headA, headB) {
    var a = headA; var b = headB;
    while(a != b){
        a = a.next ? a.next : headB;
        b = b.next ? b.next : headA;
    }
    return a.data;
}


//Solution 3


function findMergeNode(headA, headB) {
    if (!headA || !headB) return null;
    let currentA = headA,
        currentB = headB,
        map = new Map();
    while (currentA) {
        map.set(currentA, currentA);
        currentA = currentA.next;
    }
    while (currentB) {
        const found = map.get(currentB);
        if (found === currentB) return found.data;
        currentB = currentB.next;
    }
    return null;
}

//Solution 4

function findMergeNode4(headA,headB) {
    let currA = headA;
    let currB = headB;

    while(currA !== currB) {
        if (currA.next === null) {
            currA = headB;
        } else {
            currA = currA.next;
        }

        if (currB.next === null) {
            currB = headA;
        } else {
            currB = currB.next;
        }
    }
    return currA.data;
}

