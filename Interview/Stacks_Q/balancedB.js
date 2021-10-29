
function isBalanced(s) {
    // Write your code here
    let result = 'YES';
    let stack = [];
    // let p = s.split('');
    // console.log(p);

    s.split('').forEach((val) => {
        switch(val) {
            case '{':
                stack.push('}');
                break;
            case '[':
                stack.push(']');
                break;
            case '(':
                stack.push(')');
                break;
            default:
                let test = stack.pop();
                console.log(test);
                if (val !== test) {
                    result = 'NO';
                }    
        }
    })
    if (stack.length) {
        result = 'NO';
        // console.log('Ni length');
    }
    return result;

}


// Solution 2

function isBalanced2(s) {
    const brackets = [];
    const opening = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] in opening) {
            brackets.push(s[i]);
        } else {
            if (opening[brackets[brackets.length - 1]] === s[i]) {
                brackets.pop();
            } else {
                return 'NO';
            }

        }
    }
    return brackets.length === 0 ? 'YES' : 'NO';
}


const x = '{[()]}';
const y = '{[(])}';

console.log(isBalanced(y));
