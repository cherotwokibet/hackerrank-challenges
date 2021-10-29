// Complete the substrCount function below.

function substrCount(n, s) {
    let count = n;

    let [seq3, seq3_c] = [0, ''];
    let [seq2, seq2_c] = [0, ''];
    let [seq1, seq1_c] = [1, s[0]];
    
    for (let i = 1; i < n; i++) {
        const char = s[i];
        
        if (char === s[i-1]) { //Rule 1 : Matching chararcters aa or bbb 
            count += seq1++;
            console.log('kuna matching: '+count);
        } else { //Rule 2: All charcters except middle same aba or aabaa
            [seq3, seq3_c] = [seq2, seq2_c];
            [seq2, seq2_c] = [seq1, seq1_c];
            [seq1, seq1_c] = [1, char];
            // console.log('seq1: '+seq1+' seq1_c: '+seq1_c);
            // console.log('seq2: '+seq2+' seq2_c: '+seq2_c);
            // console.log('seq3: '+seq3+' seq3_c: '+seq3_c);
        }

        //Rule 2: All charcters except middle same aba or bab
        if (seq2 === 1 && seq3 >= seq1 && seq3_c === seq1_c) {
            count++;
            console.log('rule 2: '+count);
            // console.log('seq1_c:'+seq1_c);
        }
    }

    return count;

}


const y = 'abcbaba';
const z = 'aaaa';

console.log(substrCount(4,z));

