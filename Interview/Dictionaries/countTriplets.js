
function countTriplets(arr,r) {
    let count = 0;
    const map = {};
    const doubles = {};

    for (let i=arr.length -1;i >=0;i--) {
        let x = arr[i];
        let rx = x * r;
        let r2x = rx * r;
        let pairWeWant = [rx,r2x];

        if(doubles[pairWeWant] !== undefined) {
            count = count + doubles[pairWeWant]
        }

        let doub = [x,rx];
        if(doubles[doub] == undefined) doubles[doub] = 0;

        doubles[doub] = doubles[doub] + ((map[rx] == undefined) ? 0 : map[rx]);

        //Add x to map

        (map[x] == undefined) ? map[x] = 1: map[x]++;

    }
    return count;

}

function countTriplets2(arr,r) {
    let len = arr.length //1,1,3,9
    let count = 0
    var m2 = new Map()
    var m3 = new Map()
    arr.forEach((ele) => {
        if (m3.get(ele))
            count = count + m3.get(ele)

        if (m2.get(ele))
            m3.set(ele * r, m3.get(ele*r)?m3.get(ele*r)+m2.get(ele):m2.get(ele))

        m2.set(ele * r, m2.get(ele * r) ? m2.get(ele * r) + 1 : 1)
    })
    return count;
}


let z = [1,5,5,25,125];

console.log(countTriplets(z,5));

