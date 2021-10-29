
function largestRectangle(h) {
    let maxArea = 0;
    const stack = [];
    for(let i = 0; i < h.length; i++) {
        stack.push(h[i]);
        // console.log(stack);
        let left = i;
        let right = i + 1;
        let width = 0;
        while(left >= 0 && h[left] >= [...stack].shift()) {
            width++;
            //console.log('width: '+width);
            left--;
        }
        while(right < h.length && h[right] >= [...stack].shift()){
            width++;
            right++;
        }
        maxArea = Math.max(maxArea, width * [...stack].shift());
        // console.log('maxArea: '+maxArea);
        stack.pop();
    }
    return maxArea;
}

//Solution 2

function largestRectangle2(h) {
    // Write your code here
    let maxArea = h.length;
    // console.log('maxArea: '+h.length);
    h.forEach((value, index) => {
        let i = index + 1;
        let j = index - 1;
        let tempArea = value;
        while (i < h.length && h[i] >= value) {
            tempArea += value;
            i++;
        }
        while (j >= 0 && h[j] >= value) {
            tempArea += value;
            j--;
        }
        maxArea = Math.max(tempArea, maxArea);
    });
    return maxArea;

}

//Solution 3

function largestRectangle3(h) {
    // Write your code here
    let largestArea=0;
    for(let i=0;i<h.length;i++) {
        let buildings=0;
        let n=0;
        let m=i+1;
        // counting left side buildings from position I
        // and breaking loop if not matched
        while(n<=i) {
            if(h[i-n]<h[i]) {
                break;
            }
            
            buildings++;   
            n++;
        }
        // counting right side buildings from position I
        // and breaking loop if not matched
        while(m<h.length) {
            if(h[m]<h[i]) {
                break;
            }
            buildings++;
            m++;
        }
        
        largestArea=Math.max(buildings*h[i],largestArea);
        
    }
    return largestArea;

}


const z = [1,2,3,4,5];

console.log(largestRectangle(z));

