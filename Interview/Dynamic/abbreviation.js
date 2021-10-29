
function abbreviation(a, b) {
    // Write your code here
    let dp=Array(a.length+1).fill(0);
    // console.log(dp);
    for(let i=0;i<=a.length;i++){
        dp[i]=Array(b.length+1).fill(0);
    }
    // console.log(dp);
    dp[0][0]=1;
    

    for(let i=0;i<a.length;i++) {
        for(let j=0;j<=b.length;j++) {
                if(dp[i][j]===0) continue;
                if(j<b.length && a[i].toUpperCase()===b[j]) {
                    dp[i+1][j+1]=1;
                    // console.log(dp);
                }
                if(a[i]!==a[i].toUpperCase()) {
                    dp[i+1][j]=1;
                }
        }
    }
    return dp[a.length][b.length]?"YES":"NO";

}


// Solution 2 
// missing some tests

function abbreviation2(a, b) {
    // Write your code here
    let i=0, j=0, match="YES";
    let pMatch =[];
    pMatch.push([0,0]); //initial possible match array
    while (i<a.length) {
        // console.log(pMatch)
        if (a[i]==a[i].toUpperCase()) { //if a[i] is captalized
            if (j>=b.length||a[i]!=b[j]) {
                // [i,j] = pMatch.pop()
                let t = pMatch.pop()
                // console.log(t)
                i=t[0]
                j=t[1]
                // console.log("poped: %i %i",i,j)
                if (i==0&&j==0){
                    // match= "NO"  
                    break                  
                }
                i++
            }else{
                i++;
                j++;
            }                
        } else{
            if (a[i].toUpperCase()==b[j]) {
                pMatch.push([i,j]) //Possible solution
                i++
                j++
            } else {
                i++
            }
        }
    }
    if (j<b.length) match="NO";
    
    return match;
}

let a = 'AbcDE';
let b = 'ABDE';

abbreviation(a,b);
// console.log(abbreviation(a,b));
