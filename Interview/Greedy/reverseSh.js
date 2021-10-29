

function reverseShuffleMerge(s) {
    // Write your code here
    let map={};
    console.log('s before: '+s);
    s = s.split('').reverse('').join('');
    console.log('s after: '+s);
    for(let item of s.split('')) {
        map[item]=map[item]?map[item]+1:1;
        // console.log(map);
    }
    let ref={};
    for(let key in map) {
        // console.log('Key: '+key);
        ref[key] = map[key]/2;
        // console.log(ref);
    }
    let solution = [],i=0;
    while (solution.length<s.length/2) {
        let min_char_pos = -1;
        //find the smallest
        // console.log('min_char_pos: '+min_char_pos);

        while(true){
            let c=s[i];
            if(ref[c]>0 && (min_char_pos<0 || c<s[min_char_pos])) {
                min_char_pos = i;
            }
            map[c] -= 1;
            // console.log('map[c]: '+map[c]);
            // console.log(map);

            if(map[c] < ref[c]) {
                // console.log(map);
                break;
            }
            i+=1;
            // console.log('min_char_pos: '+min_char_pos);
        }
        //found the one, restore the count of other
        for(let j=min_char_pos+1;j<i+1;j++) {
            map[s[j]]+=1;
            // console.log(map);
        }
        //find the smallest 
        ref[s[min_char_pos]]-=1;
        // console.log('min_char_pos: '+min_char_pos);
        solution.push(s[min_char_pos]);
        i= min_char_pos+1
    }
    return solution.join('');

}


//Solution 2

function reverseShuffleMerge2(s) {
    const count = s.split('').reduce((a,c) => {
        a[c] = (a[c] || 0) + 1; return a;
    }, {});

    console.log(count);

    const reversed = {};
    const shuffled = {};

    for (const k of Object.keys(count)) {
        reversed[k] = count[k]/2;
        shuffled[k] = count[k]/2;
    }

    console.debug("reversed: %o", reversed);
    console.debug("shuffled: %o", shuffled);

    const finalString = [];

    for (let i = s.length-1; i >= 0; --i) {
        console.debug("looking at: " + s[i]);
        const char = s[i];

        // if we still need at least one of this character
        if (reversed[char] > 0) {
            console.debug("  could use this...");
            // while the character is not in ideal order
            // and the current char could go into the shuffled array
            // while (peek(finalString) && peek(finalString) > char && shuffled[peek(finalString)] > 0) {
            while (finalString > char && shuffled[finalString] > 0) {
                console.debug("    not in the best order...");
                const lastChar = finalString.pop();
                ++reversed[lastChar];
                --shuffled[lastChar];
                console.debug("      reversed: %o", reversed);
                console.debug("      shuffled: %o", shuffled);
            }

            finalString.push(char);
            --reversed[char];
            console.debug("    reversed: %o", reversed);
            console.debug("    finalString: " + finalString);
        } else {
            --shuffled[char];
        }
			
    }

    return finalString.join("");
}

const z = 'aeiouuoiea';
const a = 'abcdefgabcdefg';

console.log(reverseShuffleMerge2(a));
